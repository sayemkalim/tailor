import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';
import Payment from './Payment';
import Pickup from './Pickup';
import  Order  from './Order';
import Card from './Card';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Details' component={DetailsScreen} />
    <Screen name='Payment' component={Payment} />
    <Screen name='Pickup' component={Pickup}/>
    <Screen name='Order' component={Order}/>
    <Screen name='Card' component={Card}/>
  </Navigator>
);
export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
