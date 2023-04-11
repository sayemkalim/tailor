import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction ,Datepicker} from '@ui-kitten/components';
import Thirsty from './Thirsty';
import Transaction from './Transaction';

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
  const CalendarIcon = (props) => (
    <Icon {...props} name='calendar'/>
  );
  const DayCell = ({ date }, style) => (
    <View style={[styles.dayContainer, style.container]}>
      <Text style={style.text}>
        {date.getDate()}
      </Text>
      <Text style={[style.text, styles.value]}>
     //   {`${(100* date.getDate() + Math.pow(date.getDate(),2)) * 74.57} INR`}
      </Text>
    </View>
  );
  const [date, setDate] = React.useState(new Date());

  return (
    <>
   
     <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/>
     <Divider/>

     <Text category='h6'>
        Selected date: {date.toLocaleDateString()}
      </Text>
      <Datepicker
        placeholder='Pick Date'
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        renderDay={DayCell}
        accessoryRight={CalendarIcon}
      />
      <Divider/>
      <Transaction/>
    </>
  )
}

export default Payment
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
});