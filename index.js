// /**
//  * @format
//  */

// // import {AppRegistry} from 'react-native';
// import App from './App';
// // import {name as appName} from './app.json';
// import { Navigation } from "react-native-navigation";
// import {registerScreens} from './navigation/RegisterScreen';
// import {navigationStack} from './navigation/Navigation';
// import Login from './modules/Login/LoginContainer';
// import HomeScreen from './modules/HomeScreen/HomeScreenContainer';


// // AppRegistry.registerComponent(appName, () => App);

// registerScreens();
// navigator.geolocation = require('@react-native-community/geolocation');

//   Navigation.events().registerAppLaunchedListener(() => {
//     // Navigation.setRoot({
//     //   root: {
//     //     stack: {
//     //       children: [
//     //         {
//     //           component: {
//     //             name: 'login',
//     //             options: {
//     //               topBar: {
//     //                 visible:false
//     //                 // title: {
//     //                 //   text: 'login'
//     //                 // }
//     //               }
//     //             }
//     //           }
//     //         }
//     //       ],
//     //     }
//     //   }
//     // });
//     navigationStack();
//   });

import App from './App';
const app = new App();

