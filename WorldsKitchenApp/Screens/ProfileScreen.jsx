import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator} from "react-native";
import {getMyProfileDetails, getMyProfileMeals} from "../services/UserService";
import {styles} from '../styles/ProfileStyles'
import {Button} from "react-native-elements";
import {MealCard} from "../components/MealCard";

const ProfileScreen = ({navigation}) => {
    const [profileDetails, setProfileDetails] = useState(null);
    const [profileMeals, setProfileMeals] = useState(null);

    function mapRegionToText(region) {
        switch (region) {
            case 'ITALIAN':
                return 'Włoska';
            case 'POLISH':
                return 'Polska';
            case 'MEXICAN':
                return 'Meksykańska';
            case 'AMERICAN':
                return 'Amerykańska';
            case 'ASIAN':
                return 'Azjatycka';
            default:
                return region;
        }
    }

    useEffect(() => {
        const fetchProfileDetails = async () => {
            const details = await getMyProfileDetails();
            setProfileDetails(details);

            const meals = await getMyProfileMeals();
            setProfileMeals(meals);
        };

        fetchProfileDetails();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {profileDetails && profileMeals ? (
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
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 18}]}>{'@' + profileDetails.login}</Text>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14, marginLeft: 5}]}>Przepisy
                            użytkownika</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {profileMeals.map((meal) => (
                                <MealCard key={meal.id} meal={meal} />
                            ))}
                        </ScrollView>
                    </View>
                    <Text style={[styles.subText, {color: '#1DB954'}, styles.recent]}>Ostatnia aktywność</Text>
                    <View style={{alignItems: "center"}}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 250}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    Użytkownik Weronika <Text style={{fontWeight: "400"}}>zamieścił</Text> komentarz <Text
                                    style={{fontWeight: "400"}}>pod posiłkiem: bla bla</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 250}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    Użytkownik Weronika <Text style={{fontWeight: "400"}}>zamieścił</Text> komentarz <Text
                                    style={{fontWeight: "400"}}>pod posiłkiem: bla bla</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            ) : (
                <ActivityIndicator size="large" color="#0000ff"/>
            )}
        </SafeAreaView>
    );
};

export default ProfileScreen;
