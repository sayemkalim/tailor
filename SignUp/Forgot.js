import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import {
  Divider,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
  Input,
  Text,
  Button,
} from '@ui-kitten/components';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;
const BackIcon = props => <Icon {...props} name="arrow-back" />;

export const ForgotScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const handleResetPassword = () => {
    
  };


  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigation
        title="Forgot Password"
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Divider />
      <Layout style={styles.container} level="1">
        <View style={styles.inputContainer}>
          <Input
            style={styles.input}
            label="Email Id"
            placeholder="Enter your Emaid Id"
            value={email}
            onChangeText={nextValue => setEmail(nextValue)}
          />

<TouchableOpacity onPress={handleResetPassword} style={styles.button}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
        </View>
      </Layout>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    display: 'flex',

    alignItems: 'center',
  },

  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#8F9BB3',
  },
  inputContainer: {
    width: '70%',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    padding: 1,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

});
