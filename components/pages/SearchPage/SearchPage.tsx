import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function SearchPage() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Search</Text>
      <View style={styles.searchContainer}>
      <Ionicons name='search' size={20} color="#888" style={styles.searchIcon}/>
        <TextInput
          style={styles.input}
          placeholder="What do you want to listen to?"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={setSearchText}
        />
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
});
