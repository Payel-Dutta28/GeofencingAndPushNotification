// navigation.js
import { Navigation } from 'react-native-navigation';

export function navigationStack() {
  
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'login',
                options: {
                  topBar: {
                    visible:false
                    // title: {
                    //   text: 'login'
                    // }
                  }
                }
              }
            }
          ],
        }
      }
    });
}
export default navigationStack;