import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

const Header = (props) => {
    return (
        <View style={styles.headercss}>
            <Text style={styles.textheader}> Star Wars API Searcher by Rayton Lin</Text>
        </View>
    )
}

export default Header