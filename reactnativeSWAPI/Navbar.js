import React from 'react'
import { StyleSheet, Text, View, Linking } from 'react-native';
const Navbar = (props) => {
    return (
        <View style={styles.navbarcss}>
                <Text style={styles.textcss}
                      onPress={() => Linking.openURL('https://raytonlin1.github.io')}>
                  My Website
                </Text>
                <Text style={styles.textcss}
                      onPress={() => Linking.openURL('https://swapi.dev/api')}>
                  Star Wars API
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  navbarcss: {
    backgroundColor: "orangered",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textcss: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 8,
    margin: 1,
    borderColor: '#282c34',
    borderWidth: 3,
  }
});

export default Navbar