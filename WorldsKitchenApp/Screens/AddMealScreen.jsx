import * as React from 'react';
import {Text, View} from 'react-native';

export default function AddMealScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#282828'}}>
            <Text
                style={{fontSize: 26, fontWeight: 'bold'}}>Dodaj posiłek</Text>
        </View>
    );
}