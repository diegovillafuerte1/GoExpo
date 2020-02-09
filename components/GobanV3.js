import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import TouchableButton from './TouchableButton';

// 0 == black, 1 == white, 3 == empty
const boardSquareArray = [
  { key: 'AH', value: 3}, { key: 'BH', value: 3}, { key: 'CH', value: 3}, { key: 'DH', value: 3}, { key: 'EH', value: 3}, { key: 'FH', value: 3}, { key: 'GH', value: 3}, { key: 'HH', value: 3},
  { key: 'AG', value: 3}, { key: 'BG', value: 3}, { key: 'CG', value: 3}, { key: 'DG', value: 3}, { key: 'EG', value: 3}, { key: 'FG', value: 3}, { key: 'GG', value: 3}, { key: 'HG', value: 3},
  { key: 'AF', value: 3}, { key: 'BF', value: 3}, { key: 'CF', value: 3}, { key: 'DF', value: 3}, { key: 'EF', value: 3}, { key: 'FF', value: 3}, { key: 'GF', value: 3}, { key: 'HF', value: 3},
  { key: 'AE', value: 3}, { key: 'BE', value: 3}, { key: 'CE', value: 3}, { key: 'DE', value: 3}, { key: 'EE', value: 3}, { key: 'FE', value: 3}, { key: 'GE', value: 3}, { key: 'HE', value: 3},
  { key: 'AD', value: 3}, { key: 'BD', value: 3}, { key: 'CD', value: 3}, { key: 'DD', value: 3}, { key: 'ED', value: 3}, { key: 'FD', value: 3}, { key: 'GD', value: 3}, { key: 'HD', value: 3},
  { key: 'AC', value: 3}, { key: 'BC', value: 3}, { key: 'CC', value: 3}, { key: 'DC', value: 3}, { key: 'EC', value: 3}, { key: 'FC', value: 3}, { key: 'GC', value: 3}, { key: 'HC', value: 3},
  { key: 'AB', value: 3}, { key: 'BB', value: 3}, { key: 'CB', value: 3}, { key: 'DB', value: 3}, { key: 'EB', value: 3}, { key: 'FB', value: 3}, { key: 'GB', value: 3}, { key: 'HB', value: 3},
  { key: 'AA', value: 3}, { key: 'BA', value: 3}, { key: 'CA', value: 3}, { key: 'DA', value: 3}, { key: 'EA', value: 3}, { key: 'FA', value: 3}, { key: 'GA', value: 3}, { key: 'HA', value: 3}
];
const stonesArray = [
  { key: 'A9', value: 3}, { key: 'B9', value: 3}, { key: 'C9', value: 3}, { key: 'D9', value: 3}, { key: 'E9', value: 3}, { key: 'F9', value: 3}, { key: 'G9', value: 3}, { key: 'H9', value: 3}, { key: 'H9', value: 3},
  { key: 'A8', value: 3}, { key: 'B8', value: 3}, { key: 'C8', value: 3}, { key: 'D8', value: 3}, { key: 'E8', value: 3}, { key: 'F8', value: 3}, { key: 'G8', value: 3}, { key: 'H8', value: 3}, { key: 'H8', value: 3},
  { key: 'A7', value: 3}, { key: 'B7', value: 3}, { key: 'C7', value: 3}, { key: 'D7', value: 3}, { key: 'E7', value: 3}, { key: 'F7', value: 3}, { key: 'G7', value: 3}, { key: 'H7', value: 3}, { key: 'H7', value: 3},
  { key: 'A6', value: 3}, { key: 'B6', value: 3}, { key: 'C6', value: 3}, { key: 'D6', value: 3}, { key: 'E6', value: 3}, { key: 'F6', value: 3}, { key: 'G6', value: 3}, { key: 'H6', value: 3}, { key: 'H6', value: 3},
  { key: 'A5', value: 3}, { key: 'B5', value: 3}, { key: 'C5', value: 3}, { key: 'D5', value: 3}, { key: 'E5', value: 3}, { key: 'F5', value: 3}, { key: 'G5', value: 3}, { key: 'H5', value: 3}, { key: 'H5', value: 3},
  { key: 'A4', value: 3}, { key: 'B4', value: 3}, { key: 'C4', value: 3}, { key: 'D4', value: 3}, { key: 'E4', value: 3}, { key: 'F4', value: 3}, { key: 'G4', value: 3}, { key: 'H4', value: 3}, { key: 'H4', value: 3},
  { key: 'A3', value: 3}, { key: 'B3', value: 3}, { key: 'C3', value: 3}, { key: 'D3', value: 3}, { key: 'E3', value: 3}, { key: 'F3', value: 3}, { key: 'G3', value: 3}, { key: 'H3', value: 3}, { key: 'H3', value: 3},
  { key: 'A2', value: 3}, { key: 'B2', value: 3}, { key: 'C2', value: 3}, { key: 'D2', value: 3}, { key: 'E2', value: 3}, { key: 'F2', value: 3}, { key: 'G2', value: 3}, { key: 'H2', value: 3}, { key: 'H2', value: 3},
  { key: 'A1', value: 3}, { key: 'B1', value: 3}, { key: 'C1', value: 3}, { key: 'D1', value: 3}, { key: 'E1', value: 3}, { key: 'F1', value: 3}, { key: 'G1', value: 3}, { key: 'H1', value: 3}, { key: 'H1', value: 3}
];

const numColumns = 8;
export default class GobanV3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardStones: stonesArray,
      currentTurn: 0
    };
    this.updateStonesPositions = this.updateStonesPositions.bind(this);
  }

  updateStonesPositions(newStonesArray) {
    this.setState({
      boardStones: newStonesArray,
      currentTurn: this.state.currentTurn  + 1
    })
  }
  
  renderBoardSquare = ({ item, index }) => {
    return (
      <View style={styles.boardSquare}></View>
    );
  };

  renderStone = ({ item, index }) => {
    // console.log(this.state.boardStones);
    return (
        <TouchableButton stone={item} index={index} goban={this.state.boardStones} turn={this.state.currentTurn} stonesHandler={this.updateStonesPositions}/>
    )
  }

  render() {
    return (
        <View>
            <FlatList
                data={boardSquareArray}
                style={styles.board}
                renderItem={this.renderBoardSquare}
                numColumns={numColumns}
            />
            <FlatList
                data={this.state.boardStones}
                style={styles.stones}
                renderItem={this.renderStone}
                numColumns={numColumns + 1}
            />
        </View>

    );
  }
}

// Split the screen into 10 squares
const marginWidth = Dimensions.get('window').width / 10; 
// The board is the middle eight squares
const boardHeightAndWidth = (Dimensions.get('window').width -  marginWidth * 2); 
// A single square on the board is the size of a margin
const squareHeightAndWidth = marginWidth;
// The stones are on a different plane overlayed on top of the board. That plane just
// has another column and row of squares and starts half a square before the board

const styles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: 'white',
    margin: marginWidth,
    borderWidth: 1,
    borderStyle: 'solid',
    height: boardHeightAndWidth,
    width: boardHeightAndWidth
},
  boardSquare: {
    backgroundColor: 'white',
    height: squareHeightAndWidth,
    width: squareHeightAndWidth,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  stones: {
      margin: marginWidth / 2,
      position: "absolute"
  }
  
});