// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_TIEMPO: 'https://api.gael.cl/general/public/clima',
  API_SISMO: 'https://api.gael.cl/general/public/sismos',
  API_MONEDAS: 'https://api.gael.cl/general/public/monedas',
  API_FERIADOS: 'https://www.feriadosapp.com/api/holidays.json',
  API_BAR: 'https://www.thecocktaildb.com/api/json/v1/1/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
