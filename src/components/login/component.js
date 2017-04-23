import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { styles } from './styles';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
    };
  }

  onPress() {
    if (this.state.username) {
      this.props.navigator.push({
        name: 'dashboard',
        passProps: {
          username: this.state.username,
        },
      });
    }
  }

  onPressCancel() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({username: text})}
            placeholder={'Enter User Nickname'}
            maxLength={12}
            multiline={false}
            />

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => this.onPress()}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#A5A5A5'}
            onPress={() => this.onPressCancel()}
            >
            <Text style={styles.label}>CANCEL</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Login;
