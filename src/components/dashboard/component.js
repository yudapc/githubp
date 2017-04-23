import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { styles } from './styles';

export class Dashboard extends Component {
  onPress() {
    this.props.navigator.push({
      name: 'profile',
      passProps: {
        username: this.props.username,
      },
    });
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

export default Dashboard;
