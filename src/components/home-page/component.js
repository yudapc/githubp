import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

import { styles } from './styles';

export class HomePage extends Component {
  onPress() {
    this.props.navigator.push({name: 'login'});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text> Welcome To us.  </Text>
          <Text> This is Home Page </Text>
 
          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => this.onPress()}
            >
            <Text style={styles.label}>Go To Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default HomePage;
