import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';
import { styles } from './styles';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      avatar_url: require('./assets/default.png'),
    };
  }

  componentWillMount() {
    this.getProfileData();
  }

  getProfileData() {
    fetch('https://api.github.com/users/' + this.props.username, {'method': 'GET'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          user: responseData,
          avatar_url: responseData.avatar_url ?  { uri: responseData.avatar_url } : responseData.avatar_url,
        });
      })
      .done();
  }

  onPress() {
    this.props.navigator.pop();
  }

  onPressGist() {
    this.props.navigator.push({
      name: 'gist',
      passProps: {
        username: this.props.username,
      },
    });
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
              source={this.state.avatar_url}
            />

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={() => this.onPressGist()}
            >
            <Text style={styles.label}>GIST</Text>
          </TouchableHighlight>

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
