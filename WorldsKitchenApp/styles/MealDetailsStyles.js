import {StyleSheet} from "react-native";
import {APP_FONT, LIGHT_GRAY, MAIN_COLOR, SECONDARY_COLOR} from "../const/CONSTS";

const mainColor = MAIN_COLOR;
const secondaryColor = SECONDARY_COLOR;
const thirdColor = LIGHT_GRAY;
export const styles = StyleSheet.create({
    background: {
        backgroundColor: secondaryColor,
    },

    container: {
        alignItems: "center",
    },

    mealName: {
        fontFamily: APP_FONT,
        color: mainColor,
        fontSize: 34,
        padding: 10,
        textTransform: "uppercase"
    },

    mealImage: {
        flex: 1,
        height: 300,
        width: '95%',
        resizeMode: "cover",
        borderRadius: 60,
    },

    mealDesc: {
        padding: 10,
        color: thirdColor,
        marginLeft: 10,
        marginRight: 10,
    },

    authorContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    authCall: {
        paddingTop: 7,
        paddingRight: 5,
        fontFamily: APP_FONT,
        color: thirdColor,
    },

    author: {
        paddingTop: 7,
        color: mainColor,
        fontFamily: APP_FONT,
        paddingRight: 10,
    },

    iconsContainer: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    icon: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    iconText: {
        color: mainColor,
        fontFamily: APP_FONT,
        fontSize: 12
    },

    ingredientsSection: {
        padding: 10,
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: 'black',
        borderRadius: 40,
        marginLeft: 7,
        marginRight: 7,
    },

    section: {
        padding: 10,
    },
    ingredientsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    sectionTitle: {
        fontFamily: APP_FONT,
        color: mainColor,
        fontSize: 30,
        marginLeft: 10
    },

    secondarySectionTitle: {
        fontFamily: APP_FONT,
        color: mainColor,
        fontSize: 15,
        marginLeft: 10
    },

    ingredient: {
        fontFamily: APP_FONT,
        color: thirdColor,
        fontSize: 20,
        padding: 10,
        marginLeft: 20
    },

    commentContainer: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
    },

    profileImage: {
        flex: 1,
        height: 50,
        width: 50,
        resizeMode: "cover",
        borderRadius: 60,
    },

    commentContent: {
        fontFamily: APP_FONT,
        color: thirdColor,
    },

    commentAuthor: {
        fontFamily: APP_FONT,
        color: mainColor
    },

    newCommentContainer: {
        borderWidth: 1,
        borderColor: thirdColor,
    },

    submitContainer: {
        backgroundColor: mainColor,
        borderRadius: 4,
        paddingVertical: 4,
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        width: 70,
        alignSelf: 'flex-end',
        marginRight: 10
    },

    addPhotoContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },

    addPhotoButton: {
        backgroundColor: mainColor,
        borderRadius: 30,
        width: 40,
        height: 40
    },

    pickerItem: {
        fontFamily: APP_FONT,
        fontSize: 12,
        backgroundColor: secondaryColor,
        color: mainColor,
        borderWidth: 1,
        borderColor: mainColor,
    },

    addStepButton: {
        backgroundColor: 'grey',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },

    submitButton: {
        marginTop: 10,
        backgroundColor: mainColor,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100
    },

    submitButtonText: {
        fontFamily: 'Dosis',
        fontSize: 20,
        color: 'white',
        padding: 10
    }
});