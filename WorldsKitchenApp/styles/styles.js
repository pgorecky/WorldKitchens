import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff6347',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        marginTop: 50,
        color: 'white',
        fontSize: 48,
        fontFamily: 'DancingScript',
    },
    buttonContainer: {
        flex: 0.4,
        width: '70%',
        marginTop: 50,
        justifyContent: 'space-between',
    },
    pizza: {
        marginTop: 50,
        width: '70%',
        height: '40%',
    },
    form: {
        marginTop: 30,
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});