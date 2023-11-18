import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import {styles} from "../styles/styles";

const homeName = "Przepisy";
const detailsName = "Ulubione";
const profilName = "Profil";

const Tab = createBottomTabNavigator();
function MainView () {
        return (
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {

                            let iconName;
                            let rn = route.name;

                            if (rn === homeName) {
                                iconName = focused ? 'restaurant' : 'restaurant-outline';

                            } else if (rn === detailsName) {
                                iconName = focused ? 'star' : 'star-outline';

                            } else if (rn === profilName) {
                                iconName = focused ? 'person' : 'person-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeBackgroundColor: '#282828',
                        inactiveBackgroundColor: '#282828',
                        activeTintColor: '#1DB954',
                        inactiveTintColor: 'grey',
                        labelStyle: { paddingBottom: 5, fontSize: 10 },
                        style: { padding: 10, height: 200}
                    }}>

                    <Tab.Screen
                        options={{ headerShown: false }}
                        name={homeName} component={HomeScreen} />
                    <Tab.Screen
                        options={{ headerShown: false }}
                        name={detailsName} component={DetailsScreen} />
                    <Tab.Screen
                        options={{ headerShown: false }}
                        name={profilName} component={ProfileScreen} />

                </Tab.Navigator>
        );
}

export default MainView;