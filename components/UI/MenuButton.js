import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class MenuButton extends React.Component {

  render() {
    return (
        <TouchableOpacity
        onPress={() => {                    
        }}
        style={styles.menuButton}
        onShowUnderlay={() => {
        }}>
            <Text style={styles.buttonText}>
              {this.props.menuItemText}
            </Text>
          </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  menuButton: {
    backgroundColor: 'red',
    padding:  10,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 40,
    margin: 20
  },
  buttonText: {
      fontSize: 20
  }
});