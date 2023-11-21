import {StyleSheet} from "react-native";

const mainColor = '#282828';
const secondColor = '#1DB954';
export const styles = StyleSheet.create({
    container: {
        backgroundColor: mainColor,
        flex: 1,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradient: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 30,
        color: secondColor,
        fontSize: 55,
        fontFamily: 'Dosis',
    },
    buttonContainer: {
        flex: 0.4,
        width: '70%',
        marginTop: 30,
        justifyContent: 'space-between',
    },
    buttonLogin: {
        backgroundColor: secondColor,
        borderRadius: 30,
        borderColor: secondColor,
        borderWidth: 2
    },
    buttonRegister: {
        backgroundColor: mainColor,
        borderRadius: 30,
        borderColor: secondColor,
        borderWidth: 2
    },
    form: {
        flex: 1,
        gap: 10,
        marginTop: 30,
        width: '80%',
    },
    input: {
        color: secondColor,
        borderColor: secondColor,
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        borderRadius: 30,
    },

    welcomeName: {
        color: '#1DB954',
        fontSize: 55,
        fontFamily: 'Dosis'
    },

    welcomeText: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Dosis'
    },

    welcomeButton: {
        backgroundColor: '#1DB954',
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 12,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "green",
        shadowOffset: {width: 0, height: 9},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },

    welcomeButtonText: {
        fontFamily: "Dosis",
        color: "#FFF",
        fontWeight: "600",
        fontSize: 16
    }
});