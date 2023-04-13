import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {  Icon, TopNavigation, TopNavigationAction ,Divider} from '@ui-kitten/components';
const Category = ({ navigation }) => {
  
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  const navigateBack = () => {
    navigation.goBack();
  };
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: 'Mens', buttons: ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8', 'Button 9', 'Button 10', 'Button 11', 'Button 12'] },
    { id: 1, title: 'Women', buttons: ['Btn 1', 'Btn 2', 'Btn 3', 'Btn 4', 'Btn 5', 'Btn 6', 'Btn 7', 'Btn 8', 'Btn 9', 'Btn 10', 'Btn 11', 'Btn 12'] },
    { id: 2, title: 'Kids', buttons: ['Tab3 Btn 1', 'Tab3 Btn 2', 'Tab3 Btn 3', 'Tab3 Btn 4', 'Tab3 Btn 5', 'Tab3 Btn 6', 'Tab3 Btn 7', 'Tab3 Btn 8', 'Tab3 Btn 9', 'Tab3 Btn 10', 'Tab3 Btn 11', 'Tab3 Btn 12'] },
  ];

  const handleTabPress = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const navigateGallery= () => {
    navigation.navigate('Gallery');
  }; 
  return (
    <>
    <TopNavigation title='Category' alignment='center' accessoryLeft={BackAction} />
    <Divider />
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tabButton, activeTab === index && styles.activeTab]}
            onPress={() => handleTabPress(index)}
          >
            <Text style={styles.tabButtonText}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {tabs[activeTab].buttons.map((buttonLabel, index) => (
          <TouchableOpacity key={index} style={styles.button}
          onPress={navigateGallery}>
             
            <Text style={styles.buttonText}>{buttonLabel}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
    </>
  );
};

export default Category;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

