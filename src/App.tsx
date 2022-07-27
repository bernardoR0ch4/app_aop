import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import React from 'react';
import Products from '../pages/Products';
import Cadastro from '../pages/Cadastro';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <TabNavigation.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{backgroundColor: '#fff', borderBottomWidth:0,}
    }} >
      <TabNavigation.Screen 
        name='ProductsTabScreen' 
        options={{
          title:'Produtos',
          tabBarIcon: () => (<Icon name='list' color='#000' type='font-awesome' size={24} />)
        }} 
        component={Products}
      />
      <TabNavigation.Screen 
        name='CadastroTabScreen' 
        component={Cadastro}
        options={{
          title:'Cadastro de produtos',
          tabBarIcon: () => (<Icon name='list' color='#000' type='font-awesome' size={24} />)
        }} 
      />
    </TabNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();
export default () => {
  
  return (
  <NavigationContainer>
    <StackNavigation.Navigator>
     <StackNavigation.Screen
      options={{ headerShown: true }}
      name="Products Store"
      component={BottomTabNavigator}
      /> 
    </StackNavigation.Navigator>
  </NavigationContainer>
  );

};