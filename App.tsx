import React from 'react'
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import Test from './Test';
import Thirsty from './Thirsty';
import Pickup from './Pickup';



export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
    {/* <Test/> */}
    {/* <Thirsty/> */}
    {/* <Pickup/> */}
  </>
);