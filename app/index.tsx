import { View , StyleSheet} from 'react-native'
import React from 'react'
import SearchPage from './(tabs)/SearchPage';
import LoginPage2 from './LoginPage2';
// import LoadigPage from '@/components/pages/LoadingPage/LoadingPage';
// import LoggingPage from '@/components/pages/LoggingPage/LoggingPage';
// import SearchPage from '@/components/pages/SearchPage/SearchPage';
// import HomePage from '@/components/pages/HomePage/HomePage';
// import ArtistPage from '@/app/ArtistPage';
// import LoginPage2 from '@/components/pages/LoginPage2/LoginPage2';


export default function index() {
  return (
    <View style= {styles.container}>
      <LoginPage2/>
      {/* <SearchPage/> */}
      {/* <LoadigPage/> */}
      {/* <LoggingPage/> */}
     
      {/* <HomePage/> */}
      {/* <ArtistPage/> */}
      {/* <LoginPage2/> */}
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
