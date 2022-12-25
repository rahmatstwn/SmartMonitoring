import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React, { Component } from 'react'
import database from '@react-native-firebase/database'
// import Tinggi1 from './Tinggi1'
// import Diameter2 from './Diameter2'
// import Tinggi2 from './Tinggi2'
// import Diameter3 from './Diameter3'
// import Diameter4 from './Diameter4'
// import Diameter5 from './Diameter5'
// import Tinggi3 from './Tinggi3'
// import Tinggi4 from './Tinggi4'
// import Tinggi5 from './Tinggi5'
import AHP from 'ahp'

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
        this.Tinggi1();
        this.Tinggi2();
        this.Tinggi3();
        this.Tinggi4();
        this.Tinggi5();
        this.Diameter1();
        this.Diameter2();
        this.Diameter3();
        this.Diameter4();
        this.Diameter5();
        // database()
        // .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
        // .on('value', snapshot => {
        
        // this.setState({
        //     diameter1 : snapshot.val(),
        //     })
        // });
    }

    Tinggi1 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman1/Tinggi1')
        .on('value', snapshot => {
        
        this.setState({
            tinggi1: snapshot.val()
            })
        });
    }

    Tinggi2 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman2/Tinggi2')
        .on('value', snapshot => {
        
        this.setState({
            tinggi2: snapshot.val()
            })
        });
    }

    Tinggi3 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman3/Tinggi3')
        .on('value', snapshot => {
        
        this.setState({
            tinggi3: snapshot.val()
            })
        });
    }

    Tinggi4 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman4/Tinggi4')
        .on('value', snapshot => {
        
        this.setState({
            tinggi4: snapshot.val()
            })
        });
    }

    Tinggi5 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman5/Tinggi5')
        .on('value', snapshot => {
        
        this.setState({
            tinggi5: snapshot.val()
            })
        });
    }

    Diameter1 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
        .on('value', snapshot => {
        
        this.setState({
            diameter1: snapshot.val()
            })
        });
    }

    Diameter2 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman2/Diameter2')
        .on('value', snapshot => {
        
        this.setState({
            diameter2: snapshot.val()
            })
        });
    }

    Diameter3 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman3/Diameter3')
        .on('value', snapshot => {
        
        this.setState({
            diameter3: snapshot.val()
            })
        });
    }

    Diameter4 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman4/Diameter4')
        .on('value', snapshot => {
        
        this.setState({
            diameter4: snapshot.val()
            })
        });
    }

    Diameter5 =()=>{
        database()
        .ref('/Hasil_Pembacaan/Tanaman5/Diameter5')
        .on('value', snapshot => {
        
        this.setState({
            diameter5: snapshot.val()
            })
        });
    }

    fungAHP = () => {
        const ahpContext = new AHP();

        ahpContext.addItems(['Tanaman1', 'Tanaman2', 'Tanaman3']);

        ahpContext.addCriteria(['Tinggi', 'Diameter', 'Umur']);

        //rank criteria with rank scale
        ahpContext.rankCriteriaItem('Tinggi', [
            ['VendorB', 'VendorC', 1 / 2],
            ['VendorA', 'VendorC', 1 / 2],
            ['VendorA', 'VendorB', 1]
        ]);

        //rank criteria with rank scale
        ahpContext.rankCriteriaItem('Diameter', [
            ['VendorB', 'VendorC', 1],
            ['VendorA', 'VendorC', 5],
            ['VendorA', 'VendorB', 5]
        ]);

        //rank criteria with absolute rank scole
        ahpContext.setCriteriaItemRankByGivenScores('Umur', [10, 10, 1]);

        ahpContext.rankCriteria(
            [
                ['price', 'functionality', 3],
                ['price', 'UX', 3],
                ['functionality', 'UX', 1]
            ]
        );

const output = ahpContext.run();
console.log(output);
    }
  render() {
    return (
        <SafeAreaView>
            <View style = {styles.kotak}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 1</Text>
                        <Text>Diameter : {this.state.diameter1}</Text>
                        <Text>Tinggi : {this.state.tinggi1}</Text>
                    </View>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                    <Text style={{fontWeight:'bold'}}>Data Tanaman 2</Text>
                        <Text>Diameter : {this.state.diameter2}</Text>
                        <Text>Tinggi : {this.state.tinggi2}</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginVertical:moderateScale(30)}}>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 3</Text>
                        <Text>Diameter : {this.state.diameter3}</Text>
                        <Text>Tinggi : {this.state.tinggi3}</Text>
                    </View>
                    <View style={{flexDirection:'column', marginHorizontal:moderateScale(30)}}>
                        <Text style={{fontWeight:'bold'}}>Data Tanaman 4</Text>
                        <Text>Diameter : {this.state.diameter4}</Text>
                        <Text>Tinggi : {this.state.tinggi4}</Text>
                    </View>
                </View>
                <View>
                    <Text style={{fontWeight:'bold', alignItems:'flex-start'}}>Data Tanaman 5</Text>
                    <Text>Diameter : {this.state.diameter5}</Text>
                    <Text>Tinggi : {this.state.tinggi5}</Text>
                    
                </View>
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