// Inspiration: https://dribbble.com/shots/14154226-Rolodex-Scrolling-Animation/attachments/5780833?mode=media
// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/


import * as React from 'react';
import { StatusBar, FlatList, Image, ImageBackground, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { faker } from '@faker-js/faker';


faker.seed(10);
const jobTypes = ['Engineer', 'Manager', 'Designer', 'Developer', 'Salesperson'];

// Generate an array of 30 objects
const DATA = Array.from({ length: 30 }, () => ({
    email: faker.internet.email(),
    jobType: faker.name.jobType(),
    randomNumber: Math.floor(Math.random() * 100),

}));
const BG_IMG = 'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export default Thirsty = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const handleClick=(item)=>{
        console.log('pressed');
        console.log(item);
    }

    return <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Image
            source={{ uri: BG_IMG }}
            style={StyleSheet.absoluteFillObject}
            blurRadius={10}
        />
        <Animated.FlatList
            data={DATA}
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
                onPress={()=>handleClick(item.randomNumber)}


                    style={{
                        flexDirection: 'row', padding: SPACING, marginBottom: SPACING, backgroundColor: 'white',
                        borderRadius: 12,
                        borderColor: 'red',
                        borderWidth: 2,
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



