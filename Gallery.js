import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction ,Datepicker} from '@ui-kitten/components';
const Gallery = ({ navigation }) => {
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
   
     <TopNavigation title='Gallery' alignment='center' accessoryLeft={BackAction}/>
     <Divider/>

     
    </>
  )
}

export default Gallery
const styles = StyleSheet.create({
  
});