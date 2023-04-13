import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component';
import Payment from './Payment';
import Pickup from './Pickup';
import  Order  from './Order';
import Card from './Card';
import LeaderBoard from './LeaderBoard';
import Category from './Category';
import Gallery from './Gallery';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Details' component={DetailsScreen} />
    <Screen name='Payment' component={Payment} />
    <Screen name='Pickup' component={Pickup}/>
    <Screen name='Order' component={Order}/>
    <Screen name='Card' component={Card}/>
    <Screen name='Leader' component={LeaderBoard} />
    <Screen name='Category' component={Category} />
    <Screen name='Gallery' component={Gallery} />
  </Navigator>
);
export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
