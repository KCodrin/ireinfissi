import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const missing = await readFile(resolve(root, '404.html'));
const port = Number(process.env.PORT ?? 4173);
const type = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

createServer(async (request, response) => {
  try {
    const { pathname, search } = new URL(request.url, 'http://localhost');
    let file = resolve(root, `.${decodeURIComponent(pathname)}`);
    if (file !== root && !file.startsWith(root + sep)) throw new Error('Percorso esterno');

    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(308, { Location: `${pathname}/${search}` }).end();
        return;
      }
      file = resolve(file, 'index.html');
    }

    const data = await readFile(file);
    response.writeHead(200, { 'Content-Type': type[extname(file)] ?? 'application/octet-stream' });
    response.end(request.method === 'HEAD' ? undefined : data);
  } catch {
    response.writeHead(404, { 'Content-Type': type['.html'] });
    response.end(request.method === 'HEAD' ? undefined : missing);
  }
}).listen(port, '127.0.0.1', () => console.log(`Anteprima locale: http://127.0.0.1:${port}/`));
