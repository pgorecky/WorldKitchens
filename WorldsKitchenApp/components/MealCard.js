import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const MealCard = ({meal}) => {
    function mapRegionToText(region) {
        switch (region) {
            case 'ITALIAN':
                return 'Włoska';
            case 'POLISH':
                return 'Polska';
            case 'MEXICAN':
                return 'Meksykańska';
            case 'AMERICAN':
                return 'Amerykańska';
            case 'ASIAN':
                return 'Azjatycka';
            default:
                return region;
        }
    }
    return (
        <View key={meal.id} style={styles.mediaImageContainer}>
            <Image
                source={require("../assets/profile/media1.jpg")}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.cardTransparency}>
                <Text style={styles.cardMealName}>{meal.name}</Text>
                <Text style={styles.cardMealDetails}>Kalorie: {meal.calories}</Text>
                <Text style={styles.cardMealDetails}>Kuchnia: {mapRegionToText(meal.region)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        flexDirection: 'row',
    },
    cardTransparency: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
    },
    cardMealName: {
        color: '#1DB954',
        fontFamily: 'Dosis'
    },
    cardMealDetails: {
        color: '#AEB5BC',
        fontFamily: 'Dosis'
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
});