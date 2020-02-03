import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';

import TouchableButton from './TouchableButton';

const data = [
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' },
  { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }
];

const buttons = [
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />,
    <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />, <TouchableButton />
]

const numColumns = 8;
export default class GobanV3 extends React.Component {
  renderBoardSquare = ({ item, index }) => {
    return (
      <View style={styles.item}></View> //the board
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
                data={data}
                style={styles.board}
                renderItem={this.renderBoardSquare}
                numColumns={numColumns}
            />
            <FlatList
                data={buttons}
                style={styles.stones}
                renderItem={this.renderStone}
                numColumns={numColumns + 1}
            />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    backgroundColor: 'black',
    margin: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
},
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    // margin: 1,
    height: (Dimensions.get('window').width - 80) / 9, // approximate a square, 80 is left margin + right margin
    width: (Dimensions.get('window').width - 80) / 9,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  stones: {
      flex: 1,
      margin: 24,
      position: "absolute",
      width: (Dimensions.get('window').width - 40)
  }
  
});