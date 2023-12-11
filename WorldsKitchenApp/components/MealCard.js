import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

export const MealCard = ({meal, containerWidth}) => {
    function mapRegionToText(region) {
        switch (region) {
            case 'ITALIAN':
                return 'włoska';
            case 'POLISH':
                return 'polska';
            case 'MEXICAN':
                return 'meksykańska';
            case 'AMERICAN':
                return 'amerykańska';
            case 'ASIAN':
                return 'azjatycka';
            default:
                return region;
        }
    }
    return (
        <View key={meal.id} style={[styles.mediaImageContainer, {width: containerWidth}]}>
            <Image
                source={{
                    uri: meal.imageUrl
                }}
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