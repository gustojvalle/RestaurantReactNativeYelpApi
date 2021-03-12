import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screen/SearchScreen';
import ResultsShowScreen from './src/screen/ResultsShowScreen';

const Stack = createStackNavigator();


const App = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Detailed" component={ResultsShowScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;