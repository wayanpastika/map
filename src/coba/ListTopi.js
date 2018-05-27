import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView, TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class MyApp extends Component {
  static navigationOptions= ({ navigation }) => ({
    title: 'List Topi',
  });

  componentDidMount(){
    this.getType()
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds,
    };
  }

  getType(){
    fetch('http://api.ifreethink.net/Z1515051077/getapi.php?q=topi')
    .then((response) => response.json())
    .then((response) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response)
        });
    });
  }

  renderRow(os) {
    const { navigate } = this.props.navigation;
     return (
    <View style={styles.Box2}>
     <View style={styles.Box3}>
        <Text style={styles.Texthead2}>  Nama   : {os.nama}</Text>
        <Text style={styles.Texthead2}>  Merek  : {os.merek}</Text>
        <Text style={styles.Texthead2}>  Harga  : {os.harga}</Text>
        <Text style={styles.Texthead2}>  Stok   : {os.stok}</Text>
        <TouchableOpacity
          onPress={() => navigate('Lo')}
          style={styles.btn1}>
          <Text style={styles.btnText}>Beli</Text>
        </TouchableOpacity>

     </View>
     </View>
     );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
      />
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'column'
  },
  Box2: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Box3: {
    flex: 1,
    backgroundColor: 'grey',
    borderWidth: 2,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: 'grey',
    borderRadius: 5,
    marginTop: 20,
    width: '70%'
  },
  Texthead: {
    fontSize: 23,
    color: 'white'
  },
  Texthead2: {
    fontSize: 20,
    textAlign: 'left',
    color: 'white'
  },
  img: {
    height: 230,
    width: 440,
    alignItems: 'center'
  },
  btn1: {
		width: '100%',
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 20,
    backgroundColor: '#424242',
    alignItems: 'center'
	},
  btn2: {
		margin: 10,
    backgroundColor: 'orange',
     padding: 10
	},
  btnText: {
		color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
	},
  btnText2: {
    color: '#ffffff'
	},
});
