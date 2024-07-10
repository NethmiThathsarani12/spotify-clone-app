import { View , StyleSheet} from 'react-native'
import React from 'react'
import LoadigPage from '@/components/pages/LoadingPage/LoadingPage';
import LoggingPage from '@/components/pages/LoggingPage/LoggingPage';
import SearchPage from '@/components/pages/SearchPage/SearchPage';
import HomePage from '@/components/pages/HomePage/HomePage';
import ArtistPage from '@/components/pages/ArtistPage/ArtistPage';


export default function index() {
  return (
    <View style= {styles.container}>
      {/* <LoadigPage/> */}
      {/* <LoggingPage/> */}
      {/* <SearchPage/> */}
      {/* <HomePage/> */}
      <ArtistPage/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
