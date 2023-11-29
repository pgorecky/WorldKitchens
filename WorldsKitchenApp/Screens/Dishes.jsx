import * as React from 'react';
import {useEffect, useState} from 'react';
import {ActivityIndicator, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/RegionStyles'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {getMealsByRegion} from "../services/MealsService";
import {MealCard} from "../components/MealCard";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealScreen} from "./MealScreen";

const Tab = createMaterialTopTabNavigator();

const RegionScreen = ({route, navigation}) => {
    const {region} = route.params;
    const [regionMeals, setRegionMeals] = useState(null);

    useEffect(() => {
        const fetchMeals = getMealsByRegion(region);
        fetchMeals.then(meals => {
            setRegionMeals(meals);
        }).catch(error => {
            console.error('Error fetching meals:', error);
        });
    }, []);


    const regionImageMap = {
        ITALIAN: require('../assets/regions/ITALIAN.jpg'),
        POLISH: require('../assets/regions/POLISH.jpg'),
        MEXICAN: require('../assets/regions/MEXICAN.jpg'),
        AMERICAN: require('../assets/regions/AMERICAN.jpg'),
        ASIAN: require('../assets/regions/ASIAN.jpg'),
    };

    function mapRegionToTitle(region) {
        switch (region) {
            case 'ITALIAN':
                return 'Kuchnia Włoska';
            case 'POLISH':
                return 'Kuchnia Polska';
            case 'MEXICAN':
                return 'Kuchnia Meksykańska';
            case 'AMERICAN':
                return 'Kuchnia Amerykańska';
            case 'ASIAN':
                return 'Kuchnia Azjatycka';
            default:
                return region;
        }
    }

    const navigateToMealDetails = (mealId) => {
        navigation.navigate('MealDetails', {mealId});
    };

    function regionDescription(region) {
        switch (region) {
            case 'ITALIAN':
                return 'Włoska kuchnia słynąca z wyrafinowanych smaków i tradycyjnych dań. Makarony, pizza, oliwa z oliwek i świeże składniki to kluczowe elementy włoskiego smaku.';
            case 'POLISH':
                return 'Polska kuchnia to bogactwo smaków i aromatów. Pierogi, bigos, schabowy oraz zupy to tylko niektóre z wyjątkowych potraw, które charakteryzują polską kuchnię.';
            case 'MEXICAN':
                return 'Meksykańska kuchnia to prawdziwa fiesta smaków. Od pikantnych sosów i dań mięsnych po tradycyjne tortille, guacamole i salsy, Meksyk oferuje prawdziwą ucztę dla podniebienia.';
            case 'AMERICAN':
                return 'Amerykańska kuchnia to pełne różnorodności doświadczenie smakowe. Burgery, steki, kanapki z grilla, dania z grilla, a także pyszne desery to klasyki kuchni amerykańskiej.';
            case 'ASIAN':
                return 'Azjatycka kuchnia to harmonia smaków, tekstur i aromatów. Od pikantnych potraw chińskich po delikatne sushi japońskie, po aromatyczne curry indyjskie, Azja oferuje niezliczone smakowe podróże.';
            default:
                return region;
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View>
                <Image
                    source={regionImageMap[region]}
                    style={styles.image}
                />
                <View style={styles.transparency}>
                    <Text style={styles.regionTitle}>
                        {mapRegionToTitle(region)}
                    </Text>
                    <Text style={styles.regionDescription}>
                        {regionDescription(region)}
                    </Text>
                </View>
            </View>
            <SafeAreaView style={styles.container}>
                {regionMeals && regionMeals.length > 0 ? (
                    <ScrollView showsHorizontalScrollIndicator={false}
                                style={{paddingBottom: 20}}>
                        <Text style={styles.textDiscover}>Odkrywaj posiłki</Text>
                        {regionMeals.map((meal) => (
                            <TouchableOpacity
                                key={meal.id}
                                style={styles.cardContainer}
                                onPress={() => navigateToMealDetails(meal.id)}
                            >
                                <MealCard containerWidth={360} meal={meal}/>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                ) : (
                    <View>
                        <Text style={styles.textDiscover}>Wygląda na to, że ten region nie ma jeszcze dodanych
                            przepisów</Text>
                        <ActivityIndicator size="large" color='#1DB954'/>
                    </View>
                )}
            </SafeAreaView>
        </ScrollView>
    );
};

function Dishes() {
    return (
        <Tab.Navigator
            tabBarScrollEnabled={true}
            screenOptions={{
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: "auto",

                },
                tabBarActiveTintColor: '#1DB954',
                tabBarInactiveTintColor: '#AEB5BC',
                tabBarIndicatorStyle: {
                    backgroundColor: '#1DB954'
                },
                tabBarLabelStyle: {
                    fontFamily: 'Dosis'
                },
                tabBarStyle: {
                    backgroundColor: '#282828',
                },
            }}
        >
            <Tab.Screen name="Włoska"
                        component={RegionScreen}
                        initialParams={{region: 'ITALIAN'}}/>
            <Tab.Screen
                name="Polska"
                component={RegionScreen}
                initialParams={{region: 'POLISH'}}/>
            <Tab.Screen
                name="Meksykańska"
                component={RegionScreen}
                initialParams={{region: 'MEXICAN'}}/>
            <Tab.Screen
                name="Amerykańska"
                component={RegionScreen}
                initialParams={{region: 'AMERICAN'}}/>
            <Tab.Screen
                name="Azjatycka"
                component={RegionScreen}
                initialParams={{region: 'ASIAN'}}/>
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
export const DishesStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dishes"
            screenOptions={{headerShown: false}}
        >
            <Stack.Screen name="Dishes" component={Dishes}/>
            <Stack.Screen name="MealDetails" component={MealScreen}/>
        </Stack.Navigator>
    );
}