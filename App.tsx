import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './src/pages/Dashboard';
import { profilePage } from './src/pages/profilePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Dashboard}
          options={{ title: 'Home screen', headerShown: true }}
        />
        <Stack.Screen name="Profile"
          component={profilePage}
          options={{ title: 'Profile screen', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}