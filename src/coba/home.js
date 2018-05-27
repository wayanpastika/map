import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, navigation } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Layout extends React.Component {
  static navigationOptions= ({ navigation }) =>({
   title: 'Dashboard',
   headerRight:
   <TouchableOpacity
   onPress={() => navigation.navigate('Put')}
   style={styles.btn2}>
   <Text style={styles.btnText2}>Tambah Data</Text>
   </TouchableOpacity>

});
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerMain}>
        <View style={styles.Box2}>
          <Image style={styles.img} source={require('../img/toko.jpg')}/>
        </View>
        <View style={styles.Box3}>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>                     
            </View>
            <View style={styles.Box3b}>
              <TouchableOpacity
                onPress={() => navigate('Lc')}
                style={styles.btn1}>
                <Image style={styles.img2} source={require('../img/celana.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <TouchableOpacity
                onPress={() => navigate('Ls')}
                style={styles.btn1}>
                <Image style={styles.img3} source={require('../img/sepatu.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.Box3b}>
              <TouchableOpacity
                onPress={() => navigate('Lt')}
                style={styles.btn1}>
                <Image style={styles.img2} source={require('../img/tas.png')}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Box3a}>
            <View style={styles.Box3b}>
              <TouchableOpacity
                onPress={() => navigate('Lo')}
                style={styles.btn1}>
                <Image style={styles.img2} source={require('../img/topi.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.Box3b}>
              <TouchableOpacity
                onPress={() => navigate('Lj')}
                style={styles.btn1}>
                <Image style={styles.img2} source={require('../img/jaket.png')}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.Box4}>
          <Text style={styles.Texthead}>Undiksha 2018</Text>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#E0E0E0',
    flex: 1,
    flexDirection: 'column'
  },
  Box1: {
    flex: 1.5,
    backgroundColor: '#212121',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Box2: {
    flex: 4,
    backgroundColor: 'grey',
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  Box3: {
    flex: 7,
    backgroundColor: '#E0E0E0',
    marginTop: 20,
    marginBottom: 20,

  },
  Box3a: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    marginRight: 20,
    marginLeft: 20,
  },
  Box3b: {
    flex: 1,
    backgroundColor: '#424242',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  Box3c: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#424242',
  },
  Box4: {
    flex: 1,
    backgroundColor: '#212121',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Texthead: {
    fontSize: 23,
    color: 'white'
  },
  Texthead2: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },  
  btn1: {
		width: '100%',
    height: '100%',
    padding: 10,
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
  img: {
    height: 230,
    width: 440,
    alignItems: 'center'
  },
  img2: {
    height: 105,
    width: 105,
    alignItems: 'center'
  },
  img3: {
    height: 75,
    width: 115,
    alignItems: 'center'
  },
  back: {
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
});
