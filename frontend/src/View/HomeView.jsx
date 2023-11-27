import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const styles=StyleSheet.create({
  button:{
    justifyContent:'center',
    
  }
})
const HomeView = (props) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('TimeTable')}}>
          <Text>駐輪場</Text>
        </TouchableOpacity>
      </View>
      <View>
          <TouchableOpacity onPress={()=>{props.navigation.navigate('Bike')}}>
            <Text>教室通知</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};
export default HomeView;