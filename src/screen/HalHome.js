import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import ForHome from '../component/forHome'
import { moderateScale } from 'react-native-size-matters'


const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#eeebe3'}}>
      <ForHome />
      <View style={{alignItems:'center', marginTop:moderateScale(320)}}>
            <Text style={{fontWeight:'bold', fontSize:15}}>Rahmat Setiawan - 118140097</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home
