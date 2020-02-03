import React from "react";
import { TouchableHighlight, Alert, View, StyleSheet, Dimensions } from "react-native";

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
                return styles.gobanPieceEmpty;
    
            }
    };

    render() {
        console.log(Dimensions.get('window').width);
        return (
            <TouchableHighlight
                onPress={() => {
                }}
                style={this.getPieceStyle(this.state.turn)}
                onHideUnderlay={() => {
                    if (this.state.turn == 'white'){
                        this.setState({ turn: 'black' });
                    }
                    else if (this.state.turn == 'black'){
                        this.setState({ turn: 'white' });
                    }
                    else{
                        this.setState({turn: 'black'});
                    }
                }}
                onShowUnderlay={() => {
                    if (this.state.turn == 'white'){
                        this.setState({ turn: 'black' });
                    }
                    else if (this.state.turn == 'black'){
                        this.setState({ turn: 'white' });
                    }
                    else{
                        this.setState({turn: 'black'});
                    }
                }}
            ><View></View>
            </TouchableHighlight>
        );
    }
}

const dimHeight = (Dimensions.get('window').width - 80) / 8; // approximate a square, 80 is left margin + right margin
const dimWidth = (Dimensions.get('window').width - 80) / 9; // approximate a square, 80 is left margin + right margin

const styles = StyleSheet.create({
    gobanPieceWhite: {
        borderColor: 'blue',
        borderRadius: dimWidth/2,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        // margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: dimWidth,
        width: dimWidth
    },
    gobanPieceBlack: {
        // padding: 19,
        // borderRadius: 40,
        borderRadius: dimWidth/2,
        borderColor: 'yellow',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'black',
        // margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: dimWidth,
        width: dimWidth
    },
    gobanPieceEmpty: {
        // borderColor: 'blue',
        borderWidth: 1,
        // borderRadius: dimWidth/2,
        // borderStyle: 'solid',
        // backgroundColor: 'white',
        // margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: dimWidth,  
        width: dimWidth

    },
});