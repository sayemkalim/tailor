import React, { useState } from 'react';
import { SafeAreaView, StyleSheet,ImageBackground, Dimensions, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Divider, Layout, TopNavigation } from '@ui-kitten/components'
import { TabNavigator } from './AppNavigator';
const { width } = Dimensions.get('window');
import Test from './Test';
import Thirsty from './Thirsty';
export const HomeScreen = ({ navigation }) => {
  const [number, setNumber] = React.useState(1);

  const getRandomNumber = () => {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNumber);
  }


  const [online, setOnline] = useState('false')



  const navigateDetails = () => {
    navigation.navigate('Order');
  };
  const navigateCard = () => {
    navigation.navigate('Cards');
  };
  const navigatePayment = () => {
    navigation.navigate('Payment');
  };
  const navigatePickup = () => {
    navigation.navigate('Pickup',{navigation:navigation});
  };
  const navigateOrder = () => {
    navigation.navigate('Order');
  };
   


  const onlineOffline = () => {

    if (online === 'false') {
      setOnline('true')
    }
    else {
      setOnline('false')
    }

  }

  const handleOrder = () => {
    getRandomNumber()
    navigation.navigate('Order', { e: number, name: "taazdem" });

  }

  const imagess = {uri:     'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',};
  return (
    <>
      <TopNavigation title='Ajanta Tailor' alignment='center' />
      <Divider />

      <Thirsty navigation={navigation} />

      <Divider />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <TouchableOpacity
          onPress={navigateCard}
          style={styles.container}>
          {online === 'false' && <TouchableOpacity
            onPress={onlineOffline}
            style={styles.cardOnline}>
            <Text>Online</Text>
          </TouchableOpacity>}
          {online === 'true' && <TouchableOpacity
            onPress={onlineOffline}
            style={styles.cardOffline}>
            <Text>Offline</Text>
          </TouchableOpacity>}
          <TouchableOpacity
            onPress={navigatePayment}
            style={styles.card}>
            <Text>Payment</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={navigateDetails}
          style={styles.container}
          > 
          
          <TouchableOpacity
            onPress={navigateOrder}
            style={styles.card}
            >
               <Text>View All Orders</Text>
            </TouchableOpacity>
          <TouchableOpacity
            onPress={navigatePickup}
            style={styles.card}>
             <Text>Pickup</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>



    </>
  );
};
const styles = StyleSheet.create({
  
  view: {

    marginTop: 30,
    backgroundColor: '#7D5FFE',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,

    //paddingHorizontal : 30
  },
  view2: {
    marginTop: 30,
    backgroundColor: '#7D5FFE',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    //paddingHorizontal : 30
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,


  },
  containers: {
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
    backgroundColor: '#7D5FFE',




  },
  card: {
    flex: 1,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 8,
    padding: 16,
  },
  cardOnline: {
    flex: 1,
    height: 150,
    backgroundColor: 'green',
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 16,
  },
  cardOffline: {
    flex: 1,
    height: 150,
    backgroundColor: 'red',
    borderRadius: 8,
    marginHorizontal: 8,
    padding: 16,
  },

});