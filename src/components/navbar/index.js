import React, { Component } from 'react';
import { Text, Navigator, View } from 'react-native';

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <Navigator
          initialRoute={{ title: 'Awesome Scene', index: 0 }}
          renderScene={(route, navigator) =>
            <Text>Hello {route.title}!</Text>
          }
          style={{padding: 100}}
        />
      </View>

    );
  }
}

module.exports = Navbar;
