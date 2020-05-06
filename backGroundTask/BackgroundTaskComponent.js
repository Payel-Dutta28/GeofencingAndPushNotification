import React, {PureComponent} from 'react';
import { View } from 'react-native';
import navigationStack from '../navigation/Navigation';

class BackgroundTaskComponent extends PureComponent {
    componentDidMount(){
        console.log('I am in BackgroundTaskComponent');
    }
  render() {
      return(
        <View style={{backgroundColor:'red'}}></View>
        );
  }
}

export default BackgroundTaskComponent;