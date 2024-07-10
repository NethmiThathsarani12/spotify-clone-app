import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function ArtistPage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/images/SGimages.jpg')}
        />
        <Text style={styles.imageText}>28.5K monthly listener</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={28} color="white" style={styles.moreIcon} />
          <Ionicons name="play-circle" size={52} color="green" style={styles.playIcon} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000',
    },
    imageContainer: {
      position: 'absolute',
      top: 0,
      alignItems: 'center', 
    },
    tinyLogo: {
      width: 360,
      height: 300,
    },
    imageText: {
      color: 'darkgray',
      fontSize: 16,
      marginTop: 20,
      marginRight: 180,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 360,
      position: 'absolute',
      left: 20, 
    },
    followButton: {
      backgroundColor: 'black', 
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      borderColor: 'white',  
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    moreIcon: {
      marginLeft: 10, 
    },
    playIcon: {
      marginLeft: 120, 
    },
})
