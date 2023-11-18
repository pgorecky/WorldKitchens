import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, Image, ScrollView, ActivityIndicator} from "react-native";
import {getMyProfileDetails} from "../services/UserService";
import {styles} from '../styles/profileStyles'
import {Button} from "react-native-elements";

const ProfileScreen = ({navigation}) => {
    const [profileDetails, setProfileDetails] = useState(null);

    useEffect(() => {
        const fetchProfileDetails = async () => {
            const details = await getMyProfileDetails();
            setProfileDetails(details);
        };

        fetchProfileDetails();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {profileDetails ? (
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
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 18}]}>{profileDetails.login}</Text>
                    </View>

                    <View style={{marginTop: 32}}>
                        <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14, marginLeft: 5}]}>Przepisy
                            użytkownika</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/profile/media1.jpg")} style={styles.image}
                                       resizeMode="cover"></Image>
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/profile/media2.jpg")} style={styles.image}
                                       resizeMode="cover"></Image>
                            </View>
                            <View style={styles.mediaImageContainer}>
                                <Image source={require("../assets/profile/media3.jpg")} style={styles.image}
                                       resizeMode="cover"></Image>
                            </View>
                        </ScrollView>
                    </View>
                    <Text style={[styles.subText, {color: '#1DB954'}, styles.recent]}>Recent Activity</Text>
                    <View style={{alignItems: "center"}}>
                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 250}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    Started following <Text style={{fontWeight: "400"}}>Jake Challeahe</Text> and <Text
                                    style={{fontWeight: "400"}}>Luis Poteer</Text>
                                </Text>
                            </View>
                        </View>

                        <View style={styles.recentItem}>
                            <View style={styles.activityIndicator}></View>
                            <View style={{width: 250}}>
                                <Text style={[styles.text, {color: "#AEB5BC", fontWeight: "300"}]}>
                                    Started following <Text style={{fontWeight: "400"}}>Luke Harper</Text>
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
