import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

const App = () => {
 return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;