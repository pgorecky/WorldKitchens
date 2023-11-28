import React, {useEffect, useState} from "react";
import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import {getMealById} from "../services/MealsService";
import {styles} from "../styles/MealDetailsStyles";
import Ionicons from "react-native-vector-icons/Ionicons";

export const MealScreen = ({route}) => {
    const {mealId} = route.params;
    const [mealDetails, setMealDetails] = useState(null);

    function mapLevelToText(level) {
        switch (level) {
            case 'EASY':
                return 'Łatwe';
            case 'MEDIUM':
                return 'Średnie';
            case 'HARD':
                return 'Trudne';
            default:
                return level;
        }
    }

    useEffect(() => {
        const fetchMealDetails = getMealById(mealId);
        fetchMealDetails.then(meal => {
            setMealDetails(meal);
        }).catch(error => {
            console.error('Error fetching meals:', error);
        });
    }, []);

    return (
        <SafeAreaView>
            {mealDetails ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.background}>
                    <View style={styles.container}>
                        <Text style={styles.mealName}>{mealDetails.name}</Text>
                        <Image source={require("../assets/profile/media1.jpg")} style={styles.mealImage}></Image>
                        <Text style={styles.mealDesc}>{mealDetails.description}</Text>
                        <View style={styles.authorContainer}>
                            <Text style={styles.authCall}>Autor przepisu:</Text>
                            <Text
                                style={styles.author}>{mealDetails.author.firstName} {mealDetails.author.lastName}</Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <View style={styles.icon}>
                                <Ionicons
                                    name="time"
                                    size={35}
                                    color="#1DB954"
                                />
                                <Text style={styles.iconText}>Czas przygotowania</Text>
                                <Text style={[styles.iconText, {color: '#AEB5BC'}]}>{mealDetails.preparationTime}</Text>
                            </View>
                            <View style={styles.icon}>
                                <Ionicons
                                    name="flame"
                                    size={35}
                                    color="#1DB954"
                                />
                                <Text style={styles.iconText}>Poziom trudności</Text>
                                <Text
                                    style={[styles.iconText, {color: '#AEB5BC'}]}>{mapLevelToText(mealDetails.level)}</Text>
                            </View>
                            <View style={styles.icon}>
                                <Ionicons
                                    name="people-outline"
                                    size={35}
                                    color="#1DB954"
                                />
                                <Text style={styles.iconText}>Porcja dla</Text>
                                <Text
                                    style={[styles.iconText, {color: '#AEB5BC'}]}>{mealDetails.portionSize} osób</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.ingredientsSection}>
                        <Text style={styles.sectionTitle}>Składniki:</Text>
                        {mealDetails.ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientsContainer}>
                                <Text key={index} style={styles.ingredient}>
                                    • {ingredient.ingredientName}
                                </Text>
                                <Text style={styles.ingredient}>{ingredient.portion}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Sposób przygotowania</Text>
                        {mealDetails.preparationSteps.map((step, index) => (
                            <Text
                                key={index}
                                style={styles.ingredient}>
                                {index + 1}. {step}</Text>
                        ))}
                    </View>

                    <View style={{marginBottom: 20}}>
                        <View style={styles.ingredientsSection}>
                            <Text style={styles.secondarySectionTitle}>Komentarze:</Text>
                            {mealDetails.comments.map((comment, index) => (
                                <View key={index} style={styles.commentContainer}>
                                    <View>
                                        <Image source={require("../assets/profile/t-image2.jpg")}
                                               style={styles.profileImage}></Image>
                                    </View>

                                    <View style={{paddingLeft: 10, paddingTop: 3}}>
                                        <Text
                                            style={styles.commentAuthor}>{comment.author.firstName} {comment.author.lastName}</Text>
                                        <Text style={styles.commentContent}>{comment.content}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>

                </ScrollView>
            ) : (
                <ActivityIndicator size="large" color='#1DB954'/>
            )}
        </SafeAreaView>
    );
};
