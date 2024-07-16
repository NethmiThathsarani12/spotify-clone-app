import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const songs = [
  {
    id: 1,
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    image: require('../../assets/images/Edimages.jpg')
  },
  {
    id: 2,
    title: 'Perfect',
    artist: 'Ed Sheeran',
    image: require('../../assets/images/Edimages.jpg')
  },
  {
    id: 3,
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    image: require('../../assets/images/Edimages.jpg')
  },
  {
    id: 4,
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    image: require('../../assets/images/Edimages.jpg')
  },
  {
    id: 5,
    title: 'Thinking Out Loud',
    artist: 'Ed Sheeran',
    image: require('../../assets/images/Edimages.jpg')
  }
  
]

export default function ArtistPage() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/images/Edimages.jpg')}
          // source={require('../../../assets/images/Edimages.jpg')}
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
      <Text style={styles.baseText}>Popular</Text>
      <ScrollView style={styles.scrollView}>
        {songs.map((song, index) => (
          <View key={song.id} style={styles.popularContainer}>
            <Text style={styles.rankText}>{index + 1}</Text>
            <Image
              style={styles.popularImage}
              source={song.image}
            />
            <View style={styles.textContainer}>
              <Text style={styles.songTitle}>{song.title}</Text>
              <Text style={styles.songArtist}>{song.artist}</Text>
            </View>
            <Ionicons name="ellipsis-vertical" size={24} color="white" style={styles.popularMoreIcon} />
          </View>
        ))}
      </ScrollView>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 0,
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
    marginTop: 14,
    marginRight: 140,
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
    marginLeft: 10,
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 22,
    marginTop: 20,
    marginLeft: 20,
  },
  popularContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  rankText: {
    color: 'white',
    fontSize: 20,
    marginRight: 10,
  },
  popularImage: {
    width: 60,
    height: 60,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  songTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    color: 'gray',
    fontSize: 16,
  },
  popularMoreIcon: {
    marginLeft: 10,
  },
 
  icons: {
    marginHorizontal: 20,
  },
})
