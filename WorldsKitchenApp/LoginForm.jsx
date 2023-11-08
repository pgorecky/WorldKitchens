import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const LoginForm = ({ navigation }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        // Tutaj można dodać logikę logowania, np. wywołanie API
        console.log('Próba logowania z użytkownikiem:', username, 'i hasłem:', password);
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
    form: {
        marginTop: 30,
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default LoginForm;
