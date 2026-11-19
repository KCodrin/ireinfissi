export const site = {
  name: 'IRE Torino',
  origin: 'https://iretorino.com',
  legalName: 'IRE SAS DI CORRENTI LUCA & C.',
  vat: '12948550012',
  phone: '+39 376 20 58 269',
  telephone: '+393762058269',
  email: 'info@iretorino.it',
  taxCode: '12948550012',
  euVat: 'IT12948550012',
  rea: 'TO 1327971',
  pec: 'irecorrenti@pec.it',
  registeredOffice: {
    street: 'Via Ettore De Sonnaz 17',
    postalCode: '10121',
    city: 'Torino',
    province: 'TO',
  },
  operatingOffice: {
    address: 'Via Rivarolo 45, 10079 Mappano (TO)',
    mapUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0x47886d77b672d03b:0x8db7be83afd880a9?sa=X&ved=1t:8290&ictx=111',
  },
  facebook: 'https://www.facebook.com/profile.php?id=100093436146345',
  instagram: 'https://www.instagram.com/ire_torino/',
};

const office = site.registeredOffice;
export const registeredAddress = `${office.street}, ${office.postalCode} ${office.city} (${office.province})`;
