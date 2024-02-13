import React, {useEffect, useRef, useState} from "react";
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {checkIfIsLiked, getMealById, likeDish, unlikeDish} from "../services/MealsService";
import {styles} from "../styles/MealDetailsStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import {addCommentRequest} from "../services/CommentService";

export const MealScreen = ({route}) => {
    const {mealId} = route.params;
    const [mealDetails, setMealDetails] = useState(null);
    const [content, setContent] = React.useState('');
    const [isLiked, setIsLiked] = React.useState(false);
    const textInputRef = useRef(null);

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
        const fetchLike = checkIfIsLiked(mealId);

        fetchMealDetails.then(meal => {
            setMealDetails(meal);
        }).catch(error => {
            console.error('Error fetching meals:', error);
        });

        fetchLike.then(value => {
            setIsLiked(value);
        }).catch(error => {
            console.error('Error fetching meals:', error);
        });
    }, []);

    const handleAddComment = async () => {
        try {
            console.log('Dodano komentarz o treści: ' + content)
            await addCommentRequest({
                    dishId: mealId,
                    content: content,
                }
            );

            const updatedMealDetails = await getMealById(mealId);
            setMealDetails(updatedMealDetails);
            textInputRef.current.clear();
            setContent('');
        } catch (error) {
            console.error('Adding comment failed', error.message);
        }
    };

    const handleLikeAction = async () => {
        if (isLiked) {
            await unlikeDish(mealId);
        } else {
            await likeDish(mealId);
        }

        const updatedLikeState = await checkIfIsLiked(mealId);
        setIsLiked(updatedLikeState);
    }

    return (
        <SafeAreaView>
            {mealDetails ? (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.background}>
                    <View style={styles.container}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={styles.mealName}>{mealDetails.name}</Text>
                            {isLiked ? (
                                    <TouchableOpacity
                                        style={{paddingTop: 20}}
                                        onPress={handleLikeAction}>
                                        <Ionicons
                                            name="heart"
                                            size={25}
                                            color="red"
                                        />
                                    </TouchableOpacity>
                                ) :
                                (<TouchableOpacity
                                        style={{paddingTop: 20}}
                                        onPress={handleLikeAction}>
                                        <Ionicons
                                            name="heart-outline"
                                            size={25}
                                            color="red"
                                        />
                                    </TouchableOpacity>
                                )}

                        </View>

                        {mealDetails.imageUrl ? (
                            <Image source={{
                                uri: mealDetails.imageUrl
                            }} style={styles.mealImage}></Image>
                        ) : (
                            <Image source={require("../assets/meal/DEFAULT_PHOTO.jpg")}
                                   style={styles.mealImage}></Image>
                        )}

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
                            <View style={{
                                paddingRight: 7,
                                paddingLeft: 7,
                                paddingTop: 10,
                            }}>
                                <View style={styles.newCommentContainer}>
                                    <TextInput
                                        ref={textInputRef}
                                        placeholder='Dodaj komentarz'
                                        placeholderTextColor='#285943'
                                        style={{
                                            color: '#1DB954',
                                            fontSize: 14,
                                            fontFamily: "Dosis",
                                            padding: 7
                                        }}
                                        onChangeText={(text) => setContent(text)}/>
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={styles.submitContainer}
                                        onPress={handleAddComment}>
                                        <Text
                                            style={{
                                                fontFamily: "Dosis",
                                                color: "#FFF",
                                                fontWeight: "600",
                                                fontSize: 16
                                            }}>
                                            Dodaj
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {mealDetails.comments.map((comment, index) => (
                                <View key={index} style={styles.commentContainer}>
                                    <View>
                                        <Image source={{
                                            uri: comment.author.imageUrl
                                        }}
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
