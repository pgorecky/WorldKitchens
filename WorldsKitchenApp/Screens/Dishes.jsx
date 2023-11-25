import * as React from 'react';
import { View, Text } from 'react-native';
import {styles} from '../styles/styles'

export default function Dishes({ navigation }) {
    return (
        <View
            style={styles.container}
        >

            <Text
                onPress={() => alert('This is the "Home" screen.')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Home Screen</Text>
        </View>
    );
}