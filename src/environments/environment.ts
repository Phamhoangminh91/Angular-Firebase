// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // 2. Add your credentials from step 1
  production: false,
  firebase: {
    apiKey: "AIzaSyAZCzM3_PFaiZSSXhkfXsEzydd2IbN_0Cg",
    authDomain: "auth-e8d44.firebaseapp.com",
    databaseURL: "https://auth-e8d44.firebaseio.com",
    projectId: "auth-e8d44",
    storageBucket: "auth-e8d44.appspot.com",
    messagingSenderId: "396659030261",
    appId: "1:396659030261:web:9671798b2ba971a28bedbc"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
