import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './Login';
import { DashScreen } from './Dash';
import { SignUpScreen } from './SignUp';
import { ForgotScreen } from './Forgot';
import OtpScreen from './OtpScreen';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigato = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Dash' component={DashScreen}/>
    <Screen name='Login' component={LoginScreen}/>
    <Screen name='Otp' component={OtpScreen}/>
    {/* <Screen name='Signup' component={SignUpScreen}/>
    <Screen name='Forgot' component={ForgotScreen}/> */}
  </Navigator>
);

export const AuthNavigator = () => (
  <NavigationContainer>
    <HomeNavigato/>
  </NavigationContainer>
);
