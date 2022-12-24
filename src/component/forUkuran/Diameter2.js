import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React, { Component } from 'react'
import database from '@react-native-firebase/database'

export default class    Diameter2 extends Component {
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
        .ref('/Hasil_Pembacaan/Tanaman2/Diameter2')
        .on('value', snapshot => {
        
        this.setState({
            diameter2: snapshot.val()
            })
        });
    }
  render() {
    return (
        <SafeAreaView>
                <Text>Diameter : {this.state.diameter2}</Text>
                {/* <Text>Data Tanaman 2</Text>
                <Text>Diameter : {this.state.diameter2}</Text>
                <Text>Tinggi : {this.state.tinggi2}</Text> */}
        </SafeAreaView>
      )
  }
}