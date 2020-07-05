// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCSARYTaLsUTZCrDoUZ6sj7wbBXjVvKWt8',
        authDomain: 'angular-blog-application.firebaseapp.com',
        databaseURL: 'https://angular-blog-application.firebaseio.com',
        projectId: 'angular-blog-application',
        storageBucket: 'angular-blog-application.appspot.com',
        messagingSenderId: '360223250608',
        appId: '1:360223250608:web:320ec979662fec3b6c4375',
        measurementId: 'G-RTH615WTEX'
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
