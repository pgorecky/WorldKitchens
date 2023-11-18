import React from 'react';
import {View, Text, Alert, ScrollView, TouchableOpacity} from 'react-native';
import {request, setAuthHeader} from "../services/axios_config";
import {styles} from "../styles/LoginStyles";
import InputTextField from "../components/InputTextField";

const RegisterForm = ({ navigation }) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');

    const handleRegister = async () => {
        try {
            const response = await request(
                'POST',
                '/register', {
                    login: username,
                    password: password,
                    firstName: firstname,
                    lastName: lastname,
                }
            );
            if (response.data && response.data.token) {
                await setAuthHeader(response.data.token);
                navigation.navigate('LoginForm');
            }
        } catch (error) {
            console.error('Register failed', error.message);
            Alert.alert('Rejestracja nieudana', 'Wystąpił błąd podczas tworzenia użytkownika');
        }
    };

    const handleLoginNav = () => {
        navigation.navigate('LoginForm');
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Rejestracja</Text>

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

                <InputTextField
                    style={[styles.inputTitle, {
                        marginTop: 32,
                        marginBottom: 8
                    }]}
                    title="Imię"
                    onChangeText={(text) => setFirstname(text)}
                />

                <InputTextField
                    style={[styles.inputTitle, {
                        marginTop: 32,
                        marginBottom: 8
                    }]}
                    title="Nazwisko"
                    onChangeText={(text) => setLastname(text)}
                />

                <TouchableOpacity
                    style={styles.submitContainer}
                    onPress={() => handleRegister()}>
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
                        Zarejestruj się
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleLoginNav}
                >
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
                        Masz już konto?
                        <Text style={[styles.text, styles.link, {marginTop: 20}]}>  Zaloguj się</Text>
                    </Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
};

export default RegisterForm;
