import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
import List from './screens/List';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Homepage" component={Homepage}/>
        <Stack.Screen 
          name="Register" 
          component={Register}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="List" 
          component={List}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}