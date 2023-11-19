import {StyleSheet} from "react-native";

const mainColor = '#282828';
const secondColor = '#1DB954';
export const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        backgroundColor: mainColor,
        paddingHorizontal: 30
    },
    title: {
        color: secondColor,
        fontSize: 55,
        fontFamily: 'Dosis',
        paddingBottom: 40
    },
    text: {
        fontFamily: "Dosis",
        color: "#1D2029"
    },
    link: {
        color: secondColor,
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: secondColor,
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