import * as React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/styles'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favourites from "./Favourites";

const Tab = createMaterialTopTabNavigator();

export default function Dishes({ navigation }) {
    return (
        <Tab.Navigator
            tabBarScrollEnabled={true}
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: "auto",

                },
                tabBarActiveTintColor: '#1DB954',
                tabBarInactiveTintColor: '#AEB5BC',
                tabBarIndicatorStyle: {
                    backgroundColor: '#1DB954'
                },
                tabBarStyle: {
                    backgroundColor: '#282828',
                },
            }}
        >
            <Tab.Screen name="Włoska" component={Favourites} />
            <Tab.Screen name="Polska" component={Favourites} />
            <Tab.Screen name="Meksykańska" component={Favourites} />
            <Tab.Screen name="Amerykańska" component={Favourites} />
            <Tab.Screen name="Azjatycka" component={Favourites} />
        </Tab.Navigator>
    );
}