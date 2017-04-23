import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import { Login } from './components/login';

export class Main extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      default:
        return <Login route={route} navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'login'} }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Main;

