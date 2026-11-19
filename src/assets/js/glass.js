// Liquid Glass: rifrazione sul bordo di un rettangolo arrotondato convesso.
// Modello adattato da https://kube.io/blog/liquid-glass-css-svg/ (legge di Snell + luce speculare).
// Il filtro SVG funziona come backdrop-filter solo su Chromium; altrove resta la sfocatura CSS.

const INDEX = 1.5; // indice di rifrazione del vetro
const SCALE = 90; // deve coincidere con lo scale di feDisplacementMap
const profiles = {
  satinato: { bevel: 16, thickness: 26, shine: .75 },
  lucido: { bevel: 22, thickness: 40, shine: 1 },
  fume: { bevel: 12, thickness: 18, shine: .45 },
};

const supported = () => navigator.userAgentData?.brands?.some(({ brand }) => /Chromium/.test(brand)) ?? false;

// Distanza con segno dal bordo di un rettangolo arrotondato (negativa all'interno).
function roundedBoxDistance(x, y, halfW, halfH, radius) {
  const qx = Math.abs(x) - (halfW - radius);
  const qy = Math.abs(y) - (halfH - radius);
  return Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0) - radius;
}

function buildMaps(width, height, radius, { bevel, thickness, shine }) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  const map = context.createImageData(width, height);
  const light = context.createImageData(width, height);
  const halfW = width / 2;
  const halfH = height / 2;
  const edge = Math.min(bevel, halfH - 1);
  const sun = [-Math.SQRT1_2, -Math.SQRT1_2]; // luce dall'alto a sinistra

  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      const i = (py * width + px) * 4;
      const x = px + .5 - halfW;
      const y = py + .5 - halfH;
      const inside = -roundedBoxDistance(x, y, halfW, halfH, radius);
      let dx = 0;
      let dy = 0;
      let glow = 0;

      if (inside > 0 && inside < edge) {
        // Normale 2D: gradiente della distanza, verso l'esterno.
        const gx = roundedBoxDistance(x + .5, y, halfW, halfH, radius) - roundedBoxDistance(x - .5, y, halfW, halfH, radius);
        const gy = roundedBoxDistance(x, y + .5, halfW, halfH, radius) - roundedBoxDistance(x, y - .5, halfW, halfH, radius);
        const length = Math.hypot(gx, gy) || 1;
        const nx = gx / length;
        const ny = gy / length;

        // Profilo a squircle convesso: altezza e pendenza della superficie.
        const t = 1 - inside / edge;
        const height = (1 - t ** 4) ** .25;
        const slope = (thickness / edge) * (t ** 3) / Math.max(height ** 3, .05);

        // Snell: il raggio verticale devia in funzione dell'angolo della superficie.
        const incidence = Math.atan(slope);
        const refracted = Math.asin(Math.sin(incidence) / INDEX);
        const shift = Math.min(thickness * Math.tan(incidence - refracted), SCALE / 2);
        dx = -nx * shift;
        dy = -ny * shift;
        glow = Math.max(0, nx * sun[0] + ny * sun[1]) * t ** 2 * shine;
      }

      map.data[i] = 128 + (dx / SCALE) * 255;
      map.data[i + 1] = 128 + (dy / SCALE) * 255;
      map.data[i + 2] = 128;
      map.data[i + 3] = 255;
      light.data[i] = light.data[i + 1] = light.data[i + 2] = 255;
      light.data[i + 3] = glow * 200;
    }
  }

  context.putImageData(map, 0, 0);
  const mapUrl = canvas.toDataURL();
  context.clearRect(0, 0, width, height);
  context.putImageData(light, 0, 0);
  return { mapUrl, lightUrl: canvas.toDataURL() };
}

let count = 0;

export function liquidGlass(layer, name) {
  if (!layer || !supported() || matchMedia('(prefers-reduced-transparency: reduce)').matches) return;
  const profile = profiles[name] ?? profiles.satinato;
  const id = `ire-glass-${count++}`;
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '0');
  svg.setAttribute('height', '0');
  svg.setAttribute('aria-hidden', 'true');
  svg.style.position = 'absolute';
  svg.innerHTML = `<filter id="${id}" x="0" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feImage result="map" preserveAspectRatio="none"/>
    <feDisplacementMap in="SourceGraphic" in2="map" scale="${SCALE}" xChannelSelector="R" yChannelSelector="G" result="bent"/>
    <feImage result="light" preserveAspectRatio="none"/>
    <feBlend in="light" in2="bent" mode="screen"/>
  </filter>`;
  document.body.append(svg);
  const filter = svg.querySelector('filter');
  const [mapImage, lightImage] = svg.querySelectorAll('feImage');

  const render = () => {
    const width = Math.round(layer.offsetWidth);
    const height = Math.round(layer.offsetHeight);
    if (!width || !height) return;
    const radius = Math.min(parseFloat(getComputedStyle(layer).borderTopLeftRadius) || 0, height / 2);
    // Elementi piccoli: bordo e spessore in proporzione, per non deformare troppo.
    const k = Math.min(1, height / 64);
    const sized = { ...profile, bevel: profile.bevel * k, thickness: profile.thickness * k };
    const { mapUrl, lightUrl } = buildMaps(width, height, radius, sized);
    for (const element of [filter, mapImage, lightImage]) {
      element.setAttribute('width', width);
      element.setAttribute('height', height);
    }
    mapImage.setAttribute('href', mapUrl);
    lightImage.setAttribute('href', lightUrl);
    layer.classList.add('is-liquid');
    layer.style.setProperty('--glass-filter', `url(#${id})`);
  };

  let frame;
  new ResizeObserver(() => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(render);
  }).observe(layer);
}
