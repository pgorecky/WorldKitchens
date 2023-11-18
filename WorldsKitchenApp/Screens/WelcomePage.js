import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useFonts} from "expo-font";
import {styles} from "../styles/styles";
import {removeAuthHeader} from "../services/axios_config";
import {Button} from 'react-native-elements';

const WelcomePage = ({navigation}) => {

    const [loaded] = useFonts({
        Dosis: require('../assets/fonts/Dosis/static/Dosis-Medium.ttf'),
    });

    useEffect(() => {
        removeAuthHeader();
    });
    if (!loaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/welcome-bckgr.jpg')}/>
            <Text style={styles.title}>Kuchnia świata</Text>

            <View style={styles.buttonContainer}>
                <Button
                    buttonStyle={styles.buttonLogin}
                    title="Zaloguj się"
                    onPress={() => navigation.navigate('LoginForm')}/>
                <Button
                    buttonStyle={styles.buttonRegister}
                    title="Zarejestruj się"
                    onPress={() => navigation.navigate('RegisterForm')}/>
            </View>
        </View>
    );
};
export default WelcomePage;
