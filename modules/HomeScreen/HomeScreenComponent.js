import React, { useState } from 'react';
import {SafeAreaView, Text, View,TouchableOpacity,Button, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Geolocation from '@react-native-community/geolocation';

const HomeComponent = props => {
  const [location, setLocation] = useState(0);
  const redirectToTakeAction = (condition) => {
    Navigation.push(props.componentId, {
        component: {
          name: 'acton',
          passProps: {
            condition: condition
          },
          options: {
            topBar: {
              title: {
                text: 'Action To Be Taken'
              }
            }
          }
        }
      });
}
const findCoordinates = () => {
  navigator.geolocation.getCurrentPosition(
    position => {
      const location = JSON.stringify(position);

setLocation(location);
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
};
    return (
        <SafeAreaView style={{flex: 1,
        alignContent: 'center',marginTop:150}}>
          <Text style={{color:"#d22d35",marginBottom:50,alignSelf:'center',fontSize:20}}>How are you feeling today?</Text>
            <View style={{
              flexDirection:'row',
              justifyContent: 'space-evenly'
              }}>
               
               <TouchableOpacity onPress={()=>redirectToTakeAction('sick')}>
                  <View>
                  </View>
                  <Image source={require('./Images/sick.png')}/>
                </TouchableOpacity>
                <TouchableOpacity         
                onPress={()=>redirectToTakeAction('smile')}>
                  <View>
                  </View>
                  <Image source={require('./Images/smile.png')}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={findCoordinates}>
					<Text style>Find My Coords?</Text>
					<Text>Location: {location}</Text>
				</TouchableOpacity>
        </SafeAreaView>
      );
}

export default HomeComponent;