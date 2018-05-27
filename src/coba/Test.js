import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, ActivityIndicator, TouchableOpacity, alert } from 'react-native';
export default class App extends Component<{}>
{
    constructor()
    {
        super();
        this.state = {
          Jenis: '',
          Nama: '',
          Merek: '',
          Harga: '',
          Stok: '',
          ActivityIndicator_Loading: false,

        }
    }

    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
            fetch('http://api.ifreethink.net/pastike/insert.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  jenis: this.state.Jenis,
                  nama: this.state.Nama,
                  merek: this.state.Merek,
                  harga: this.state.Harga,
                  stok: this.state.Stok

                })

            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
    }

    render()
    {
        return(
          <View style={styles.containerMain}>
            <View style={styles.Box1}>
            </View>
            <View style={styles.Box2}>
            <Text style={styles.Texthead}>Masukan Data</Text>
            <TextInput
              placeholder="Masukan Jenis Pakaian"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ Jenis: TextInputText })} />

            <TextInput
              placeholder="Masukan Nama"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ Nama: TextInputText })} />

            <TextInput
              placeholder="Masukan Merek"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText = {(TextInputText) => this.setState({ Merek: TextInputText })} />

            <TextInput
              placeholder="Masukan Harga"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText = {(TextInputText) => this.setState({ Harga: TextInputText })} />

            <TextInput
              placeholder="Masukan Stok"
              style={styles.TextInputStyleClass}
              underlineColorAndroid="transparent"
              onChangeText={(TextInputText) => this.setState({ Stok: TextInputText })} />

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={this.Insert_Data_Into_MySQL}>
                <Text style={styles.TextStyle}>Kirim</Text>
            </TouchableOpacity>
            {
            this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#009688' size='large'style={styles.ActivityIndicatorStyle} /> : null
            }
            </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#212121',
      flex: 1,
    },
    Box1: {
      flex: 1,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center'
    },
    Box2: {
      flex: 3,
      backgroundColor: '#212121',
      alignItems: 'center',
      justifyContent: 'center'
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      backgroundColor: 'rgb(240,240,240)',
      borderWidth: 2,
      paddingTop: 15,
      paddingBottom: 15,
      borderColor: 'grey',
      borderRadius: 5,
      marginBottom: 10,
      marginTop: 10,
      width: '80%'
    },
    TouchableOpacityStyle:
   {
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: 'red',
      marginTop: 20,
      width: '80%'
    },
    TextStyle:
    {
       color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    ActivityIndicatorStyle:
    {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  },
  Texthead: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white'

  }
});
