import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.headercss}>
            <Text style={styles.textcss}> Star Wars API Searcher by Rayton Lin</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  headercss: {
    alignItems: "center",
    backgroundColor: "#282c34",
    minHeight: 100,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textcss: {
    color: 'white',
    fontWeight: 'bold',
  }
});

export default Header