import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Search</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Text style={styles.browseText}>Browse All</Text>
      
      <View style={styles.colorContainer}>
        <View style={[styles.colorDiv, styles.div1]}>
          <Text style={styles.divText}>Pop</Text>
        </View>
        <View style={[styles.colorDiv, styles.div2]}>
          <Text style={styles.divText}>Rock</Text>
        </View>
        <View style={[styles.colorDiv, styles.div3]}>
          <Text style={styles.divText}>Hip-Hop</Text>
        </View>
        <View style={[styles.colorDiv, styles.div4]}>
          <Text style={styles.divText}>Jazz</Text>
        </View>
        <View style={[styles.colorDiv, styles.div5]}>
          <Text style={styles.divText}>Classical</Text>
        </View>
        <View style={[styles.colorDiv, styles.div6]}>
          <Text style={styles.divText}>Electronic</Text>
        </View>
        <View style={[styles.colorDiv, styles.div7]}>
          <Text style={styles.divText}>Country</Text>
        </View>
        <View style={[styles.colorDiv, styles.div8]}>
          <Text style={styles.divText}>Reggae</Text>
        </View>
      </View>

      <View style={styles.bottomIcons}>
        <Ionicons name="home" size={24} color="white" style={styles.icon} />
        <Ionicons name="search" size={24} color="white" style={styles.icon} />
        <Ionicons name="library" size={24} color="white" style={styles.icon} />
        <Ionicons name="musical-notes" size={24} color="white" style={styles.icon} />
      </View>
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
    fontSize: 30,
    position: 'absolute',
    top: 20,
    right: 80,
  },
  searchContainer: {
    position: 'absolute',
    top: 70,
    width: '96%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  browseText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 26,
    position: 'absolute',
    top: 140,
    right: 40,
  },
  colorContainer: {
    position: 'absolute',
    top: 200, 
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  colorDiv: {
    width: '45%',
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  div1: {
    backgroundColor: 'lightblue',
  },
  div2: {
    backgroundColor: 'lightgreen',
  },
  div3: {
    backgroundColor: 'green',
  },
  div4: {
    backgroundColor: 'purple',
  },
  div5: {
    backgroundColor: 'pink',
  },
  div6: {
    backgroundColor: 'darkblue',
  },
  div7: {
    backgroundColor: 'red',
  },
  div8: {
    backgroundColor: 'blue',
  },
  divText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 10,
    right: 50,
    left: 10,
  },
  bottomIcons: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  icon: {
    marginRight: 20,
  },
});
