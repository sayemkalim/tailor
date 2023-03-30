// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/


import React, { useState } from 'react';
import { StatusBar, FlatList, Image, ImageBackground, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { faker } from '@faker-js/faker';
import { Button, Layout, ButtonGroup } from '@ui-kitten/components';
import { createStackNavigator } from '@react-navigation/stack';
import Card from './Card';


faker.seed(10);
const jobTypes = ['Engineer', 'Manager', 'Designer', 'Developer', 'Salesperson'];


// Generate an array of 30 objects
const { Navigator, Screen } = createStackNavigator();

<Navigator screenOptions={{ headerShown: false }}>
<Screen name='Card' component={Card}/>
</Navigator>
const AllOrder = Array.from({ length: 10 }, () => ({
    email: faker.internet.email(),
    jobType: faker.name.jobType(),
    randomNumber: Math.floor(Math.random() * 100),

})); 

const Current = Array.from({ length: 1 }, () => ({
    email: faker.internet.email(),
    jobType: faker.name.jobType(),
    randomNumber: Math.floor(Math.random() * 100),

}));

const BG_IMG = 'https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg'

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default Thirsty = ({ show, navigation }) => {

    console.log('navigation', navigation);

    const navigateCards = () => {
        navigation.navigate('Cards');   
      };

    const [text, setText] = React.useState('Press any button');
    const [selected, setSelected] = React.useState();
    const handleToggle = (value) => {
        console.log('value', value);
        if (value == 1) {
            setSelected(1)
        }
        else if (value == 2) {
            setSelected(2)
        }
        else if (value == 3) {


            setSelected(3)
        }
        else {
            setSelected(4)
        }

    }


    const scrollY = React.useRef(new Animated.Value(0)).current;
    const handleClick = (item) => {
        navigateCards()
       // console.log('pressed');
        // navigation.navigate('Card')
        // console.log(item);
    }

    return <View style={{ flex: 1, backgroundColor: '#fff' }}>




        <Image
            source={{ uri: BG_IMG }}
            style={StyleSheet.absoluteFillObject}
            blurRadius={10}
        />
        {show == 'allOrder' || show == 'raghib' ?
            <Layout style={styles.container}>
                <ButtonGroup status="basic" appearance="outline" >
                    <Button
                        onPress={() => handleToggle(1)}
                        style={selected == 1 ? styles.buttonSelect : styles.button}
                    >
                        All Order
                    </Button>
                    <Button
                        onPress={() => handleToggle(2)}
                        style={ selected == 2 ||     show=='raghib' ? styles.buttonSelect : styles.button}
                    >Current</Button>
                    <Button
                        onPress={() => handleToggle(3)}
                        style={selected == 3 ? styles.buttonSelect : styles.button}
                    >Complete</Button>
                    <Button
                        onPress={() => handleToggle(4)}
                        style={selected == 4 ? styles.buttonSelect : styles.button}
                    >Reject</Button>
                </ButtonGroup>



            </Layout> : null}

        <Animated.FlatList

            data={show == 'raghib' || selected==2 ? Current : AllOrder}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}

            keyExtractor={item => item.randomNumber.toString() + new Date().getTime().toString() + (Math.floor(Math.random() * Math.floor(new Date().getTime()))).toString()}
            contentContainerStyle={{
                padding: SPACING,
                paddingTop: StatusBar.currentHeight || 42
            }}
            renderItem={({ item, index }) => {

                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + 2)

                ]
                const opacityinputRange = [
                    -1,
                    0,
                    ITEM_SIZE * index,
                    ITEM_SIZE * (index + .5)

                ]
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange: [1, 1, 1, 0]
                })
                const opacity = scrollY.interpolate({
                    inputRange: opacityinputRange,
                    outputRange: [1, 1, 1, 0]
                })

                return <AnimatedTouchable
                    onPress={() => handleClick(item.randomNumber)}


                    style={{
                        flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'white',
                        borderRadius: 12,
                        borderColor: 'black',
                        borderWidth: 1,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: .3,
                        shadowRadius: 20,
                        opacity,
                        transform: [{ scale }]
                    }}>

                    {/* <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/60.jpg' }}
                        style={{
                            width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE,
                            marginRight: SPACING / 2
                        }}
                    /> */}
                    <View >
                        <Text style={{ fontSize: 22, fontWeight: '700', color: 'black' }}>{item.email}</Text>
                        <Text style={{ fontSize: 18, opacity: .7, color: 'black' }}>{item.email}</Text>
                        <Text style={{ fontSize: 12, opacity: .8, color: 'blue' }}>{item.email}</Text>

                    </View>

                </AnimatedTouchable >

            }}
        />
    </View>

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
        borderRadius: 70,
        backgroundColor: 'white'

    },
    buttonSelect: {
        margin: 2,
        borderRadius: 80,
        backgroundColor: 'grey'

    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        margin: 2,
    },

});



