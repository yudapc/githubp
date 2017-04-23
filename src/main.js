import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import { Login } from './components/login';
import { HomePage } from './components/home-page';

export class Main extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'home':
        return <HomePage route={route} navigator={navigator} />;
      default:
        return <Login route={route} navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ {name: 'home'} }
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

