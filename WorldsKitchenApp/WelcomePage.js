import React, {useRef, useEffect} from 'react';
import {View, Text, Button, StyleSheet, Animated, Easing} from 'react-native';
import {useFonts} from "expo-font";

const WelcomePage = ({navigation}) => {
    const spinValue = useRef(new Animated.Value(0)).current;

    const [loaded] = useFonts({
        DancingScript: require('./assets/fonts/DancingScript.ttf'),
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 20000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '600deg'],
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kuchnia świata</Text>
            <Animated.Image
                style={[styles.pizza, {transform: [{rotate: spin}]}]}
                source={require('./assets/pizza.png')}
            />
            <View style={styles.buttonContainer}>
                <Button title="Zaloguj się"
                        onPress={() => navigation.navigate('LoginForm')}/>
                <Button title="Zarejestruj się" onPress={() => console.log('Przejście do formularza rejestracji')}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff6347',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        color: 'white',
        fontSize: 48,
        fontFamily: 'DancingScript',
    },
    buttonContainer: {
        flex: 0.4,
        width: '70%',
        marginTop: 50,
        justifyContent: 'space-between',
    },
    pizza: {
        marginTop: 50,
        width: '70%',
        height: '40%',
    },
});

export default WelcomePage;
