import {StyleSheet} from "react-native";

const mainColor = '#282828';
const secondColor = '#1DB954';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mainColor
    },
    text: {
        fontFamily: "Dosis",
        color: secondColor
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },

    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },

    add: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },

    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
        flexDirection: 'row',
    },

    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    cardTransparency: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
    },
    cardMealName: {
        color: secondColor,
        fontFamily: 'Dosis'
    },
    cardMealDetails: {
        color: '#AEB5BC',
        fontFamily: 'Dosis'
    }
});