import { View,Text, StyleSheet, Image, Button, Alert } from 'react-native'
import React from 'react'

export default function LoggingPage() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#000000'
    }}
  >



   <Image
      style={style.tinyLogo}
      source={{
        uri: 'https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg?format=1500w',
      }}
    />

<Text style={style.baseText}>
      <Text style={style.innerText}> Millions of songs</Text>
      
    </Text>
    <Text style={style.baseText}>
      <Text style={style.innerText}>Free on Spotify.</Text>
      
    </Text>

    <View style={style.buttonWrapper}>
        <Button
          title="Press me"
          color="green"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
  </View>
  )
}

const style = StyleSheet.create({
    nametext:{
      fontSize:32,
      color:"red"
    },
    input :{
      height: 60,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    tinyLogo:{
      width: 150,
      height: 150,
      margin:20
    },

    baseText: {
        fontWeight: 'bold',
        fontSize:30
      },
      innerText: {
        color: 'white',
      },

      buttonWrapper: {
        width: 340, 
        height:100,
        marginTop: 20,  
      },
      
  
  })

