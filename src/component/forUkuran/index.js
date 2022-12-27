import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import React, { Component } from 'react'
import database from '@react-native-firebase/database'
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
            Umur: 30, //#hari
            // data:[2,2],
            // matriks:[],
            // kuadratmatriks:[],
            // eigenVector:[],
            // eigenVectorSebelumnya:[],
            // bSt : 0,
            // totalkuadratMatriks:0.0,
            // ahp:[],
            // stat:[]
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
        this.fungAHP();
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
        let data = [];
        data[0,0] = this.state.tinggi1;
        data[0,1] = this.state.diameter1;
        data[0,2] = this.state.Umur;
        data[1,0] = this.state.tinggi2;
        data[1,1] = this.state.diameter2;
        data[1,2] = this.state.Umur;
        data[2,0] = this.state.tinggi3;
        data[2,1] = this.state.diameter3;
        data[2,2] = this.state.Umur;
     

        const jumlData = 3;
        const jumlKriteria = 3;
        let bSt = false;
        let matriks = [];
        let kuadratmatriks =[];
        let totalkuadratMatriks
        let eigenVector = [];
        let eigenVectorSebelumnya = [];

        while(bSt != false) {
            if(matriks[0,0] = 0){
                matriks[0,0] = 1;
                matriks[0,1] = 0.33;
                matriks[0,2] = 0.33;
                matriks[1,0] = 3;
                matriks[1,1] = 1;
                matriks[1,2] = 0.5;
                matriks[2,0] = 3;
                matriks[2,1] = 2;
                matriks[2,2] = 1;

            }else{
                matriks[0,0] = kuadratmatriks[0,0];
                matriks[0,1] = kuadratmatriks[0,1];
                matriks[0,2] = kuadratmatriks[0,2];
                matriks[1,0] = kuadratmatriks[1,0];
                matriks[1,1] = kuadratmatriks[1,1];
                matriks[1,2] = kuadratmatriks[1,2];
                matriks[2,0] = kuadratmatriks[2,0];
                matriks[2,1] = kuadratmatriks[2,1];
                matriks[2,2] = kuadratmatriks[2,2];
            }
            let i,j;
            for(i=0; i<=2; i++){
                for(j=0; j<=2; j++){
                    kuadratmatriks[i, j] = (matriks[0, j] * matriks[i, 0]) + (matriks[1, j] * matriks[i, 1]) + (matriks[2, j] * matriks[i, 2])
                    totalkuadratMatriks += kuadratmatriks[i, j]
                }
            }
            eigenVector[0] = (kuadratmatriks[0, 0] + kuadratmatriks[0, 1] + kuadratmatriks[0, 2]) / totalkuadratMatriks
            eigenVector[1] = (kuadratmatriks[1, 0] + kuadratmatriks[1, 1] + kuadratmatriks[1, 2]) / totalkuadratMatriks
            eigenVector[2] = (kuadratmatriks[2, 0] + kuadratmatriks[2, 1] + kuadratmatriks[2, 2]) / totalkuadratMatriks

            if(eigenVectorSebelumnya[0]===eigenVector[0] && eigenVectorSebelumnya[1]===eigenVector[1] && eigenVectorSebelumnya[2]===eigenVector[2]){
                bSt = true
            }else{
                eigenVectorSebelumnya[0] = eigenVector[0]
                eigenVectorSebelumnya[1] = eigenVector[1]
                eigenVectorSebelumnya[2] = eigenVector[2]
            }
        }
        
        const maksUmur = 50;
        const maksDiameter = 30;
        const maksTinggi = 20;

        let ahp = [];
        let stat = [];

        for(i=0; i<=jumlData-1; i++){
            ahp[i] = (data[i, 0] / maksTinggi * eigenVector[0]) + (data[i, 1] / maksDiameter) * eigenVector[1] + (data[i, 2] / maksUmur) * eigenVector[2]
            if(ahp[i] < 0.6){
                stat[i] = "Kurang";
            }else if(ahp[i] < 0.7){
                stat[i] = "Cukup"
            }else if(ahp[i] < 0.8){
                stat[i] = "Baik"
            }else{
                stat[i] = "Sangat Baik"
            }
        }
        console.log("Hasil Akhir")
        console.log("Tanaman 1" && ahp[0])
        console.log("Tanaman 2" && ahp[1])
        console.log("Tanaman 3" && ahp[2])

        console.log("Kesimpulan Akhir")
        console.log("Tanaman 1" && stat[0])
        console.log("Tanaman 2" && stat[1])
        console.log("Tanaman 3" && stat[2])

        

        
        // const ahpContext = new AHP();

        // ahpContext.addItems(['Tanaman1', 'Tanaman2', 'Tanaman3']);

        // ahpContext.addCriteria(['Tinggi', 'Diameter', 'Umur']);

        // //rank criteria with rank scale
        // ahpContext.rankCriteriaItem('Tinggi', [
        //     ['Tanaman2', 'Tanaman3', 1.665],//this.state.tinggi1 * 0.111],
        //     ['Tanaman1', 'Tanaman3', 1.887],//this.state.tinggi2 * 0.111],
        //     ['Tanaman1', 'Tanaman2', 1.887]//this.state.tinggi3 * 0.111]
        // ]);

        // //rank criteria with rank scale
        // ahpContext.rankCriteriaItem('Diameter', [
        //     ['Tanaman2', 'Tanaman3', 5.994],//this.state.diameter1 * 0.333],
        //     ['Tanaman1', 'Tanaman3', 6.66],//this.state.diameter2 * 0.333],
        //     ['Tanaman1', 'Tanaman2', 8.325]//this.state.diameter3 * 0.333]
        // ]);

        // //rank criteria with absolute rank scole
        // ahpContext.setCriteriaItemRankByGivenScores('Umur', [16.68, 16.68, 16.68]);

        // ahpContext.rankCriteria(
        //     [
        //         ['Tinggi', 'Diameter', 5],
        //         ['Tinggi', 'Umur', 3],
        //         ['Diameter', 'Umur', 1]
        //     ]
        // );

        // const output = ahpContext.run();
        // console.log(output);
        
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