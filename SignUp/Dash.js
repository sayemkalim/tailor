import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
export const DashScreen = ({ navigation }) => {

  const navigateLogin = () => {
    navigation.navigate('Login');
  };

  return (
   < View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={navigateLogin}>
        <Text style={styles.loginButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30, 
  
  },
  loginButton: {
    backgroundColor: '#7d5ffe',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 650,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
