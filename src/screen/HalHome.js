import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import ForHome from '../component/forHome'
import { moderateScale } from 'react-native-size-matters'


const Home = () => {
  return (
    <SafeAreaView style={{backgroundColor:'#eeebe3'}}>
      <ForHome />
    </SafeAreaView>
  )
}

export default Home
