import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  NetInfo,
} from 'react-native';
import { styles } from './styles';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      avatar_url: 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png',
    };
  }

  componentWillMount() {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (isConnected) {
        handleConnection();
      } else {
        this.props.navigator.immediatelyResetRouteStack([
          {
            name: 'offline',
          },
        ]);
      }
    });
  }

  handleConnection() {
    fetch('https://api.github.com/users/' + this.props.username, {'method': 'GET'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          user: responseData,
          avatar_url: responseData.avatar_url,
        });
      })
      .done();
  }

  onPress() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text>
            Your Profile {this.props.username},
          </Text>
          <Text>
            Login: {this.state.user.login}
          </Text>
          <Text>
            ID: {this.state.user.id}
          </Text>
          <Text>
            Name: {this.state.user.name}
          </Text>
          <Text>
            Blog: {this.state.user.blog}
          </Text>
          <Image
              style={{width: 50, height: 50}}
              source={{uri: this.state.avatar_url}}
            />

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => this.onPress()}
            >
            <Text style={styles.label}>BACK</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default Profile;
