import React from 'react';
import { StyleSheet, View } from 'react-native';
import Dashboard from './src/coba/Dashboard';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.ContainerMain}>
      <Dashboard />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  ContainerMain: {
    flex: 1
  }
});
