import {StyleSheet} from "react-native";
import {APP_FONT, MAIN_COLOR, SECONDARY_COLOR} from "../const/CONSTS";

const secondaryColor = SECONDARY_COLOR;
const mainColor = MAIN_COLOR;
export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: secondaryColor,
        paddingHorizontal: 30
    },
    title: {
        color: mainColor,
        fontSize: 55,
        fontFamily: APP_FONT,
        paddingBottom: 40
    },
    text: {
        fontFamily: APP_FONT,
    },
    link: {
        color: mainColor,
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: mainColor,
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "green",
        shadowOffset: {width: 0, height: 9},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    }
});