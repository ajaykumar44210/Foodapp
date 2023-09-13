import React from 'react'
import { View } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screen/Home';
import Login from './Screen/Login';
import Sign from './Screen/Sign';
import { NavigationContainer } from '@react-navigation/native';
import Firstpage from './Deco/Firstpage';
import User from './Deco/User';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Home}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="login" component={Login}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen name="sign" component={Sign}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name='first' component={Firstpage} 
        options={{
          headerShown:false}}/>

          <Stack.Screen name="user" component={User}
          options={{
            headerShown:false}}
             />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation