import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Divider, Icon, Text, TopNavigation, TopNavigationAction} from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';



const LeaderBoard = ({ navigation }) => {
  const [data, setData] = useState(
    [
    {
      id:1,name:'Sayem',orders:1
    },
    {
      id:2,name:'Chola Tailor',orders:500
    }, {
      id:3,name:'Rajdhani Tailor',orders:500
    }, {
      id:4,name:'Ajanta Tailor',orders:85
    }, {
      id:5,name:'Famous Tailor',orders:20
    }, {
      id:6,name:'A One Tailor',orders:40
    }, {
      id:7,name:'Parkash Tailor',orders:15
    }
  ])
 
  const sortedData = [...data].sort((a, b,) => b.orders - a.orders );
  console.log(sortedData[0].orders)
     


   
  const BackAction = () => ( 
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
  const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
  );
  
  const navigateBack = () => {
    navigation.goBack();
  };
  const [date, setDate] = React.useState(new Date());
 

  return (
    <>
   
     <TopNavigation title='LeaderBoard' alignment='center' accessoryLeft={BackAction}/>
     <Divider/>

     <Text category='h6' alignment='center'>
        Selected date: {date.toLocaleDateString()}
      </Text>
   
      <View style={styles.tailorContainer}>
      <Text >Rank</Text>
      <Text >Name</Text>
      <Text >Orders</Text>
    </View>
    <View style={styles.tailorContainer2}>
      <Text >7.</Text>
      <Text >Sayem</Text>
      <Text >1</Text>
    </View>
   
    {sortedData.map((item, id) => (
      
          <View key={id}style={styles.tailorContainer3}>
          <Text >{id + 1 }.</Text>
          <Text >{item.name}</Text>
          <Text >{item.orders}</Text>
        </View>
      ))}
   
    </>
  )
}

export default LeaderBoard
const styles = StyleSheet.create({
  container: {
    minHeight: 360,
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
  },
  value: {
    fontSize: 12,
    fontWeight: '400',
  },
  tailorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  tailorContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 12,
    backgroundColor: '#7d5ffe',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  tailorContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#7d5ffe',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
});