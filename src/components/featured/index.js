import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} from 'react-native';

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class Featured extends Component {
    render() {
        return (
  	    <View style={styles.container}>
	        <Text style={styles.description}>
        	  Featured Tab
	        </Text>
	    </View>
        );
    }
}

module.exports = Featured;
