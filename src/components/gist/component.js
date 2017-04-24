import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  ListView,
} from 'react-native';
import { styles } from './styles';

export class Gist extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillMount() {
    this.getGists();
  }

  getGists() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    fetch('https://api.github.com/users/' + this.props.username + '/gists', {'method': 'GET'})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: ds.cloneWithRows(responseData),
        });
      })
      .done();
  }

  onPressBack() {
    this.props.navigator.pop();
  }

  render() {
    console.log('datasource:');
    console.log(this.state.dataSource);
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <Text>
          {this.props.username} Gists:
        </Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.url}</Text>}
          enableEmptySections={true}
        />

        <TouchableHighlight
          style={styles.button}
          underlayColor={'#328FE6'}
          onPress={() => this.onPressBack()}
          >
          <Text style={styles.label}>BACK</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default Gist;
