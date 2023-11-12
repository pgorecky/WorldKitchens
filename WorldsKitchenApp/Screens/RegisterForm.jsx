import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {request, setAuthHeader} from "../services/axios_config";
import {styles} from "../styles/styles";

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
            //
            // if (response.data && response.data.token) {
            //     // setAuthHeader(response.data.token);
            //     navigation.navigate('LoginForm');
            // } else {
            //     throw new Error('Token not found in response');
            // }

        } catch (error) {
            console.error('Register failed', error.message);
            Alert.alert('Rejestracja nieudana', 'Wystąpił błąd podczas tworzenia użytkownika');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rejestracja</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nazwa użytkownika"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Hasło"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Imię"
                    value={firstname}
                    onChangeText={(text) => setFirstname(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nazwisko"
                    value={lastname}
                    onChangeText={(text) => setLastname(text)}
                />
                <Button
                    title="Dołącz"
                    onPress={handleRegister}
                />
            </View>
        </View>
    );
};

export default RegisterForm;
