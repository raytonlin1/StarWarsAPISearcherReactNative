import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Planets(props) {
    const [name, setName] = useState("")
    const [rotationPeriod, setRotationPeriod] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setRotationPeriod(data.rotation_period)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <View style={{textAlign: 'center'}}>
            <Text style={styles.texthead}> You are currently looking at {props.apiurl}</Text>
            <Text style={styles.reg}>The current id is {curid}.</Text>
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{name}</Text> {name != null ? 'is the name.' : "There is no name at this id."}</Text> 
            <Text style={styles.reg}> <Text style={{fontWeight: 'bold'}}>{rotationPeriod}</Text> {rotationPeriod != null ? 'is the rotation period.' : "There is no rotation period at this id."}</Text> 
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

export default Planets