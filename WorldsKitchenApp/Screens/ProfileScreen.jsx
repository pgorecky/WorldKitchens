import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {getLikedMeals, getMyProfileDetails, getMyProfileMeals, getMyRecentActivity} from "../services/UserService";
import {styles} from '../styles/ProfileStyles'
import {Button} from "react-native-elements";
import {MealCard} from "../components/MealCard";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealScreen} from "./MealScreen";
import {useFocusEffect} from "@react-navigation/native";

export const ProfileScreen = ({route, navigation}) => {
    const [profileDetails, setProfileDetails] = useState(null);
    const [profileMeals, setProfileMeals] = useState(null);
    const [likedMeals, setLikedMeals] = useState(null);
    const [recentActivity, setRecentActivity] = useState(null);

    useEffect(() => {
        const fetchProfileDetails = async () => {
            const details = await getMyProfileDetails();
            setProfileDetails(details);

            const meals = await getMyProfileMeals();
            setProfileMeals(meals);

            const liked = await getLikedMeals();
            setLikedMeals(liked);

            const activity = await getMyRecentActivity();
            setRecentActivity(activity)
        };

        fetchProfileDetails();
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            const fetchData = async () => {
                const liked = await getLikedMeals();
                setLikedMeals(liked);

                const updatedActivity = await getMyRecentActivity();
                setRecentActivity(updatedActivity)
            };

            fetchData();
        }, [])
    );

    const navigateToMealDetails = (mealId) => {
        navigation.navigate('MealDetails', {mealId});
    };

    const RecentActivityComponent = ({recentActivity}) => {
        const printRecentActivity = (activity) => {
            const formatDate = (dateArray) => {
                const [year, month, day, hours, minutes] = dateArray;
                const formattedDate = `${padWithZero(day)}-${padWithZero(month)}-${year} ${padWithZero(hours)}:${padWithZero(minutes)}`;
                return formattedDate;
            };

            const padWithZero = (number) => {
                return number < 10 ? `0${number}` : number;
            };

            switch (activity.activityType) {
                case 'ADD_COMMENT':
                    return (
                        <View style={{paddingBottom: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.activityIndicator}></View>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    {formatDate(activity.date)}
                                </Text>
                            </View>
                            <View style={{width: 250, marginLeft: 35}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]} key={activity.id}>
                                    Użytkownik {activity.user.firstName} zamieścił komentarz pod posiłkiem:
                                    <Text style={{color: '#1DB954'}}> {activity.dish.name}</Text>
                                </Text>
                            </View>
                        </View>
                    );
                case 'ADD_MEAL':
                    return (
                        <View style={{paddingBottom: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.activityIndicator}></View>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    {formatDate(activity.date)}
                                </Text>
                            </View>
                            <View style={{width: 250, marginLeft: 35}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]} key={activity.id}>
                                    Użytkownik {activity.user.firstName} dodał nowy posiłek:
                                    <Text style={{color: '#1DB954'}}> {activity.dish.name}</Text>
                                </Text>
                            </View>
                        </View>
                    );
                case 'LIKE_MEAL':
                    return (
                        <View style={{paddingBottom: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.activityIndicator}></View>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    {formatDate(activity.date)}
                                </Text>
                            </View>
                            <View style={{width: 250, marginLeft: 35}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]} key={activity.id}>
                                    Użytkownik {activity.user.firstName} polubił posiłek:
                                    <Text style={{color: '#1DB954'}}> {activity.dish.name}</Text>
                                </Text>
                            </View>
                        </View>
                    );
                case 'UNLIKE_MEAL':
                    return (
                        <View style={{paddingBottom: 10}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.activityIndicator}></View>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    {formatDate(activity.date)}
                                </Text>
                            </View>
                            <View style={{width: 250, marginLeft: 35}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]} key={activity.id}>
                                    Użytkownik {activity.user.firstName} usunął z ulubionych posiłek:
                                    <Text style={{color: '#1DB954'}}> {activity.dish.name}</Text>
                                </Text>
                            </View>
                        </View>
                    );
                default:
                    return null;
            }
        };

        return (
            <View style={{alignItems: 'center'}}>
                {recentActivity.reverse().slice(0, 5).map((activity) => printRecentActivity(activity))}
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {profileDetails && profileMeals && likedMeals && recentActivity ? (
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{alignSelf: "center"}}>
                        <View style={styles.profileImage}>
                            <Image source={require("../assets/profile/t-image2.jpg")} style={styles.image}
                                   resizeMode="center"></Image>
                        </View>
                        <View style={styles.add}>
                            <Button
                                title={'+'}
                                buttonStyle={{
                                    backgroundColor: '#1DB954',
                                    borderRadius: 30,
                                    width: 40,
                                    height: 40
                                }}></Button>
                        </View>
                    </View>

                    <View style={styles.infoContainer}>
                        <Text style={[styles.text, {fontWeight: "200", fontSize: 40}]}>{profileDetails.firstName}</Text>
                        <Text
                            style={[styles.text, {color: "#AEB5BC", fontSize: 18}]}>{'@' + profileDetails.login}</Text>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14, marginLeft: 5}]}>
                            Przepisy użytkownika</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {profileMeals.map((meal) => (
                                <TouchableOpacity
                                    key={meal.id}
                                    onPress={() => navigateToMealDetails(meal.id)}
                                >
                                    <MealCard meal={meal} containerWidth={200}/>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{marginTop: 15}}>
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14, marginLeft: 5}]}>
                            Ulubione przepisy użytkownika</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {likedMeals.map((meal) => (
                                <TouchableOpacity
                                    key={meal.id}
                                    onPress={() => navigateToMealDetails(meal.id)}
                                >
                                    <MealCard meal={meal} containerWidth={200}/>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>
                    <Text style={[styles.subText, {color: '#1DB954'}, styles.recent]}>Ostatnia aktywność</Text>
                    <RecentActivityComponent recentActivity={recentActivity}/>
                </ScrollView>
            ) : (
                <ActivityIndicator size="large" color='#1DB954'/>
            )}
        </SafeAreaView>
    );
};

const Stack = createNativeStackNavigator();
export const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            <Stack.Screen name="MealDetails" component={MealScreen}/>
        </Stack.Navigator>
    );
}