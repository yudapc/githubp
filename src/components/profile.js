import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      avatar_url: 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png',
    };
  }

  componentWillMount() {
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

export default Profile;
