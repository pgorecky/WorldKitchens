import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "./Screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePage from "./Screens/WelcomePage";
import LoginForm from "./Screens/LoginForm";
import MainView from "./Screens/MainView";
import RegisterForm from "./Screens/RegisterForm";

const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Welcome" options={{headerShown: false}}>
                    {(props) => <WelcomeScreen {...props}
                                               onAnimationFinish={() => props.navigation.navigate('WelcomePage')}/>}
                </Stack.Screen>
                <Stack.Screen options={{headerShown: false}} name={'WelcomePage'} component={WelcomePage}/>
                <Stack.Screen options={{headerShown: false}} name={'LoginForm'} component={LoginForm}/>
                <Stack.Screen options={{headerShown: false}} name={'RegisterForm'} component={RegisterForm}/>
                <Stack.Screen options={{headerShown: false}} name={'MainView'} component={MainView}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}