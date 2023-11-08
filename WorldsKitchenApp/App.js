import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from "./WelcomeScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import WelcomePage from "./WelcomePage";
import LoginForm from "./LoginForm";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Welcome" options={{ headerShown: false }}>
                  {(props) => <WelcomeScreen {...props} onAnimationFinish={() => props.navigation.navigate('Login')} />}
              </Stack.Screen>
              <Stack.Screen style={styles.container} name={'Login'} component={WelcomePage}/>
              <Stack.Screen style={styles.container} name={'LoginForm'} component={LoginForm}/>
          </Stack.Navigator>
      </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});