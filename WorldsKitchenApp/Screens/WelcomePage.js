import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useFonts} from "expo-font";
import {styles} from "../styles/styles";
import {removeAuthHeader} from "../services/axios_config";

const WelcomePage = ({navigation}) => {

    const [loaded] = useFonts({
        Dosis: require('../assets/fonts/Dosis/static/Dosis-Medium.ttf'),
    });

    const handleRegisterNav = () => {
        navigation.navigate('RegisterForm');
    }

    const handleLoginNav = () => {
        navigation.navigate('LoginForm');
    }

    useEffect(() => {
        removeAuthHeader();
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={{flex: 1, backgroundColor: '#282828'}}>
            <View style={{flex: 1}}>
                <View>
                    <Image
                        source={require("../assets/welcome/avocado.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 10,
                            transform: [
                                {translateX: 20},
                                {translateY: 50},
                                {rotate: "-15deg"}
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/welcome/pizza.png")}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: -30,
                            left: 100,
                            transform: [
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "-5deg"}
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/welcome/taco.png")}
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 20,
                            position: "absolute",
                            top: 130,
                            left: -50,
                            transform: [
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "15deg"}
                            ]
                        }}
                    />

                    <Image
                        source={require("../assets/welcome/watermelon.png")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: "absolute",
                            top: 110,
                            left: 100,
                            transform: [
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "-15deg"}
                            ]
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        color: '#1DB954',
                        fontSize: 55,
                        fontFamily: 'Dosis',
                    }}>Kuchnia</Text>
                    <Text style={{
                        color: '#1DB954',
                        fontSize: 55,
                        fontFamily: 'Dosis',
                    }}>Świata</Text>

                    <View style={{marginVertical: 22}}>
                        <Text style={{
                            fontSize: 16,
                            color: 'white',
                            marginVertical: 4,
                            fontFamily: 'Dosis'
                        }}>Dziel się swoimi przepisami</Text>
                        <Text style={{
                            fontSize: 16,
                            color: 'white',
                            fontFamily: 'Dosis'
                        }}>oraz korzystaj z przepisów innych!!!</Text>
                    </View>

                    <View >
                        <TouchableOpacity
                            onPress={handleRegisterNav}
                            style={{
                                backgroundColor: '#1DB954',
                                fontSize: 16,
                                borderRadius: 4,
                                paddingVertical: 12,
                                marginTop: 12,
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFF",
                                shadowOffset: {width: 0, height: 9},
                                shadowOpacity: 1,
                                shadowRadius: 20,
                                elevation: 5
                            }}
                        >
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        fontFamily: "Dosis",
                                        color: "#FFF",
                                        fontWeight: "600",
                                        fontSize: 16
                                    }
                                ]}
                            >
                                Dołącz
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <TouchableOpacity
                            onPress={handleLoginNav}>
                            <Text
                                style={[
                                    {
                                        fontFamily: "Dosis",
                                        fontSize: 14,
                                        color: "#ABB4BD",
                                        textAlign: "center",
                                        marginTop: 12
                                    }
                                ]}>
                                Masz już konto?
                                <Text
                                    style={[styles.text, {marginTop: 20, color: '#1DB954',
                                        fontSize: 14,
                                        fontWeight: "500"}]}
                                >  Zaloguj się</Text>
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </View>
    );
};
export default WelcomePage;
