import {StyleSheet} from "react-native";
import {APP_FONT, LIGHT_GRAY, MAIN_COLOR, SECONDARY_COLOR} from "../const/CONSTS";

const secondaryColor = SECONDARY_COLOR;
const mainColor = MAIN_COLOR;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: secondaryColor
    },
    text: {
        fontFamily: APP_FONT,
        color: mainColor
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },

    subText: {
        fontSize: 12,
        color: LIGHT_GRAY,
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
        color: mainColor,
        fontFamily: APP_FONT
    },
    cardMealDetails: {
        color: LIGHT_GRAY,
        fontFamily: APP_FONT
    }
});