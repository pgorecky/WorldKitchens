import React from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {setAuthHeader} from "../services/axios_config";
import {styles} from "../styles/LoginStyles";
import InputTextField from "../components/InputTextField";
import {loginRequest} from "../services/AuthService";

const LoginForm = ({navigation}) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
            const response = await loginRequest({
                login: username,
                password: password,
            });
            await setAuthHeader(response.data.token);
            navigation.navigate('MainView');
        } catch (error) {
            console.error('Login failed', error.message);
            Alert.alert('Login failed', 'Invalid username or password. Please try again.');
        }
    }

    const handleRegisterNav = () => {
        navigation.navigate('RegisterForm');
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Logowanie</Text>

            <View>
                <InputTextField
                    style={styles.inputTitle}
                    title="Nazwa użytkownika"
                    onChangeText={(text) => setUsername(text)}
                />

                <InputTextField
                    style={{
                        marginTop: 32,
                        marginBottom: 8
                    }}
                    title="Hasło"
                    isSecure={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                    style={styles.submitContainer}
                    onPress={() => handleLogin()}>
                    <Text
                        style={[
                            styles.text,
                            {
                                color: "#FFF",
                                fontWeight: "600",
                                fontSize: 16
                            }
                        ]}
                    >
                        Zaloguj
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleRegisterNav}>
                    <Text
                        style={[
                            styles.text,
                            {
                                fontSize: 14,
                                color: "#ABB4BD",
                                textAlign: "center",
                                marginTop: 36
                            }
                        ]}
                    >
                        Nie masz konta?
                        <Text style={[styles.text, styles.link, {marginTop: 20}]}> Zarejestruj się</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default LoginForm;

