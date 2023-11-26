import {StyleSheet} from "react-native";

const mainColor = '#282828';
const secondColor = '#1DB954';
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
        color: '#AEB5BC',
        fontFamily: 'Dosis',
        fontSize: 36,
        fontWeight: "bold"
    },

    regionDescription: {
        color: '#AEB5BC',
        fontFamily: 'Dosis',
        fontSize: 16,
        paddingLeft: 30,
        paddingRight: 30
    },

    container: {
        flex: 1,
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 40
    },

    cardContainer: {
        paddingTop: 20
    },

    textDiscover: {
        fontFamily: 'Dosis',
        fontSize: 30,
        padding: 15,
        color: secondColor
    }
});