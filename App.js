import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, ListView} from 'react-native';
import _ from 'underscore';

export default class App extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    numbers: _.range(10)
  };
}

press(item) {
  this.setState({
    numbers: this.state.numbers.filter((curItem) => (item !== curItem))
  })
}

add(){
  this.setState({
    numbers: this.state.numbers.concat(this.state.numbers.length)
  })
}

remove(){
  var copyArr = this.state.numbers.slice()
  copyArr.splice(copyArr.length-1, 1)
  this.setState({
    numbers: copyArr
  })
}



render() {
  var dataSource = new ListView.DataSource({
    rowHasChanged: (r1, r2) => (r1 !== r2)
  })
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
    <TouchableOpacity onPress={this.add.bind(this)}>
    <Text style={{fontSize: 40, color: 'blue'}}>Add</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={this.remove.bind(this)}>
    <Text style={{fontSize: 40, color: 'red'}}>Remove</Text>
    </TouchableOpacity>
    <ListView
    renderRow = {(item) => (
      <View style = {{alignItems: 'center'}}>
      <TouchableOpacity onPress={this.press.bind(this, item)}>
      <Text> {item} </Text>
      </TouchableOpacity>
      </View>
    )}
    dataSource = {dataSource.cloneWithRows(this.state.numbers)}
    />
    </View>
  );
}
}
