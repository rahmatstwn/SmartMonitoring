import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import ForPH from '../component/forPH'

const HalPH = () => {
  return (
    <SafeAreaView style={{alignItems:'center', marginVertical:moderateScale(150), marginHorizontal:moderateScale(15)}}>
      <Text>Kondisi PH Air Hidroponik</Text>
      <ForPH/>
    </SafeAreaView>
  )
}

export default HalPH

const styles = StyleSheet.create({})