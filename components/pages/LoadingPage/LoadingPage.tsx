import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'


export default function LoggingPage() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg?format=1500w',
        }}
      />

      <Text style={styles.baseText}>
        <Text style={styles.innerText}> Millions of songs</Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.innerText}>Free on Spotify.</Text>
      </Text>

      <View>
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        >
          <Text style={styles.buttonText}>Sign in free</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonGoogleWrapper}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        >
          <Ionicons name="call" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonTextGoogle}>Continue with phone number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGoogleWrapper}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        >
          <FontAwesome name="google" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonTextGoogle}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGoogleWrapper}
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        >
          <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonTextGoogle}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles.baseText, styles.loginText]}>
        <Text style={styles.innerText}>Login</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#000000'
  },
  tinyLogo: {
    width: 150,
    height: 150,
    margin: 20
  },
  baseText: {
    fontWeight: 'bold',
    fontSize: 30
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
  buttonGoogleWrapper: {
    flexDirection: 'row',
    alignItems: 'center', 
    width: 340,
    height: 50,
    marginTop: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 25,
    borderColor: 'white',
    borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },
  buttonTextGoogle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 30,
  },
})

