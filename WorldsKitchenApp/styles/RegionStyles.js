import {StyleSheet} from "react-native";
import {APP_FONT, LIGHT_GRAY, MAIN_COLOR, SECONDARY_COLOR} from "../const/CONSTS";

const secondaryColor = SECONDARY_COLOR;
const mainColor = MAIN_COLOR;
export const styles = StyleSheet.create({

    image: {
        flex: 1,
        height: 400,
        width: '100%',
        resizeMode: "cover"
    },

    transparency: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        overflow: 'hidden',
        flex: 1,
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center'
    },

    regionTitle: {
        color: LIGHT_GRAY,
        fontFamily: APP_FONT,
        fontSize: 36,
        fontWeight: "bold"
    },

    regionDescription: {
        color: LIGHT_GRAY,
        fontFamily: APP_FONT,
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30
    },

    container: {
        flex: 1,
        backgroundColor: secondaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },

    cardContainer: {
        paddingTop: 20
    },

    textDiscover: {
        fontFamily: APP_FONT,
        fontSize: 30,
        padding: 15,
        color: mainColor
    },

    floatButton: {
        backgroundColor: mainColor,
        borderRadius: 30,
        width: 50,
        height: 50,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        right: 30,
        bottom: 30,
        resizeMode: 'cover',
    },

    floatButtonText: {
        color: 'white',
        fontSize: 25,
    }
});