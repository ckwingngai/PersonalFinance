'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  contents: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  row: {
    flex: 1,
    color: "red"
  },
  bank_name: {
    flex: .5,
  },
  tt_buy: {
    flex: .5,
  },
  title: {
    color: "#0000ff"
  },
});
