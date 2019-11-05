import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';
// const { isSquareFilled } = this.state;

const Goban = ({ title }) => (
  <View style={styles.gobanContainer}>
    <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    <View style={styles.gobanRow}>
        <View style={[styles.gobanSquare, true ? styles.filledSquare : styles.unfilledSquare]} >
            <TouchableOpacity onPress={handleSquarePress} />
        </View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
    <View style={styles.gobanRow}>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
        <View style={styles.gobanSquare}></View>
    </View>
  </View>
);

function handleSquarePress() {
    this.setState(prevState => ({ isSquareFilled: !prevState.isSquareFilled }));
}

const styles = StyleSheet.create({
  gobanContainer: {
    display: 'flex',
    marginTop: 40
  },
  gobanRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  gobanSquare: {
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  filledSquare: {
      backgroundColor: 'black'
  },
  unfilledSquare: {
      backgroundColor: 'white'
  },
  headerText: {
    color: 'black',
    fontSize: 22,
    fontWeight: '500'
  }
});
export default Goban;