import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

const Payment = ({ navigation }) => {
  console.log('navigation',navigation);
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
   
     <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
     <Divider/>
    <View>
      <Text>Hello Cutiee...
        Welcome to Payment page😎💕💕💕
      </Text>
    </View>
    </>
  )
}

export default Payment

// const styles = StyleSheet.create({})