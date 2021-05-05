import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

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
  )
}

export default App;