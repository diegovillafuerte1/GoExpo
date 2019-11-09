import React from "react";
import { TouchableHighlight, Alert, View, StyleSheet } from "react-native";

export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: props.turn,
            pressed: false
        };
    }

    getPieceStyle(turn) {
        switch(turn) {
            case 'black':
                return styles.gobanPieceBlack;
            
            case 'white':
                return styles.gobanPieceWhite;
       
            case 'empty':
                return styles.gobanPieceEmpty;
       
            default:
                return styles.gobanPieceEmpty
    
            }
    };

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
                style={this.getPieceStyle(this.state.turn)}
                onHideUnderlay={() => {
                    this.setState({ turn: 'black' });
                }}
                onShowUnderlay={() => {
                    this.setState({ turn: 'white' });
                }}
            ><View></View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    gobanPieceWhite: {
        padding: 19,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white'
    },
    gobanPieceBlack: {
        padding: 19,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'black'
    },
    gobanPieceEmpty: {
        padding: 20,
        borderRadius: 40,
    },
});