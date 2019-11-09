import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import TouchableButton from './TouchableButton';

const GobanRow = ({ rowStyle, squareStyle }) => (
    <View style={rowStyle}>
        <View style={styles.gobanLeftSquare}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
        <View style={squareStyle}></View>
    </View>
);

const OverlayRow = ({ }) => (
    <View style={styles.gobanOverlayRow}>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
        <TouchableButton></TouchableButton>
    </View>
);

const Goban = ({ title }) => (
    <View style={styles.gobanContainer}>
        <Text style={styles.headerText}>{title.toUpperCase()}</Text>
        <GobanRow rowStyle={styles.gobanTopRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        <GobanRow rowStyle={styles.gobanRow} squareStyle={styles.gobanSquare}></GobanRow>
        {/* Overlay Goban */}
        <View style={styles.gobanOverlay}>
            {/* <OverlayRow styleProp={[['black', 'white', 'empty', 'black', 'white', 'white', 'empty', 'empty', 'empty'], true ? styles.filledSquare : styles.unfilledSquare]}></OverlayRow> */}
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
            <OverlayRow></OverlayRow>
        </View>
    </View>
);

function getNodeStyle(pieceColorString) {
    switch (pieceColorString) {
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
    gobanContainer: {
        display: 'flex',
        margin: 20
    },
    gobanOverlay: {
        position: 'absolute',
        top: 10,
        left: -20
    },
    gobanOverlayRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    gobanPieceWhite: {
        padding: 19,
        borderRadius: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'white'
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
    gobanRow: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    gobanTopRow: {
        display: 'flex',
        flexDirection: 'row',
        borderColor: 'black',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    gobanSquare: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderLeftWidth: 0,
        borderRightWidth: 1,
        borderStyle: 'solid'
    },
    gobanLeftSquare: {
        width: 40,
        height: 40,
        borderColor: 'black',
        borderLeftWidth: 1,
        borderRightWidth: 1,
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