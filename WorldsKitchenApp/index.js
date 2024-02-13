import {Navigation} from "react-native-navigation";
import App from "./App";
import {AppRegistry} from "react-native";
import WelcomeScreen from "./screens/WelcomeScreen";
import WelcomePage from "./screens/WelcomePage";

AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent('WelcomeScreen', () => WelcomeScreen);
Navigation.registerComponent('WelcomePage', () => WelcomePage);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'WelcomeScreen'
                        }
                    },
                    {
                        component: {
                            name: 'WelcomePage'
                        }
                    }
                ]
            }
        }
    });
});