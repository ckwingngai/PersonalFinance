import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} from 'react-native';
import NavigationBar from 'react-native-navbar';

import Featured from '../featured/';
import Home from '../home/';

import styles from './styles';

class Layout extends Component {
  render() {
    var rightButtonConfig = {
      title: 'Next',
      handler: function onNext() {
        alert('hello!');
      }
    };

    var titleConfig = {
      title: 'Forex Rate Alert YO Man',
    };
    return (
      <View style={styles.container}>
        <NavigationBar title={titleConfig} />
        <Home />
      </View>
    );
  }
}

module.exports = Layout;
