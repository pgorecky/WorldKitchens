import * as React from 'react';
import {Text, View} from 'react-native';

export default function Favourites({ navigation }) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#282828'}}>
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{fontSize: 26, fontWeight: 'bold'}}>Ulubione</Text>
        </View>
    );
}