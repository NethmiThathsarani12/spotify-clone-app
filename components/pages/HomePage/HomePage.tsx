import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Made for you</Text>
      <View style={styles.iconsContainer}>
        <Ionicons name="notifications" size={24} color="white" style={styles.icon} />
        <Ionicons name="settings" size={24} color="white" style={styles.icon} />
        <Ionicons name="time" size={24} color="white" style={styles.icon} />
      </View>
      
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../../../assets/images/Edimages.jpg')}
        />
        <Text style={styles.imageText}>Ed Sheeran, Katy perry{'\n'}Pitbull and more</Text>
        
      </View>

      <View style={styles.imageContainer2}>
        <Image
          style={styles.tinyLogo2}
          source={require('../../../assets/images/JBimages.jpg')}
        />
        <Text style={styles.imageText}>Catch the Letest Playlist{'\n'}made jus for you....</Text>
      </View>
      <Text style={styles.baseText2}>Trending now</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  baseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    position: 'absolute',
    top: 20,
    right: 40,
  },
  baseText2:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    position: 'absolute',
    top: 320,
    right: 10,

  },
  iconsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 24,
    right: -150,
  },
  icon: {
    marginRight: 10,
  },
  imageContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    alignItems: 'center', 
  },
  tinyLogo: {
    width: 160,
    height: 160,
  },
  imageContainer2: {
    position: 'absolute',
    top: 80,
    left: 20,
    alignItems: 'center', 
  },
  tinyLogo2: {
    width: 160,
    height: 160,
  },
  imageText: {
    color: 'white',
    fontSize: 16,
    marginTop: 10, 
  },
});
