import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

const Footer = (props) => {
    
    return (
        <View style={styles.footercss}>  
            <Text style={styles.textcss}> For all business enquiries, email raytonlin@gmail.com. </Text>
        </View>
    )
}

export default Footer