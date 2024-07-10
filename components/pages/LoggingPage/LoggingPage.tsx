import { View,Text, StyleSheet, Image,TouchableOpacity , Alert } from 'react-native'
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

    <View>
    <TouchableOpacity
        style={style.buttonWrapper}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={style.buttonText}>Sign in free</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={style.buttonGoogleWrapper}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={style.buttonTextGoogle}>Continue with phone number</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonGoogleWrapper}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={style.buttonTextGoogle}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.buttonGoogleWrapper}
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      >
        <Text style={style.buttonTextGoogle}>Continue with Facebook</Text>
      </TouchableOpacity>

      
      </View>

      <Text style={[style.baseText, style.loginText]}>
        <Text style={style.innerText}>Login</Text>
      </Text>
      
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
        height: 46,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 25,
      },
      buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
      },

      buttonGoogleWrapper:{
        width: 340,
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 25,
        borderColor: 'white',  
        borderWidth: 2,

      },
      buttonTextGoogle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
      loginText: {
        marginTop: 30, 
      },
      
  
  })

