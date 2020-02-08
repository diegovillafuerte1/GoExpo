import React from "react";
import { TouchableHighlight, Alert, View, StyleSheet, Dimensions } from "react-native";

export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     turn: props.turn
        // };
    }

    getPieceStyle(value) {
        switch(value) {
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
                }}
                style={this.getPieceStyle(this.props.stone.value)}
                onShowUnderlay={() => {

                    // need to pass in the new array with the updated stone position, need a concept of which stone we are
                    let newGoban = this.props.goban;
                    let ourOldStone = this.props.stone;

                    if (this.props.stone !== 0){
                        return;
                    }
                    else {
                        // get the old stone data
                        let newStone = newGoban.find(element => element.key = ourOldStone.key);
                        // update it's value
                        newStone.value = this.props.turn % 2;
                        newGoban.splice(this.props.index, 1, newStone);
                        // increment the turn
                        // this.setState({ turn: (this.props.turn + 1) % 2});
                        this.props.stonesHandler(newGoban, this.props.turn + 1);
                    }

                    // if (this.state.turn == 'white'){
                    //     this.setState({ turn: 'black' });
                    // }
                    // else if (this.state.turn == 'black'){
                    //     this.setState({ turn: 'white' });
                    // }
                    // else{
                    //     this.setState({turn: 'black'});
                    // }
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