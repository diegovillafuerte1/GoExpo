import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
const io = require('socket.io-client');

// Replace this URL with your own, if you want to run the backend locally!
const SocketEndpoint = 'https://a2251c07.ngrok.io';

export default class SocketClient extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected: false,
            data: null,
        };
        this.emitData = this.emitData.bind(this);
}
  componentDidMount() {
    const socket = io(SocketEndpoint, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      this.setState({ isConnected: true });
    });

    socket.on('ping', data => {
      this.setState(data);
    });
  }

  // figure out how to send this data from a different file
  emitData(){
    socket.emit('board state change', 'Hello world!');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>connected: {this.state.isConnected ? 'true' : 'false'}</Text>
        {this.state.data &&
          <Text>
            ping response: {this.state.data}
          </Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});