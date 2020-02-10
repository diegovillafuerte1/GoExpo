import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import TouchableButton from './TouchableButton';

// 0 == black, 1 == white, 3 == empty
const boardSquareArray = [
  { key: 'AH', value: 3, group: [], groupLiberties: []}, { key: 'BH', value: 3, group: [], groupLiberties: []}, { key: 'CH', value: 3, group: [], groupLiberties: []}, { key: 'DH', value: 3, group: [], groupLiberties: []}, { key: 'EH', value: 3, group: [], groupLiberties: []}, { key: 'FH', value: 3, group: [], groupLiberties: []}, { key: 'GH', value: 3, group: [], groupLiberties: []}, { key: 'HH', value: 3, group: [], groupLiberties: []},
  { key: 'AG', value: 3, group: [], groupLiberties: []}, { key: 'BG', value: 3, group: [], groupLiberties: []}, { key: 'CG', value: 3, group: [], groupLiberties: []}, { key: 'DG', value: 3, group: [], groupLiberties: []}, { key: 'EG', value: 3, group: [], groupLiberties: []}, { key: 'FG', value: 3, group: [], groupLiberties: []}, { key: 'GG', value: 3, group: [], groupLiberties: []}, { key: 'HG', value: 3, group: [], groupLiberties: []},
  { key: 'AF', value: 3, group: [], groupLiberties: []}, { key: 'BF', value: 3, group: [], groupLiberties: []}, { key: 'CF', value: 3, group: [], groupLiberties: []}, { key: 'DF', value: 3, group: [], groupLiberties: []}, { key: 'EF', value: 3, group: [], groupLiberties: []}, { key: 'FF', value: 3, group: [], groupLiberties: []}, { key: 'GF', value: 3, group: [], groupLiberties: []}, { key: 'HF', value: 3, group: [], groupLiberties: []},
  { key: 'AE', value: 3, group: [], groupLiberties: []}, { key: 'BE', value: 3, group: [], groupLiberties: []}, { key: 'CE', value: 3, group: [], groupLiberties: []}, { key: 'DE', value: 3, group: [], groupLiberties: []}, { key: 'EE', value: 3, group: [], groupLiberties: []}, { key: 'FE', value: 3, group: [], groupLiberties: []}, { key: 'GE', value: 3, group: [], groupLiberties: []}, { key: 'HE', value: 3, group: [], groupLiberties: []},
  { key: 'AD', value: 3, group: [], groupLiberties: []}, { key: 'BD', value: 3, group: [], groupLiberties: []}, { key: 'CD', value: 3, group: [], groupLiberties: []}, { key: 'DD', value: 3, group: [], groupLiberties: []}, { key: 'ED', value: 3, group: [], groupLiberties: []}, { key: 'FD', value: 3, group: [], groupLiberties: []}, { key: 'GD', value: 3, group: [], groupLiberties: []}, { key: 'HD', value: 3, group: [], groupLiberties: []},
  { key: 'AC', value: 3, group: [], groupLiberties: []}, { key: 'BC', value: 3, group: [], groupLiberties: []}, { key: 'CC', value: 3, group: [], groupLiberties: []}, { key: 'DC', value: 3, group: [], groupLiberties: []}, { key: 'EC', value: 3, group: [], groupLiberties: []}, { key: 'FC', value: 3, group: [], groupLiberties: []}, { key: 'GC', value: 3, group: [], groupLiberties: []}, { key: 'HC', value: 3, group: [], groupLiberties: []},
  { key: 'AB', value: 3, group: [], groupLiberties: []}, { key: 'BB', value: 3, group: [], groupLiberties: []}, { key: 'CB', value: 3, group: [], groupLiberties: []}, { key: 'DB', value: 3, group: [], groupLiberties: []}, { key: 'EB', value: 3, group: [], groupLiberties: []}, { key: 'FB', value: 3, group: [], groupLiberties: []}, { key: 'GB', value: 3, group: [], groupLiberties: []}, { key: 'HB', value: 3, group: [], groupLiberties: []},
  { key: 'AA', value: 3, group: [], groupLiberties: []}, { key: 'BA', value: 3, group: [], groupLiberties: []}, { key: 'CA', value: 3, group: [], groupLiberties: []}, { key: 'DA', value: 3, group: [], groupLiberties: []}, { key: 'EA', value: 3, group: [], groupLiberties: []}, { key: 'FA', value: 3, group: [], groupLiberties: []}, { key: 'GA', value: 3, group: [], groupLiberties: []}, { key: 'HA', value: 3, group: [], groupLiberties: []}
];
const stonesArray = [
  { key: 'A9', value: 3, group: [], groupLiberties: []}, { key: 'B9', value: 3, group: [], groupLiberties: []}, { key: 'C9', value: 3, group: [], groupLiberties: []}, { key: 'D9', value: 3, group: [], groupLiberties: []}, { key: 'E9', value: 3, group: [], groupLiberties: []}, { key: 'F9', value: 3, group: [], groupLiberties: []}, { key: 'G9', value: 3, group: [], groupLiberties: []}, { key: 'H9', value: 3, group: [], groupLiberties: []}, { key: 'H9', value: 3, group: [], groupLiberties: []},
  { key: 'A8', value: 3, group: [], groupLiberties: []}, { key: 'B8', value: 3, group: [], groupLiberties: []}, { key: 'C8', value: 3, group: [], groupLiberties: []}, { key: 'D8', value: 3, group: [], groupLiberties: []}, { key: 'E8', value: 3, group: [], groupLiberties: []}, { key: 'F8', value: 3, group: [], groupLiberties: []}, { key: 'G8', value: 3, group: [], groupLiberties: []}, { key: 'H8', value: 3, group: [], groupLiberties: []}, { key: 'H8', value: 3, group: [], groupLiberties: []},
  { key: 'A7', value: 3, group: [], groupLiberties: []}, { key: 'B7', value: 3, group: [], groupLiberties: []}, { key: 'C7', value: 3, group: [], groupLiberties: []}, { key: 'D7', value: 3, group: [], groupLiberties: []}, { key: 'E7', value: 3, group: [], groupLiberties: []}, { key: 'F7', value: 3, group: [], groupLiberties: []}, { key: 'G7', value: 3, group: [], groupLiberties: []}, { key: 'H7', value: 3, group: [], groupLiberties: []}, { key: 'H7', value: 3, group: [], groupLiberties: []},
  { key: 'A6', value: 3, group: [], groupLiberties: []}, { key: 'B6', value: 3, group: [], groupLiberties: []}, { key: 'C6', value: 3, group: [], groupLiberties: []}, { key: 'D6', value: 3, group: [], groupLiberties: []}, { key: 'E6', value: 3, group: [], groupLiberties: []}, { key: 'F6', value: 3, group: [], groupLiberties: []}, { key: 'G6', value: 3, group: [], groupLiberties: []}, { key: 'H6', value: 3, group: [], groupLiberties: []}, { key: 'H6', value: 3, group: [], groupLiberties: []},
  { key: 'A5', value: 3, group: [], groupLiberties: []}, { key: 'B5', value: 3, group: [], groupLiberties: []}, { key: 'C5', value: 3, group: [], groupLiberties: []}, { key: 'D5', value: 3, group: [], groupLiberties: []}, { key: 'E5', value: 3, group: [], groupLiberties: []}, { key: 'F5', value: 3, group: [], groupLiberties: []}, { key: 'G5', value: 3, group: [], groupLiberties: []}, { key: 'H5', value: 3, group: [], groupLiberties: []}, { key: 'H5', value: 3, group: [], groupLiberties: []},
  { key: 'A4', value: 3, group: [], groupLiberties: []}, { key: 'B4', value: 3, group: [], groupLiberties: []}, { key: 'C4', value: 3, group: [], groupLiberties: []}, { key: 'D4', value: 3, group: [], groupLiberties: []}, { key: 'E4', value: 3, group: [], groupLiberties: []}, { key: 'F4', value: 3, group: [], groupLiberties: []}, { key: 'G4', value: 3, group: [], groupLiberties: []}, { key: 'H4', value: 3, group: [], groupLiberties: []}, { key: 'H4', value: 3, group: [], groupLiberties: []},
  { key: 'A3', value: 3, group: [], groupLiberties: []}, { key: 'B3', value: 3, group: [], groupLiberties: []}, { key: 'C3', value: 3, group: [], groupLiberties: []}, { key: 'D3', value: 3, group: [], groupLiberties: []}, { key: 'E3', value: 3, group: [], groupLiberties: []}, { key: 'F3', value: 3, group: [], groupLiberties: []}, { key: 'G3', value: 3, group: [], groupLiberties: []}, { key: 'H3', value: 3, group: [], groupLiberties: []}, { key: 'H3', value: 3, group: [], groupLiberties: []},
  { key: 'A2', value: 3, group: [], groupLiberties: []}, { key: 'B2', value: 3, group: [], groupLiberties: []}, { key: 'C2', value: 3, group: [], groupLiberties: []}, { key: 'D2', value: 3, group: [], groupLiberties: []}, { key: 'E2', value: 3, group: [], groupLiberties: []}, { key: 'F2', value: 3, group: [], groupLiberties: []}, { key: 'G2', value: 3, group: [], groupLiberties: []}, { key: 'H2', value: 3, group: [], groupLiberties: []}, { key: 'H2', value: 3, group: [], groupLiberties: []},
  { key: 'A1', value: 3, group: [], groupLiberties: []}, { key: 'B1', value: 3, group: [], groupLiberties: []}, { key: 'C1', value: 3, group: [], groupLiberties: []}, { key: 'D1', value: 3, group: [], groupLiberties: []}, { key: 'E1', value: 3, group: [], groupLiberties: []}, { key: 'F1', value: 3, group: [], groupLiberties: []}, { key: 'G1', value: 3, group: [], groupLiberties: []}, { key: 'H1', value: 3, group: [], groupLiberties: []}, { key: 'H1', value: 3, group: [], groupLiberties: []}
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

  // updateStoneValue(index, value) {
  //   let newBoard = [...stonesArray];
  //   newBoard.splice(index, )
  //   this.setState({
  //     boardStones: newStonesArray,
  //     currentTurn: this.state.currentTurn  + 1
  //   })
  // }
  
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