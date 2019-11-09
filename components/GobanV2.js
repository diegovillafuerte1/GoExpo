import React from 'react';
import { 
    Component,
    View, 
    Text,
    TouchableHighlight, 
    StyleSheet 
} from 'react-native';

export default class GobanV2 extends Component{
    constructor(props) {
        super(props);
        this.state = { pressStatus: false };
    }
    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={1}
                    style={
                        this.state.pressStatus
                            ? styles.buttonPress
                            : styles.button
                    }
                    onHideUnderlay={this._onHideUnderlay.bind(this)}
                    onShowUnderlay={this._onShowUnderlay.bind(this)}
                >
                    <Text
                        style={
                            this.state.pressStatus
                                ? styles.welcomePress
                                : styles.welcome
                        }
                    >
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

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