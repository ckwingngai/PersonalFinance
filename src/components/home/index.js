import React, { Component } from 'react';
import _ from 'underscore';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput
} from 'react-native';
import Button from 'react-native-button';
import TimerMixin from 'react-timer-mixin';
import PushController from '../shared/PushController';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {bank_name: "Loading..."}
      ]),
      fx_data: {}
    };
  }

  _handlePress() {
    data = this.getData().then(function(err, res) {
      if (err) {
        console.log(err);
      }
    });

  }

  getData() {
    return fetch('https://fierce-citadel-40673.herokuapp.com/')
      .then((response) => response.json())
      .then((responseJson) => {
        var filtered_data = [];
        responseJson.forex_list.forEach(function(item) {
          if (item.tt_buy !== "-") {
            item.color = "black";
            filtered_data.push(item);
          }
        });
        var sorted_data = _.sortBy(filtered_data, 'tt_buy');
        var list = [{
          bank_name: "銀行",
          tt_buy: "電匯買入",
          color: "blue"
        }];
        list = list.concat(sorted_data);
        console.log(list);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({dataSource: ds.cloneWithRows(list)});
        // this._data = this._data.concat(responseJson);
        // this.setState({
        //   ds: this.state.ds.cloneWithRows(this._data)
        // });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    // return fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.xchange%20where%20pair%20in%20(%22JPYHKD%22)%20%7C%20tail(count%3D1)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({fx_data: responseJson.query.results.rate});
    //     return responseJson.query.results.rate;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getData();
    this.timer = TimerMixin.setInterval(() => {
      console.log('I do not leak!');
      this.getData();
    }, 60000);
  }

  componentWillUnmount() {
    TimerMixin.clearTimeout(this.timer);
  }

  handleAppStateChange(appState) {
    if (appState == 'background') {
      PushNotification.localNotificationSchedule({
        message: "My Notification Message", // (required)
        date: new Date(Date.now() + (5 * 1000)) // in 5 secs
      });
    }
  }

  _renderRow(rowData) {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Text style={{flex: .5, color: rowData.color}}>{rowData.bank_name}</Text><Text style={{flex: .5, color: rowData.color}}>{rowData.tt_buy}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <PushController/>
        <View>
          <TextInput
            style={{height: 40, borderWidth: 1, flex: .5}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            style={{fontSize: 20, flex: .5}}
            styleDisabled={{color: 'red'}}
            onPress={() => this._handlePress()}>
            Set
          </Button>
        </View>

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
        />
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
          onPress={() => this._handlePress()}>
          Refresh
        </Button>
      </View>
    );
  }
}

module.exports = Home;
