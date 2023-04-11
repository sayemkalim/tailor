import React from 'react';
import { SafeAreaView ,StyleSheet,TouchableWithoutFeedback,View } from 'react-native';
import { Divider, Icon, Layout, TopNavigation, TopNavigationAction ,Input ,Text,Button} from '@ui-kitten/components';


const AlertIcon = (props) => (
    <Icon {...props} name='alert-circle-outline'/>
  );
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const SignUpScreen = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };
  
    const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
    );
  
    const renderCaption = () => {
      return (
        <View style={styles.captionContainer}>
          {AlertIcon(styles.captionIcon)}
          <Text style={styles.captionText}>Should contain at least 8 symbols</Text>
        </View>
      )
    }
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='SignUp  ' alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={styles.container} level='1'>
      <View style={styles.inputContainer}>
      <Input
      style={styles.input}
      label='Name'
      placeholder='Enter your Name'
      value={name}
      onChangeText={nextValue => setName(nextValue)}
    />
      <Input
      style={styles.input}
      label='Email Id'
      placeholder='Enter your Emaid Id'
      value={email}
      onChangeText={nextValue => setEmail(nextValue)}
    />
      
    <Divider/>
        <Input
      style={styles.input}
      value={password}
      label='Password'
      placeholder='Enter your Password'
      caption={renderCaption}
      accessoryRight={renderIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setPassword(nextValue)}
    />  
    <Button>SIGN UP</Button>
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
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
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
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    fontFamily: "opensans-regular",
    color: "#8F9BB3",
  }
});