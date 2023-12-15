import * as React from 'react';
import {useRef, useState} from 'react';
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "../styles/MealDetailsStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import {Picker} from "@react-native-picker/picker";
import {request} from "../services/axios_config";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import {firebase} from "../firebase";


export default function AddMealScreen({navigation}) {

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [selectedRegion, setSelectedRegion] = React.useState('');
    const [selectedTime, setSelectedTime] = React.useState('');
    const [selectedLevel, setSelectedLevel] = React.useState('');
    const [selectedPortion, setSelectedPortion] = React.useState('');
    const [step, setStep] = React.useState('');
    const [preparationSteps, setPreparationSteps] = React.useState([]);
    const [ingredient, setIngredient] = React.useState('');
    const [portion, setPortion] = React.useState('');
    const [ingredients, setIngredients] = React.useState([]);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(null);
    const [uriPhoto, setUriPhoto] = useState(null)

    const stepInputRef = useRef(null);
    const ingredientInputRef = useRef(null);
    const portionInputRef = useRef(null);


    const addStep = () => {
        setPreparationSteps(prevSteps => [...prevSteps, step]);
        stepInputRef.current.clear();
        setStep('');
    };

    const addIngredient = () => {
        if (ingredient && portion) {
            setIngredients(prevIngredients => [
                ...prevIngredients,
                {ingredientName: ingredient, portion: portion}
            ]);
            ingredientInputRef.current.clear();
            portionInputRef.current.clear();
            setIngredient('');
            setPortion('');
        }
    };

    const handleAddMeal = async () => {
        try {
            console.log('wysylam' + uriPhoto)
            const response = await request(
                'POST',
                '/dishes/add',
                {
                    name: name,
                    description: description,
                    preparationTime: selectedTime,
                    ingredients: ingredients,
                    calories: 400,
                    portionSize: selectedPortion,
                    level: selectedLevel,
                    preparationSteps: preparationSteps,
                    region: selectedRegion,
                    imageUrl: uriPhoto
                }
            );

            if (response && response.data.id) {
                const newMealId = response.data.id;
                navigation.navigate('MealDetails', {mealId: newMealId});
            } else {
                console.error('Invalid response format:', response);
            }

        } catch (error) {
            console.error('Adding meal failed', error.message);
        }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri)
            await new Promise(resolve => setTimeout(resolve, 100));

            if (image) {
                uploadMedia();
            } else {
                console.error("Error: Image URI is undefined or empty.");
            }
        }
    }

    const uploadMedia = async () => {
        setUploading(true);

        let uri;

        try {
            if (image) {
                const {uri: imageUri} = await FileSystem.getInfoAsync(image);
                console.log('siema' + imageUri.valueOf().toString())
                uri = imageUri;
            }

            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();

                xhr.onload = () => {
                    resolve(xhr.response);
                }

                xhr.onerror = () => {
                    reject(new TypeError('Request Failed'))
                }

                xhr.responseType = 'blob';

                xhr.open('GET', uri, true)
                xhr.send(null);
            })

            const fileName = image.substring(image.lastIndexOf('/') + 1);
            const ref = firebase.storage().ref().child(fileName);
            const uploadTaskSnapshot = await ref.put(blob);
            const downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();
            console.log(downloadURL)
            setUriPhoto(downloadURL);
            setUploading(false);
            setImage(null);
        } catch (error) {
            console.error(error);
            setUploading(false)
        }
    };


    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.background}>
            <View style={{paddingBottom: 20}}>

                <TextInput
                    placeholder='Wprowadź nazwę posiłku'
                    placeholderTextColor='#285943'
                    style={{
                        textAlign: "center",
                        color: '#1DB954',
                        fontSize: 34,
                        fontFamily: "Dosis",
                        padding: 10,
                    }}
                    onChangeText={(text) => setName(text)}/>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row',
                    paddingBottom: 10,
                    paddingLeft: 100,
                    paddingRight: 100
                }}>
                    <View>
                        <Ionicons
                            name="flag"
                            size={45}
                            color="#1DB954"
                        />
                    </View>
                    <View>
                        <Text style={[styles.iconText, {fontSize: 20}]}>Kuchnia:</Text>
                        <Picker
                            selectedValue={selectedRegion}
                            onValueChange={(itemValue) => setSelectedRegion(itemValue)}
                            style={{width: 140, color: '#AEB5BC', marginLeft: -15}}
                            mode={'dropdown'}
                            dropdownIconColor='#1DB954'
                        >
                            <Picker.Item label="Włoska" value="ITALIAN" style={styles.pickerItem}/>
                            <Picker.Item label="Polska" value="POLISH" style={styles.pickerItem}/>
                            <Picker.Item label="Meksykańska" value="MEXICAN" style={styles.pickerItem}/>
                            <Picker.Item label="Amerykańska" value="AMERICAN" style={styles.pickerItem}/>
                            <Picker.Item label="Azjatycka" value="ASIAN" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                </View>

                <View>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require("../assets/profile/DEFAULT_PHOTO.jpg")} style={styles.mealImage}></Image>
                    </View>
                    <View style={styles.addPhotoContainer}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#1DB954',
                                borderRadius: 30,
                                width: 40,
                                height: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={pickImage}>
                            <Text style={{color: 'white', fontSize: 20}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{marginTop: 7}}>
                    <TextInput
                        placeholder='Dodaj opis posiłku...'
                        placeholderTextColor='grey'
                        multiline={true}
                        numberOfLines={6}
                        style={{
                            borderWidth: 1,
                            borderColor: 'grey',
                            fontSize: 16,
                            fontFamily: "Dosis",
                            padding: 10,
                            color: '#AEB5BC',
                            marginLeft: 10,
                            marginRight: 10,
                            textAlignVertical: 'top',
                        }}
                        onChangeText={(text) => setDescription(text)}/>
                </View>

                <View style={{
                    padding: 20,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: "space-between",
                }}>
                    <View style={styles.icon}>
                        <Ionicons
                            name="time"
                            size={35}
                            color="#1DB954"
                        />
                        <Text style={styles.iconText}>Czas przygotowania</Text>
                        <Picker
                            selectedValue={selectedTime}
                            onValueChange={(itemValue) => setSelectedTime(itemValue)}
                            style={{
                                width: 120,
                                color: '#AEB5BC',
                                flex: 0,
                            }}
                            mode={'dropdown'}
                            dropdownIconColor='#1DB954'
                        >
                            <Picker.Item label="5 min" value="5 min" style={styles.pickerItem}/>
                            <Picker.Item label="10 min" value="10 min" style={styles.pickerItem}/>
                            <Picker.Item label="15 min" value="15 min" style={styles.pickerItem}/>
                            <Picker.Item label="30 min" value="30 min" style={styles.pickerItem}/>
                            <Picker.Item label="45 min" value="45 min" style={styles.pickerItem}/>
                            <Picker.Item label="60 min" value="60 min" style={styles.pickerItem}/>
                            <Picker.Item label="1h +" value="1h +" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons
                            name="flame"
                            size={35}
                            color="#1DB954"
                        />
                        <Text style={styles.iconText}>Poziom trudności</Text>
                        <Picker
                            selectedValue={selectedLevel}
                            onValueChange={(itemValue) => setSelectedLevel(itemValue)}
                            style={{width: 125, color: '#AEB5BC'}}
                            mode={'dropdown'}
                            dropdownIconColor='#1DB954'
                        >
                            <Picker.Item label="Łatwy" value="EASY" style={styles.pickerItem}/>
                            <Picker.Item label="Średni" value="MEDIUM" style={styles.pickerItem}/>
                            <Picker.Item label="Trudny" value="HARD" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                    <View style={styles.icon}>
                        <Ionicons
                            name="people-outline"
                            size={35}
                            color="#1DB954"
                        />
                        <Text style={styles.iconText}>Porcja dla</Text>
                        <Picker
                            selectedValue={selectedPortion}
                            onValueChange={(itemValue) => setSelectedPortion(itemValue)}
                            style={{
                                width: 125,
                                color: '#AEB5BC',
                            }}
                            mode={'dropdown'}
                            dropdownIconColor='#1DB954'
                        >
                            <Picker.Item label="1 osoby" value="1" style={styles.pickerItem}/>
                            <Picker.Item label="2 osób" value="2" style={styles.pickerItem}/>
                            <Picker.Item label="3 osób" value="3" style={styles.pickerItem}/>
                            <Picker.Item label="4 osób" value="4" style={styles.pickerItem}/>
                            <Picker.Item label="5 osób" value="5" style={styles.pickerItem}/>
                        </Picker>
                    </View>
                </View>

                <View style={styles.ingredientsSection}>
                    <Text style={styles.sectionTitle}>Składniki:</Text>
                    {ingredients.map((ingredient, index) => (
                        <View key={index} style={styles.ingredientsContainer}>
                            <Text key={index} style={styles.ingredient}>
                                • {ingredient.ingredientName}
                            </Text>
                            <Text style={styles.ingredient}>{ingredient.portion}</Text>
                        </View>
                    ))}
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
                        <View>
                            <TextInput
                                ref={ingredientInputRef}
                                placeholder='Dodaj składnik'
                                placeholderTextColor='grey'
                                style={{
                                    color: '#AEB5BC',
                                    fontSize: 20,
                                    fontFamily: "Dosis",
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: 'grey',
                                }}
                                onChangeText={(text) => setIngredient(text)}/>
                        </View>
                        <View>
                            <TextInput
                                ref={portionInputRef}
                                placeholder='ilość'
                                placeholderTextColor='grey'
                                style={{
                                    color: '#AEB5BC',
                                    fontSize: 20,
                                    fontFamily: "Dosis",
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: 'grey',
                                }}
                                onChangeText={(text) => setPortion(text)}/>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.addStepButton}
                                onPress={() => {
                                    addIngredient()
                                }}>
                                <Text
                                    style={{
                                        paddingLeft: 18,
                                        paddingRight: 18,
                                        color: '#282828',
                                        fontSize: 24
                                    }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Sposób przygotowania</Text>
                    {preparationSteps.map((step, index) => (
                        <Text
                            key={index}
                            style={styles.ingredient}>
                            {index + 1}. {step}</Text>
                    ))}
                    <View style={{flex: 1, flexDirection: 'row', marginTop: 10,}}>
                        <View>
                            <TextInput
                                ref={stepInputRef}
                                placeholder='Opisz następny krok przygotowania'
                                placeholderTextColor='grey'
                                style={{
                                    color: '#AEB5BC',
                                    fontSize: 20,
                                    fontFamily: "Dosis",
                                    padding: 10,
                                    borderWidth: 1,
                                    borderColor: 'grey',
                                    width: 320,
                                    maxWidth: 320
                                }}
                                onChangeText={(text) => setStep(text)}/>
                        </View>
                        <View>
                            <TouchableOpacity
                                style={styles.addStepButton}
                                onPress={() => {
                                    addStep()
                                }}>
                                <Text
                                    style={{
                                        paddingLeft: 18,
                                        paddingRight: 18,
                                        color: '#282828',
                                        fontSize: 24
                                    }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{alignItems: 'flex-end', marginRight: 15}}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleAddMeal}>
                        <Text style={styles.submitButtonText}>
                            Zapisz
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}