import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider,  TopNavigation, TopNavigationAction, Button, Icon, Layout,  } from '@ui-kitten/components';
import Thirsty from './Thirsty';

const Payment = ({ navigation }) => {
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  
  const navigateBack = () => {
    navigation.goBack();
  };

  
  return (
    <>
   
     <TopNavigation title='All Order' alignment='center' accessoryLeft={BackAction}/>
     <Divider/>
    
   <Thirsty show={'allOrder'}/>
    </>
  )
}

export default Payment
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
  
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const styles = StyleSheet.create({})