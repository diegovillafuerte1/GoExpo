import React from "react";
import { TouchableHighlight, Alert, View, StyleSheet, Dimensions } from "react-native";
import { validateStone } from "./StoneValidationV2";



export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stoneStateStyle: styles.gobanPieceEmpty
        };
    }

    getPieceStyle() {
        switch(this.props.stone.value) {
            case 0:
                return styles.gobanPieceBlack;
            case 1:
                return styles.gobanPieceWhite;
            case 3:
                return styles.gobanPieceEmpty;
            default:
                return styles.gobanPieceEmpty;
            }
    };

    render() {
        // console.log(Dimensions.get('window').width); // 375 - iphone 6s

        return (
            <TouchableHighlight
                onPress={() => {                    
                    // need to pass in the new array with the updated stone position, need a concept of which stone we are
                    let ourOldStone = this.props.stone;

                    if (ourOldStone.value !== 3){
                        console.log("tried to place a stone where one already exists: " + this.props.stone.value);
                        return;
                    }
                    else {
                        const oldBoard = this.props.goban;
                        let boardStateAfterValidatingStone = validateStone(oldBoard, this.props.index, this.props.turn);
                        // error case
                        if (boardStateAfterValidatingStone[1] == true) {
                            return;
                        }
                        console.log("trying to update stone handler");

                        // increment turn and update board state in parent
                        this.props.stonesHandler(boardStateAfterValidatingStone[0]);
                    }
                }}
                style={this.getPieceStyle()}
                onShowUnderlay={() => {
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
        borderColor:'rgba(158, 150, 150, 0)',
        borderWidth: 1,
        height: squareHeightAndWidth,  
        width: squareHeightAndWidth,
        borderWidth: 1
    },
});