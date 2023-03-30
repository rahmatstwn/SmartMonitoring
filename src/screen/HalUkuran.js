import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React from 'react'
import ForUkuran from '../component/forUkuran'

const HalUkuran = () => {
  return (
    <SafeAreaView style={{alignItems:'center', marginVertical:moderateScale(50), marginHorizontal:moderateScale(15)}}>
      <Text style={{color:'black',fontWeight:'bold'}}>Ukuran Tanaman Selada Hijau Hidroponik</Text>
      <ForUkuran/>
    </SafeAreaView>
  )
}

export default HalUkuran

const styles = StyleSheet.create({})