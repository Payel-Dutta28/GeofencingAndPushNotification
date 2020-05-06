/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { PureComponent } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Navigation } from "react-native-navigation";
import {registerScreens} from './navigation/RegisterScreen';
import LoginScreen from './modules/Login/LoginContainer';
import {navigationStack} from './navigation/Navigation';
import BackgroundTaskComponent from './backGroundTask/BackgroundTaskComponent';


export default class App extends PureComponent {
constructor(props){
  super(props);
  registerScreens();
  navigator.geolocation = require('@react-native-community/geolocation');

  Navigation.events().registerAppLaunchedListener(() => {
    // Navigation.setRoot({
    //   root: {
    //     stack: {
    //       children: [
    //         {
    //           component: {
    //             name: 'login',
    //             options: {
    //               topBar: {
    //                 visible:false
    //                 // title: {
    //                 //   text: 'login'
    //                 // }
    //               }
    //             }
    //           }
    //         }
    //       ],
    //     }
    //   }
    // });
    navigationStack();
})

}
render(){
  return <BackgroundTaskComponent/>
}
}
