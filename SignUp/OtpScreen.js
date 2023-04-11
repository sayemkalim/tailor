import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const OtpScreen = () => {
  const [otp, setOtp] = useState([''])

  const handleOtpSubmit = () => {
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the OTP</Text>
      <Text style={styles.subtitle}>We have sent you an OTP on your mobile number</Text>
      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType={'number-pad'}
          value={otp}
          onChangeText={setOtp[0]}
        />
              <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType={'number-pad'}
          value={otp}
          onChangeText={setOtp[1]}
        />
              <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType={'number-pad'}
          value={otp}
          onChangeText={setOtp[2]}
        />
              <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType={'number-pad'}
          value={otp}
          onChangeText={setOtp[3]}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resendButton}>
        <Text style={styles.resendButtonText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:80,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  otpInput: {
    width: 60,
    height: 60,
    marginHorizontal: 10,
    fontSize: 28,
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7d5ffe' ,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7d5ffe',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width:310
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  resendButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  resendButtonText: {
    color: '#7d5ffe',
    fontSize: 16,
  },
});

export default OtpScreen;
