import React from 'react'
import { StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';
import styles from './style'

const Navbar = (props) => {
    return (
        <View style={styles.navbarcss}>
                <TouchableOpacity style={styles.button}
                      onPress={() => Linking.openURL('https://raytonlin1.github.io')}>
                  <Text> My Website </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                      onPress={() => Linking.openURL('https://swapi.dev/api')}>
                  <Text> Star Wars API </Text>
                </TouchableOpacity>
        </View>
    )
}


export default Navbar