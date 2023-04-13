import React from 'react'
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component'; 
import { AuthNavigator } from './SignUp/Navigation';
import Category from './Category';



export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
    {/* <AuthNavigator/> */}

    <AppNavigator/>
    
    </ApplicationProvider>

  </>
);