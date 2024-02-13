import React, {Component} from 'react';
import {Animated, Easing, Text, View} from 'react-native';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            witajAnim: new Animated.Value(0),
            wAnim: new Animated.Value(0),
            naszejAnim: new Animated.Value(0),
            kuchniAnim: new Animated.Value(0),
        };
    }

    componentDidMount() {
        this.startAnimations();
    }

    startAnimations() {
        const duration = 450;

        Animated.sequence([
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(this.state.witajAnim, {
                        toValue: 1,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.state.wAnim, {
                        toValue: 1,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.state.naszejAnim, {
                        toValue: 1,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.state.kuchniAnim, {
                        toValue: 1,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
            ]),
            Animated.delay(400),
            Animated.parallel([
                Animated.sequence([
                    Animated.timing(this.state.wAnim, {
                        toValue: 0,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.state.witajAnim, {
                        toValue: 0,
                        duration: duration,
                        easing: Easing.ease,
                        useNativeDriver: true,
                    }),
                ]),
                Animated.timing(this.state.naszejAnim, {
                    toValue: 0,
                    duration: duration,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(this.state.kuchniAnim, {
                    toValue: 0,
                    duration: duration,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
            ]),
        ]).start(() => {
            this.props.onAnimationFinish();
        });
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <Animated.Text
                        style={{
                            fontSize: 30,
                            opacity: this.state.witajAnim,
                            transform: [
                                {
                                    translateX: this.state.witajAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [100, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        Witaj
                    </Animated.Text>
                </View>
                <Animated.View style={{flexDirection: 'row'}}>
                    <Animated.Text
                        style={{
                            fontSize: 30,
                            opacity: this.state.wAnim,
                            transform: [
                                {
                                    translateX: this.state.wAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [100, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        w
                    </Animated.Text>
                </Animated.View>
                <Animated.View style={{flexDirection: 'row'}}>
                    <Animated.Text
                        style={{
                            fontSize: 30,
                            opacity: this.state.naszejAnim,
                            transform: [
                                {
                                    translateX: this.state.naszejAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [-100, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        naszej
                    </Animated.Text>
                    <Text
                        style={{
                            fontSize: 30,
                        }}
                    >
                        {' '}
                    </Text>
                    <Animated.Text
                        style={{
                            fontSize: 30,
                            opacity: this.state.kuchniAnim,
                            transform: [
                                {
                                    translateX: this.state.kuchniAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [100, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        kuchni
                    </Animated.Text>
                </Animated.View>
            </View>
        );
    }
}

export default WelcomeScreen;
