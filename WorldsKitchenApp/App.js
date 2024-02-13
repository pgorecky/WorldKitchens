import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from "./screens/WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePage from "./screens/WelcomePage";
import LoginForm from "./screens/LoginForm";
import MainView from "./screens/MainView";
import RegisterForm from "./screens/RegisterForm";

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