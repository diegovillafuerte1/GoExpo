import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import TouchableButton from './TouchableButton';

const boardSquareArray = [
  { key: 'AH' }, { key: 'BH' }, { key: 'CH' }, { key: 'DH' }, { key: 'EH' }, { key: 'FH' }, { key: 'GH' }, { key: 'HH' },
  { key: 'AG' }, { key: 'BG' }, { key: 'CG' }, { key: 'DG' }, { key: 'EG' }, { key: 'FG' }, { key: 'GG' }, { key: 'HG' },
  { key: 'AF' }, { key: 'BF' }, { key: 'CF' }, { key: 'DF' }, { key: 'EF' }, { key: 'FF' }, { key: 'GF' }, { key: 'HF' },
  { key: 'AE' }, { key: 'BE' }, { key: 'CE' }, { key: 'DE' }, { key: 'EE' }, { key: 'FE' }, { key: 'GE' }, { key: 'HE' },
  { key: 'AD' }, { key: 'BD' }, { key: 'CD' }, { key: 'DD' }, { key: 'ED' }, { key: 'FD' }, { key: 'GD' }, { key: 'HD' },
  { key: 'AC' }, { key: 'BC' }, { key: 'CC' }, { key: 'DC' }, { key: 'EC' }, { key: 'FC' }, { key: 'GC' }, { key: 'HC' },
  { key: 'AB' }, { key: 'BB' }, { key: 'CB' }, { key: 'DB' }, { key: 'EB' }, { key: 'FB' }, { key: 'GB' }, { key: 'HB' },
  { key: 'AA' }, { key: 'BA' }, { key: 'CA' }, { key: 'DA' }, { key: 'EA' }, { key: 'FA' }, { key: 'GA' }, { key: 'HA' }
];
const stonesArray = [
  { key: 'A9' }, { key: 'B9' }, { key: 'C9' }, { key: 'D9' }, { key: 'E9' }, { key: 'F9' }, { key: 'G9' }, { key: 'H9' }, { key: 'H9' },
  { key: 'A8' }, { key: 'B8' }, { key: 'C8' }, { key: 'D8' }, { key: 'E8' }, { key: 'F8' }, { key: 'G8' }, { key: 'H8' }, { key: 'H8' },
  { key: 'A7' }, { key: 'B7' }, { key: 'C7' }, { key: 'D7' }, { key: 'E7' }, { key: 'F7' }, { key: 'G7' }, { key: 'H7' }, { key: 'H7' },
  { key: 'A6' }, { key: 'B6' }, { key: 'C6' }, { key: 'D6' }, { key: 'E6' }, { key: 'F6' }, { key: 'G6' }, { key: 'H6' }, { key: 'H6' },
  { key: 'A5' }, { key: 'B5' }, { key: 'C5' }, { key: 'D5' }, { key: 'E5' }, { key: 'F5' }, { key: 'G5' }, { key: 'H5' }, { key: 'H5' },
  { key: 'A4' }, { key: 'B4' }, { key: 'C4' }, { key: 'D4' }, { key: 'E4' }, { key: 'F4' }, { key: 'G4' }, { key: 'H4' }, { key: 'H4' },
  { key: 'A3' }, { key: 'B3' }, { key: 'C3' }, { key: 'D3' }, { key: 'E3' }, { key: 'F3' }, { key: 'G3' }, { key: 'H3' }, { key: 'H3' },
  { key: 'A2' }, { key: 'B2' }, { key: 'C2' }, { key: 'D2' }, { key: 'E2' }, { key: 'F2' }, { key: 'G2' }, { key: 'H2' }, { key: 'H2' },
  { key: 'A1' }, { key: 'B1' }, { key: 'C1' }, { key: 'D1' }, { key: 'E1' }, { key: 'F1' }, { key: 'G1' }, { key: 'H1' }, { key: 'H1' }
];

const numColumns = 8;
export default class GobanV3 extends React.Component {
  renderBoardSquare = ({ item, index }) => {
    return (
      <View style={styles.boardSquare}></View> //the board
    );
  };

  renderStone = ({ item, index }) => {
    return (
        <TouchableButton/>
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
                data={stonesArray}
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