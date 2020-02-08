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
                // onHideUnderlay={() => {
                //     if (this.state.turn == 'white'){
                //         this.setState({ turn: 'black' });
                //     }
                //     else if (this.state.turn == 'black'){
                //         this.setState({ turn: 'white' });
                //     }
                //     else{
                //         this.setState({turn: 'black'});
                //     }
                // }}
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

const squareHeightAndWidth = Dimensions.get('window').width / 10;

const styles = StyleSheet.create({
    gobanPieceWhite: {
        borderColor: 'blue',
        borderRadius: squareHeightAndWidth/2,
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white',
        height: squareHeightAndWidth,
        width: squareHeightAndWidth
    },
    gobanPieceBlack: {
        borderRadius: 40,
        borderRadius: squareHeightAndWidth/2,
        borderColor: 'yellow',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'black',
        height: squareHeightAndWidth,
        width: squareHeightAndWidth
    },
    gobanPieceEmpty: {
        borderColor:'rgba(158, 150, 150, 1)',
        borderWidth: 1,
        height: squareHeightAndWidth,  
        width: squareHeightAndWidth,
        borderWidth: 1
    },
});