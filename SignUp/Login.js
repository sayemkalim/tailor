import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity ,SafeAreaView} from 'react-native';
import {  Icon, TopNavigation, TopNavigationAction} from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const isPhoneValid = phoneNumber.length === 10;

const navigateOtp = () => {
    navigation.navigate('Otp');
  };
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
       <TopNavigation alignment='center' accessoryLeft={BackAction}/>
    <View style={styles.container}>
      <Text style={styles.title}>Enter your 10 digit mobile number</Text>
      <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>+91 |</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#666"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
          maxLength={10}
          
        />
      </View>
      <TouchableOpacity
        style={[styles.loginButton, { opacity: isPhoneValid ? 1 : 0.2 }]}
        onPress={navigateOtp}
        disabled={!isPhoneValid}
      >
        <Text style={styles.loginButtonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop:80
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 8,

    
  },
  input: {
    flex: 1,
    height: 50,
    color: '#333',
  },
  inputLabel: {
    marginRight: 10,
    color: 'fc8019',
  },
  loginButton: {
    backgroundColor: '#7d5ffe',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default LoginScreen;
