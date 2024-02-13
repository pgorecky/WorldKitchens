import React from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import {APP_FONT, LIGHT_GRAY, MAIN_COLOR} from "../const/CONSTS";

export default class InputTextField extends React.Component {
    render() {
        const {onChangeText } = this.props;
        return (
            <View style={this.props.style}>
                <Text style={styles.inputTitle}>{this.props.title}</Text>
                <TextInput
                    placeholder={this.props.placeholderText}
                    secureTextEntry={this.props.isSecure}
                    style={styles.input}
                    onChangeText={onChangeText}
                />
                <View style={{borderBottomColor: LIGHT_GRAY, borderBottomWidth: 1}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputTitle: {
        color: LIGHT_GRAY,
        fontSize: 14
    },
    input: {
        paddingVertical: 12,
        color: MAIN_COLOR,
        fontSize: 14,
        fontFamily: APP_FONT
    }
});