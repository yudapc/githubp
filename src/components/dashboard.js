import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
} from 'react-native';

export class Dashboard extends Component {
  onPress() {
    Alert.alert('Info', 'Comming Soon');
  }

  onPressBack() {
    this.props.navigator.pop();
  }

  render() {
    console.log('navigator');
    console.log(this.props.navigator);
    console.log('route');
    console.log(this.props.route);
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>
            Welcome Bro {this.props.username},
          </Text>

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => this.onPress()}
            >
            <Text style={styles.label}>PROFILE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#A5A5A5'}
            onPress={() => this.onPressBack()}
            >
            <Text style={styles.label}>BACK</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA',
  },
  loginContainer: {
    marginVertical: 30,
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 250,
    color: '#555555',
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#32c5e6',
    height: 50,
  },
  label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default Dashboard;
