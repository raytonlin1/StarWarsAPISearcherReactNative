import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

function Films(props) {
    const [title, setTitle] = useState("")
    const [episodeId, setEpisodeId] = useState("")
    const [curid, setcurid] = useState(props.curid)
    const reRender = async () => {
        setcurid(props.curid)
        fetch(props.apiurl)
        .then(response => response.json())
        .then(data => {
            setTitle(data.title)
            setEpisodeId(data.episode_id)})
    }
    useEffect(() => {
        reRender()
    }, [props])
    return (
        <View style={{textAlign: 'center'}}>
            <Text style={styles.texthead}> You are currently looking at {props.apiurl}</Text>
            <Text style={styles.reg}>The current id is {curid}.</Text>
            <Text> <Text style={{fontWeight: 'bold'}}>{title}</Text> {title != null ? 'is the title.' : "There is no title at this id."}</Text>
            <Text> <Text style={{fontWeight: 'bold'}}>{episodeId}</Text> {episodeId != null ? 'is the episode id.' : "There is no episode id at this id."}</Text>
        </View>
    )
}

export default Films