import React, { useState } from 'react';
import {SafeAreaView, Text, TextInput,TouchableOpacity,View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const LoginComponent = props => {
    const [value1, onChangeText1] = React.useState('');
    const [value, onChangeText] = React.useState('');
    const onPress = () => {
       
      Navigation.push(props.componentId, {
        component: {
          name: 'home',
          passProps: {
            text: 'Some props that we are passing'
          },
          options: {
            topBar: {
              title: {
                text: 'Check Up'
              }
            }
          }
        }
      });
    }
    
    return (
        <SafeAreaView style={{flex: 1,
        alignContent: 'center'}}>
          <View style={{marginTop:150}}>
            <Text style={{fontSize:40,alignSelf:'center',color:'#d22d35'}}>Health CheckUp App</Text>
          <View style={{flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:50}}>
          <Text style={{color:'#d22d35'}}>USER ID:</Text>
          <TextInput
      style={{padding:10, borderColor: '#d22d35', borderWidth: 1 ,borderRadius:20,marginLeft:20,width:'60%'}}
      onChangeText={text => onChangeText1(text)}
      value={value1}
      placeholder={'UserID'}
    />
    </View >
    <View style={{flexDirection:'row',alignItems:'center',marginTop:50,marginLeft:20}}>
              <Text style={{color:'#d22d35'}}>PASSWORD:</Text>

     <TextInput
      style={{padding:10, borderColor: '#d22d35', borderWidth: 1 ,borderRadius:20,marginLeft:20,width:'60%'}}
      secureTextEntry={true}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder={'Password'}
    />
    </View>
     <TouchableOpacity
        style={{alignSelf: "center",
        alignItems:'center',
        backgroundColor: "#d22d35",
        paddingTop: 10,
        paddingBottom:10,
        paddingLeft:30,
        paddingRight:30,
      marginTop:30, borderRadius:20,
    width:'60%'}}
        onPress={onPress}
      >
        <Text style={{color:'#ffffff'}}>Login</Text>
      </TouchableOpacity>
              {/* <Text onPress={onPress}>Posts List Screen</Text> */}
        </View>
        </SafeAreaView>
      );
}

export default LoginComponent;