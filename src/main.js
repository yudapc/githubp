import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  Alert,
} from 'react-native';

import { Login } from './components/login';
import { HomePage } from './components/home-page';
import { Dashboard } from './components/dashboard';
import { Profile } from './components/profile';
import { PageNoInternetConnection } from './components/page-no-internet-connection';

export class Main extends Component {
  renderScene(route, navigator) {
    switch (route.name) {
      case 'home':
        return <HomePage route={route} navigator={navigator} />;
      case 'dashboard':
        return <Dashboard route={route} navigator={navigator} username={route.passProps.username}/>;
      case 'profile':
        return <Profile route={route} navigator={navigator} username={route.passProps.username}/>;
      case 'offline':
        return <PageNoInternetConnection onTryAgain={() => Alert.alert('Info', 'Try Again')} />;
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

