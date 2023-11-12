import * as React from "react";
import {request} from "./services/axios_config";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useEffect, useState} from "react";

export default function AuthContent() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
            request(
                "GET",
                "/messages",
                {}
            )
            .then((response) => setUsers(response.data)).catch((err) => console.log(err))
    }, []
    );

    return (
        <View style={styles.container}>
            <View>
                <Text>Wartości z API</Text>
                <Text>{users}</Text>
            </View>
        </View>
    )
    // }
}

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