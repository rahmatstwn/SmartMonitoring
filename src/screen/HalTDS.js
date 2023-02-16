import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import ForTDS from '../component/forTDS'

const HalTDS = () => {
  return (
    <SafeAreaView style={{alignItems:'center', marginVertical:moderateScale(150), marginHorizontal:moderateScale(15)}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Kadar Nutrisi Air Hidroponik</Text>
      <ForTDS/>
    </SafeAreaView>
  )
}

export default HalTDS

const styles = StyleSheet.create({})