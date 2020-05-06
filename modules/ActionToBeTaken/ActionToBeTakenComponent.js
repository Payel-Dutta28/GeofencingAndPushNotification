import React, { useState } from 'react';
import {SafeAreaView, Text, View,TouchableOpacity,Button, Image} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { act } from 'react-test-renderer';

const ActionToBeTakenComponent = props => {
    console.log(props);
    return (
        <SafeAreaView style={{flex: 1,
        alignContent: 'center',marginTop:150}}>

        <Text style={{color:"#d22d35",marginBottom:50,alignSelf:'center',margin:40,fontSize:20}}>{props.actionToBeTaken}</Text>
           
        </SafeAreaView>
      );
}

export default ActionToBeTakenComponent;