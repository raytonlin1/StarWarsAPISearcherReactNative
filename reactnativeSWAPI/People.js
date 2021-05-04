import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function People(props) {
    const [name, setName] = useState("")
    const [height, setHeight] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setHeight(data.height)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <View style={{textAlign: 'center'}}>
            <Text style={styles.texthead}> You are currently looking at {props.apiurl}</Text>
            <Text style={styles.reg}>The current id is {curid}.</Text>
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{name}</Text> {name != null ? 'is the name.' : "There is no name at this id."}</Text> 
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{height}</Text> {height != null ? 'is their height.' : "There is no height at this id."}</Text> 
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

export default People