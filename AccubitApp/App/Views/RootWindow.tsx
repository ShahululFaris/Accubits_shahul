import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RestAurentDetailScreen from './RestAurentDetailsScreen';


const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#000',
    },
};

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ header: () => null }} />
            <Stack.Screen name="RestAurentDetailScreen" component={RestAurentDetailScreen} />
        </Stack.Navigator>
    );
};

const RootWindow = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <RootStack />
        </NavigationContainer>
    );
};

export default RootWindow;