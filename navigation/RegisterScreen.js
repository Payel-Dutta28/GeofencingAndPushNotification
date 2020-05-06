import { Navigation } from 'react-native-navigation';

import App from '../App';
import Login from '../modules/Login/LoginContainer';
import HomeScreen from '../modules/HomeScreen/HomeScreenContainer';
import ActionScreen from '../modules/ActionToBeTaken/ActionToBeTakenContainer';


export function registerScreens() {
    Navigation.registerComponent('app', () => App);
    Navigation.registerComponent('login', () => Login);
    Navigation.registerComponent('home', () => HomeScreen);
    Navigation.registerComponent('acton', () => ActionScreen);

}
export default registerScreens; 