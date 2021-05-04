import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header'
import Navbar from './Navbar'
import UseAPI from './useAPI'
import Footer from './Footer'
function App() {
  return (
    <View style={styles.app}>
      <Header />
      <Navbar />
      <UseAPI />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'black',
    alignItems: "stretch",
    backgroundColor: 'beige',
    flexDirection: 'column',
    flex: 1,
  }
});

export default App;