import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

function Starships(props) {
    const [name, setName] = useState("")
    const [model, setModel] = useState("")
    const [curid, setcurid] = useState(props.curid)
    function reRender() {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setName(data.name)
            setModel(data.model)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <View style={{textAlign: 'center'}}>
            <Text style={styles.texthead}> You are currently looking at {props.apiurl}</Text>
            <Text style={styles.reg}>The current id is {curid}.</Text>
            <Text> <Text style={{fontWeight: 'bold'}}>{name}</Text> {name != null ? 'is the name.' : "There is no name at this id."}</Text>
            <Text> <Text style={{fontWeight: 'bold'}}>{model}</Text> {model != null ? 'is the model.' : "There is no model at this id."}</Text>
        </View>
    )
}


export default Starships