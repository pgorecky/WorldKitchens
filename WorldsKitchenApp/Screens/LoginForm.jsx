import React from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {request, setAuthHeader} from "../services/axios_config";
import {styles} from "../styles/styles";

const LoginForm = ({ navigation }) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = async () => {
        try {
            const response = request(
                'POST',
                '/login', {
                login: username,
                password: password,
            }).then(
                (response) => {
                    setAuthHeader(response.data.token);
                });
            navigation.navigate('SelectRegion')

        } catch (error) {
            console.error('Login failed', error.message);
            Alert.alert('Login failed', 'Invalid username or password. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Logowanie</Text>
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
                <Button
                    title="Zaloguj się"
                    onPress={handleLogin}
                />
            </View>
        </View>
    );
};

export default LoginForm;
