import HomeView from './src/View/HomeView'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TimeTable from './src/View/TimeTableView'
import BikeView from './src/View/BikeView'
import weather from './src/View/weather'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeView} options={{ headerShown: false }}/>
        <Stack.Screen name="TimeTable" component={TimeTable} />
        <Stack.Screen name="Bike" component={BikeView}/>
        <Stack.Screen name="weather" component={weather}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;