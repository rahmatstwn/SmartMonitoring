import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import ForSuhu from '../component/forSuhu'

const HalSuhu = () => {
  return (
    <SafeAreaView style={{alignItems:'center', marginVertical:moderateScale(150), marginHorizontal:moderateScale(15)}}>
      <Text>Kondisi Ruangan Hidroponik</Text>
      <ForSuhu/>
    </SafeAreaView>
  )
}

export default HalSuhu

const styles = StyleSheet.create({})