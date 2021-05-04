import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
    
    return (
        <View style={styles.footercss}>  
            <Text style={styles.textcss}> For all business enquiries, email raytonlin@gmail.com. </Text>
        </View>
    )
}

const styles = StyleSheet.create({
  footercss: {
    alignItems: "center",
    backgroundColor: "#282c34",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  textcss: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default Footer