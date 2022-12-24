import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React, { Component } from 'react'
import database from '@react-native-firebase/database'
import Tinggi1 from './Tinggi1'
import Diameter2 from './Diameter2'
import Tinggi2 from './Tinggi2'
import Diameter3 from './Diameter3'
import Diameter4 from './Diameter4'
import Diameter5 from './Diameter5'
import Tinggi3 from './Tinggi3'
import Tinggi4 from './Tinggi4'
import Tinggi5 from './Tinggi5'

export default class ForUkuran extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diameter1: 0,
            diameter2: 0,
            diameter3: 0,
            diameter4: 0,
            diameter5: 0,
            tinggi1: 0,
            tinggi2: 0,
            tinggi3: 0,
            tinggi4: 0,
            tinggi5: 0,
        }
    }
    componentDidMount() {
        database()
        .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
        .on('value', snapshot => {
        
        this.setState({
            diameter1 : snapshot.val(),
            })
        });
    }
  render() {
    return (
        <SafeAreaView>
            <View style = {styles.kotak}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 1</Text>
                        <Text>Diameter : {this.state.diameter1}</Text>
                        <Tinggi1/>
                    </View>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                    <Text style={{fontWeight:'bold'}}>Data Tanaman 2</Text>
                    <Diameter2/>
                    <Tinggi2/>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginVertical:moderateScale(30)}}>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 3</Text>
                        <Diameter3/>
                        <Tinggi3/>
                    </View>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 4</Text>
                        <Diameter4/>
                        <Tinggi4/>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:'bold', alignItems:'flex-start'}}>Data Tanaman 5</Text>
                    <Diameter5/>
                    <Tinggi5/>
                </View>
                {/* if({this.state.diameter1 >= 23} || {this.state.diameter2 >= 23} || {this.state.diameter3 >= 23} || {this.state.diameter4 >= 23} || {this.state.diameter5 >= 23}){
                    // <View style={{marginVertical:moderateScale(30)}}>
                        
                    // </View>
                } */}
                        {/* <Text style={{fontWeight:'bold'}}>Pesan : </Text> */}
                
            </View>
            <View style={{alignItems:'center', marginTop:moderateScale(100)}}>
                <Text style={{fontWeight:'bold', fontSize:15}}>Rahmat Setiawan - 118140097</Text>
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
        height: 400,
        marginTop: 32,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})