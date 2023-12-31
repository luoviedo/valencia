// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { common } from './common';

export const environment = {
  name: 'Local',
  production: false,
  isDebugMode: true,

  flag: true, // true: para el json false: api back
  apis: {
    datosPersonales: '../../../../assets/data/datos-personales.json',
  },
  apiUrl: '../../../../assets/data/datos-personales.json',

  pai: { aplicacion: '', apiKey: '' },

  gvlogin: {
    enable: true,
    aplicacion: 'SIHSU',
    url: 'https://gvlogin-dsa.gva.es/gvlogin',
    tokenKey: 'gvlogin-token',
    tokenPeticionMarte: 'peticion-marte',
    whitelistedDomains: [
      'gvlogin-dsa.gva.es',
      'sihsu-dsa.gva.es',
      'https://sihsu-dsa.gva.es',
      'http://sihsu-dsa.gva.es',
    ],
  },
  settings: {
    api: {
      version: '01.00.00',
      url: 'api',
    },
    name: 'sihsu-backend',
    host: 'https://sihsu-frontend-dsa.gva.es/sihsu-frontend/',
    hostDynamic: 'https://sihsu-dsa.gva.es/sihsu',
  },
  locale: {
    default: common.defaultLang,
    cultures: common.langs,
  },
};
