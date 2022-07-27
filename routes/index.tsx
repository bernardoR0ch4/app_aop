import React, {useContext} from 'react';
import {Icon, withBadge} from 'react-native-elements';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Products from '../pages/Products';
import Cadastro from '../pages/Cadastro';

const TabNavigation = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#333',
          borderBottomWidth: 0,
          borderTopWidth: 2,
          height: 60,
        },
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 16,
          color: '#000',
        },
      }}>
      <TabNavigation.Screen
        name="HomeTabScreen"
        component={Products}
        options={{
          tabBarLabel: 'Loja',
          tabBarIcon: ({focused}) => (
            <Icon
              name="store"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={35}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
      <TabNavigation.Screen
        name="CarrinhoTabScreen"
        component={Cadastro}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarBadge: contarQuantidadeProdutos(),
          tabBarIcon: ({focused}) => (
            <Icon
              name="cart"
              color={focused ? '#e05456' : '#bab8b8'}
              type="material-community"
              size={30}
              tvParallaxProperties={undefined}
            />
          ),
        }}
      />
    </TabNavigation.Navigator>
  );
};

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <StackNavigation.Screen name="Produtos" component={Products} />
        <StackNavigation.Screen name="Home" component={BottomTabNavigator} />
        <StackNavigation.Screen
          name="Cadastro"
          component={Cadastro}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;