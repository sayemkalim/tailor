import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import Card from './Card';
import { useRoute } from '@react-navigation/native';

const BackIcon = (props) => (
    <Icon {...props} name='arrow-back' />
);

export const Order = ({ navigation,e }) => {
    const route = useRoute();
    // console.log('1aaaaaa',route.params.e);

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Card e={e}/>
            </Layout>
        </SafeAreaView>
    );
};