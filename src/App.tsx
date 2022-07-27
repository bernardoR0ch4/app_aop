import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';

import React from 'react';
import Products from '../pages/Products';

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return(
    <TabNavigation.Navigator screenOptions={{
      headerShown:false,
      tabBarStyle:{backgroundColor: '#7054b6', borderBottomWidth:0,}
    }} >
      <TabNavigation.Screen 
        name='HomeTabScreen' 
        options={{
          title:'Home',
          tabBarIcon: () => (<Icon name='home' color='#000' type='font-awesome' size={24} />)
        }} 
        component={Products}
      />
      <TabNavigation.Screen 
        name='CategoriasTabScreen' 
        component={Products}
        options={{
          title:'Categorias',
          tabBarIcon: () => (<Icon name='list' color='#000' type='font-awesome' size={24} />)
        }} 
      />
    </TabNavigation.Navigator>
  );
}

const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen 
        name="TabNavigationScreen" 
        options={{title:'Home Principal'}}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        component={Products}
       />  
    </DrawerNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();
export default () => {
  
  return (
  <NavigationContainer>
    <StackNavigation.Navigator>
     <StackNavigation.Screen
      options={{ headerShown: false }}
      name="LoginScreen"
      component={Products}
      /> 
     <StackNavigation.Screen
      options={{ headerShown: false }}
      name="HomeScreen"
      component={NavigationDrawer}
      /> 
    </StackNavigation.Navigator>
  </NavigationContainer>
  );

};