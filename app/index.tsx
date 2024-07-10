import { View , StyleSheet} from 'react-native'
import React from 'react'
import LoadigPage from '@/components/pages/LoadingPage/LoadingPage';
import LoggingPage from '@/components/pages/LoggingPage/LoggingPage';
import SearchPage from '@/components/pages/SearchPage/SearchPage';


export default function index() {
  return (
    <View style= {styles.container}>
      {/* <LoadigPage/> */}
      {/* <LoggingPage/> */}
      <SearchPage/>
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
