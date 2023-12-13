import React from'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeView from './View/HomeView'
import TimeTable from './View/TimeTableView'
import BikeView from './View/BikeView'
import weather from './src/View/weather'

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeView} />
        <RootStack.Screen name="TimeTable" component={TimeTable} />
        <RootStack.Screen name="Bike" component={BikeView}/>
        <RootStack.Screen name="weather" component={weather}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackScreen;