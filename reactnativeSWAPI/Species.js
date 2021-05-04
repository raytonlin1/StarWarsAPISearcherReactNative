import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Species(props) {
    const [name, setName] = useState("")
    const [classification, setClassification] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setClassification(data.classification)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <View style={{textAlign: 'center'}}>
            <Text style={styles.texthead}> You are currently looking at {props.apiurl}</Text>
            <Text style={styles.reg}>The current id is {curid}.</Text>
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{name}</Text> {name != null ? 'is the name.' : "There is no name at this id."}</Text> 
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{classification}</Text> {classification != null ? 'is the classification.' : "There is no classification at this id."}</Text> 
        </View>
    )
}

const styles = StyleSheet.create({
  texthead: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  reg: {
    fontSize: 10,
  }
});

export default Species