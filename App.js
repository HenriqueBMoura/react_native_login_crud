import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cadastro from './components/screens/Cadastro'
import Home from './components/screens/Home'
import Login from './components/screens/Login'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : '#032B53',
          },
          headerTintColor : '#F8F8F8'
        }}>
        
        <Stack.Screen
          component={ Login }
          name='login'
          options={{
            title : 'Login'
          }} />

        <Stack.Screen
          component={ Cadastro }
          name='cadastro'
          options={{
            title : 'Cadastre-se'
          }} />

        <Stack.Screen
          component={ Home }
          name='home'
          options={{
            title : 'Área restrita'
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App