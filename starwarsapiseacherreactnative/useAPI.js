import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Picker, Button } from 'react-native';
import styles from './style'
import Films from './Films'
import People from './People'
import Planets from './Planets'
import Species from './Species'
import Starships from './Starships'
import Vehicles from './Vehicles'
function UseAPI() {
    const [field, setfield] = useState("films")
    const [newfield, setnewfield] = useState("films")
    const [curid, setcurid] = useState(1)
    const [apiurl, setapiurl] = useState('https://swapi.dev/api/films/1/')
    function increment() 
    {
        let newid = curid + 1
        setcurid(newid)
        setapiurl('https://swapi.dev/api/'+field+'/'+newid+'/')
    }
    function decrement() 
    {
        let newid = curid - 1
        setcurid(newid)
        setapiurl('https://swapi.dev/api/'+field+'/'+newid+'/')
    }
    function setField() 
    {
        setfield(newfield)
        setapiurl('https://swapi.dev/api/'+newfield+'/'+curid+'/')
    }
    return (
      
        <View style={styles.useAPI}>
            <Text>Pick which part of the API to go through:</Text>
            <Picker selectedValue={newfield} onValueChange={(itemValue, itemIndex) => setnewfield(itemValue)}>
                <Picker.Item value="films" label="Films"/>
                <Picker.Item value="people" label="People"/>
                <Picker.Item value="planets" label="Planets"/>
                <Picker.Item value="species" label="Species"/>
                <Picker.Item value="starships" label="Starships"/>
                <Picker.Item value="vehicles" label="Vehicles"/>
            </Picker>
            <Button title='Submit' onPress={setField}/>
            {field === 'films' ? <Films curid= {curid} apiurl= {apiurl}/> : null}
            {field === 'people' ? <People curid= {curid} apiurl= {apiurl}/> : null}
            {field === 'planets' ? <Planets curid= {curid} apiurl= {apiurl}/> : null}
            {field === 'species' ? <Species curid= {curid} apiurl= {apiurl}/> : null}
            {field === 'starships' ? <Starships curid= {curid} apiurl= {apiurl}/> : null}
            {field === 'vehicles' ? <Vehicles curid= {curid} apiurl= {apiurl}/> : null}
            <TouchableOpacity style={styles.smallbutton} onPress={increment}><Text> Increment the id </Text></TouchableOpacity>
            <TouchableOpacity style={styles.smallbutton} onPress={decrement}><Text> Decrement the id </Text></TouchableOpacity>
        </View>
    )
}

export default UseAPI