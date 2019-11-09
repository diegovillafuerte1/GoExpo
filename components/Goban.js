import React from 'react';
import { 
    View, 
    Text,
    StyleSheet 
} from 'react-native';

import TouchableButton from './TouchableButton';

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

const OverlayRow = ({ pieceStringArray }) => (
    <View style={styles.gobanRow}>
        <View style={getNodeStyle(pieceStringArray[0])}>
            <TouchableButton></TouchableButton>
        </View>
        <View style={getNodeStyle(pieceStringArray[1])}></View>
        <View style={getNodeStyle(pieceStringArray[2])}></View>
        <View style={getNodeStyle(pieceStringArray[3])}></View>
        <View style={getNodeStyle(pieceStringArray[4])}></View>
        <View style={getNodeStyle(pieceStringArray[5])}></View>
        <View style={getNodeStyle(pieceStringArray[6])}></View>
        <View style={getNodeStyle(pieceStringArray[7])}></View>
        <View style={getNodeStyle(pieceStringArray[8])}></View>
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
            {/* <OverlayRow styleProp={[['black', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty'], true ? styles.filledSquare : styles.unfilledSquare]}></OverlayRow> */}
            <OverlayRow pieceStringArray={['black', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['black', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['empty', 'black', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['white', 'black', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['empty', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['empty', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['black', 'black', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['white', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
            <OverlayRow pieceStringArray={['empty', 'empty', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty']}></OverlayRow>
        </View>
    </View>
);

function getNodeStyle(pieceColorString) {
    switch(pieceColorString) {
        case 'black':
            return styles.gobanPieceBlack;
        
        case 'white':
            return styles.gobanPieceWhite;
   
        case 'empty':
            return styles.gobanPieceEmpty;
   
        default:
            return styles.gobanPieceEmpty

        }
};

function toggleButtonState() {
    this.setState(prevState => ({ isSquareFilled: !prevState.isSquareFilled }));
};

const styles = StyleSheet.create({
  gobanOverlay: {
    position: 'absolute',
    top: 45,
    left: 20
  },
  gobanPieceWhite: {
    padding: 19,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    
  },
  gobanPieceBlack: {
    padding: 19,
    borderRadius: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'black'
  },
  gobanPieceEmpty: {
    padding: 20,
    borderRadius: 40,
  },
  gobanPieceHidden: {
    opacity: 0
  },
  gobanPieceVisible: {
    opacity: 1
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
    padding: 19,
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