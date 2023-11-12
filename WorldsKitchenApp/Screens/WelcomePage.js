import React, {useRef, useEffect} from 'react';
import {View, Text, Button, Animated, Easing} from 'react-native';
import {useFonts} from "expo-font";
import {styles} from "../styles/styles";

const WelcomePage = ({navigation}) => {
    const spinValue = useRef(new Animated.Value(0)).current;

    const [loaded] = useFonts({
        DancingScript: require('../assets/fonts/DancingScript.ttf'),
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 40000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '1800deg'],
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kuchnia świata</Text>
            <Animated.Image
                style={[styles.pizza, {transform: [{rotate: spin}]}]}
                source={require('../assets/pizza.png')}
            />
            <View style={styles.buttonContainer}>
                <Button title="Zaloguj się"
                        onPress={() => navigation.navigate('LoginForm')}/>
                <Button title="Zarejestruj się"
                        onPress={() => navigation.navigate('RegisterForm')}/>
            </View>
        </View>
    );
};
export default WelcomePage;
