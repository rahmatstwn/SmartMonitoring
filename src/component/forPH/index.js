import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React, { Component } from 'react'
import database from '@react-native-firebase/database'

export default class ForPH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PH: 0
        }
    }
    componentDidMount() {
        database()
        .ref('/Hasil_Pembacaan/pH')
        .on('value', snapshot => {
        
        this.setState({
            PH : snapshot.val()
            })
        });
    }
  render() {
    return (
        <SafeAreaView>
            <View style = {styles.kotak}>
                <Text style={{color:'black'}}>{this.state.PH}</Text>
            </View>
            <View style={{alignItems:'center', marginTop:moderateScale(300)}}>
                <Text style={{fontWeight:'bold', fontSize:15, color:'black'}}>Rahmat Setiawan - 118140097</Text>
            </View>
        </SafeAreaView>
      )
  }
}
const styles = StyleSheet.create({
    kotak:{
        marginTop:moderateScale(30),
        backgroundColor : '#DEF1DF',
        marginHorizontal: moderateScale(16),
        borderRadius: 8,
        width: 350,
        height: 200,
        marginTop: 32,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})