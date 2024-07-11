import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function LoginPage2() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.squarespace-cdn.com/content/v1/6042529f1fe38f0b0503be5c/1616072527567-YHOUT1L2JW6ROBTME3SQ/spotify-playlist.jpeg?format=1500w',
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
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
    marginBottom: 20
  },
  input: {
    width: 300,
    height: 50,
    margin: 12,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    color: 'white'
  },
  loginButton: {
    width: 300,
    height: 50,
    marginTop: 20,
    backgroundColor: '#1DB954',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
