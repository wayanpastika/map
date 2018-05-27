import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,TextInput,TouchableOpacity
} from 'react-native';


export default class register extends Component {
     static navigationOptions= ({navigation}) =>({
      title: 'Input Data',  
      headerRight:  
      <TouchableOpacity
      onPress={() => navigation.navigate('Db')}
      style={{margin:10,backgroundColor:'orange',padding:10}}>
      <Text style={{color:'#ffffff'}}>Home</Text>
      </TouchableOpacity>
    
  });   
      
  constructor(props){
    super(props)
    this.state={
      Jenis:'',
      Nama:'', 
      Merek:'', 
      Harga:'', 
      Stok:''      
    }
  }
  
  inputData = () =>{
    //alert('ok'); // version 0.48
    
    const {Jenis} = this.state;
    const {Nama} = this.state;
    const {Merek} = this.state;
    const {Harga} = this.state;
    const {Stok} = this.state;
    
    
    fetch('http://api.ifreethink.net/pastike/insert.php', {
      method: 'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        jenis: Jenis,
        nama: Nama,
        merek: Merek,
        harga: Harga,
        stok: Stok,
      })
      
    })
    .then((response) => response.json())
      .then((responseJson) =>{
        alert(responseJson);
      })
      .catch((error)=>{
        console.error(error);
      });
    
  }
  
  render() {
    return (
  <View style={styles.container}>
        
  
    <TextInput
    placeholder="Jenis"
    style={{width:250,margin:10, borderColor:"#333", 
    borderWidth:1}} 
    underlineColorAndroid="transparent"
    onChangeText= {Jenis => this.setState({Jenis})}
    
    />
    
    <TextInput
    placeholder="Nama"
    style={{width:250,margin:10, borderColor:"#333", 
    borderWidth:1}} 
    underlineColorAndroid="transparent"
    onChangeText= {Nama => this.setState({Nama})}
    />
    
    <TextInput
    placeholder="Merek"
    style={{width:250,margin:10, borderColor:"#333", 
    borderWidth:1}} 
    underlineColorAndroid="transparent"
    onChangeText= {Merek => this.setState({Merek})}
    />
    <TextInput
    placeholder="Harga"
    style={{width:250,margin:10, borderColor:"#333", 
    borderWidth:1}} 
    underlineColorAndroid="transparent"
    onChangeText= {Harga => this.setState({Harga})}
    />
    <TextInput
    placeholder="Stok"
    style={{width:250,margin:10, borderColor:"#333", 
    borderWidth:1}} 
    underlineColorAndroid="transparent"
    onChangeText= {Stok => this.setState({Stok})}
    />
    <TouchableOpacity
    onPress={this.inputData}
    style={{width:250,padding:10, backgroundColor:'magenta',
    alignItems:'center'}}>
    <Text style={{color:'#fff'}}>Kirim</Text>
    </TouchableOpacity>
    
    
     </View>
  
   );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});