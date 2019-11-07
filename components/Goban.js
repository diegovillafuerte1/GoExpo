import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet 
} from 'react-native';
// const { isSquareFilled } = this.state;

const GobanRow = ({ styleProp }) => (
    <View style={styles.gobanRow}>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
        <View style={styleProp}></View>
    </View>
);

const Goban = ({ title }) => (
    <View style={styles.gobanContainer}>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        <GobanRow styleProp={styles.gobanSquare}></GobanRow>
        {/* Overlay Goban */}
        <View style={styles.gobanOverlay}>
            <GobanRow styleProp={[styles.gobanPiece, true ? styles.filledSquare : styles.unfilledSquare]}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
            <GobanRow styleProp={styles.gobanPiece}></GobanRow>
        </View>
    </View>
);

function handleSquarePress() {
    this.setState(prevState => ({ isSquareFilled: !prevState.isSquareFilled }));
}

const styles = StyleSheet.create({
  gobanOverlay: {
    position: 'absolute',
    top: 45,
    left: 20
  },
  gobanPiece: {
    padding: 20,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },
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