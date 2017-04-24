import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from './styles';

export class PageNoInternetConnection extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          No Internet Connection
        </Text>
      </View>
    );
  }
}

export default PageNoInternetConnection;
