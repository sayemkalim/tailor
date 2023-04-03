import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { Button, Layout,TopNavigationAction } from '@ui-kitten/components';
import { Dimensions } from 'react-native'
import Carousel from 'react-native-swipeable-carousel';
import { useRoute } from '@react-navigation/native';




const Card = ({e}) => {
    // <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>

    const route = useRoute();
    const [currentDate, setCurrentDate] = useState('');
    const data = [
        "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
        "https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200",
        'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
        'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'
    ];

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        setCurrentDate(
            date + '/' + month + '/' + year
            + ' ' + hours + ':' + min + ':' + sec
        );
    }, []);
   

    return (
        <View style={styles.container}>
            <View style={styles.cardContent}>
                {/* <Image source={require('../assets/image.jpg')} style={styles.image} /> */}
                {/* <Text style={styles.title}>{route.params.e}:Raghib Najmi</Text>
                <Text style={styles.description}>{route.params.name}Type:Kurta</Text> */}
                <Text style={styles.description}>Phone:8557636520</Text>
                <Text style={styles.title}>Price:350Rs</Text>
                <Text style={styles.description}>Type:Express</Text>
                <Text style={styles.description}>Order Date and Time: {currentDate}</Text>
                <Text style={styles.description}>Address:Mohalla sakunat sheikhpura etcetc etc</Text>

                <View style={{
                    marginTop: 400
                }}>
                    <Button style={styles.button}>
                        ACCEPT/PickupReceive/CallLogistics/Done
                    </Button>

                    <Button style={styles.button} disabled={true}>
                        DISABLED
                    </Button>
                </View>




                {/* <Carousel

                    images={data}
                    enableGestureSwipe={true}
                /> */}



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
        width: 400,
        height: 700,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#777',
        marginTop: 5,
    },
});

export default Card;