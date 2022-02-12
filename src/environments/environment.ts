import { Environment } from 'src/app/_shared/models';
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: Environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCiRHjhnmoyq8nAzDOfk0WPo78ILOwr1e4',
    authDomain: 'stuart-search.firebaseapp.com',
    projectId: 'stuart-search',
    storageBucket: 'stuart-search.appspot.com',
    messagingSenderId: '482375383741',
    appId: '1:482375383741:web:fde7954cc83cc83356d5d4'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
