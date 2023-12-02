import {StyleSheet} from "react-native";

const mainColor = '#282828';
const secondColor = '#1DB954';
const thirdColor = '#AEB5BC';
export const styles = StyleSheet.create({
    background: {
        backgroundColor: mainColor,
    },

    container: {
        alignItems: "center",
    },

    mealName: {
        fontFamily: 'Dosis',
        color: secondColor,
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
        fontFamily: 'Dosis',
        color: thirdColor,
    },

    author: {
        paddingTop: 7,
        color: secondColor,
        fontFamily: 'Dosis',
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
        color: secondColor,
        fontFamily: 'Dosis',
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
        fontFamily: 'Dosis',
        color: secondColor,
        fontSize: 30,
        marginLeft: 10
    },

    secondarySectionTitle: {
        fontFamily: 'Dosis',
        color: secondColor,
        fontSize: 15,
        marginLeft: 10
    },

    ingredient: {
        fontFamily: 'Dosis',
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
        fontFamily: 'Dosis',
        color: thirdColor,
    },

    commentAuthor: {
        fontFamily: 'Dosis',
        color: secondColor
    },

    newCommentContainer: {
        borderWidth: 1,
        borderColor: thirdColor,
    },

    submitContainer: {
        backgroundColor: secondColor,
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
        backgroundColor: '#1DB954',
        borderRadius: 30,
        width: 40,
        height: 40
    },

    pickerItem: {
        fontFamily: 'Dosis',
        fontSize: 12,
        backgroundColor: mainColor,
        color: secondColor,
        borderWidth: 1,
        borderColor: secondColor,
    },

    addStepButton: {
        backgroundColor: 'grey',
        height: '100%',
        justifyContent: 'center',
        alignItems: "center"
    },

    submitButton: {
        marginTop: 10,
        backgroundColor: secondColor,
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