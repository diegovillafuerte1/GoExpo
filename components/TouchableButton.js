import React from "react";
import { TouchableHighlight, Text, Alert, StyleSheet } from "react-native";

export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    }
render() {
    return (
        <TouchableHighlight
            onPress={() => {
                // Alert.alert(
                //     `You clicked this button`,
                //     'Hello World！',
                //     [
                //         {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                //         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                //     ]
                // )
            }}
            style={[
                styles.button,
                this.state.pressed ? { backgroundColor: "green" } : {}
            ]}
            onHideUnderlay={() => {
                this.setState({ pressed: false });
            }}
            onShowUnderlay={() => {
                this.setState({ pressed: true });
            }}
        >
            <Text>Button</Text>
        </TouchableHighlight>
    );
}
}

const styles = StyleSheet.create({
button: {
    padding: 10,
    borderColor: "blue",
    borderWidth: 1,
    borderRadius: 5
}
});