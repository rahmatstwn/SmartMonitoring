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
            Umur: 30, //#hari
            data:[2,2],
            matriks:[],
            kuadratmatriks:[],
            eigenVector:[],
            eigenVectorSebelumnya:[],
            bSt : 0,
            totalkuadratMatriks:0.0
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
        this.state.data[0,0]=this.state.tinggi1;
        this.state.data[0,1]=this.state.diameter1;
        this.state.data[0,2]=this.state.Umur;
        this.state.data[1,0]=this.state.tinggi2;
        this.state.data[1,1]=this.state.diameter2;
        this.state.data[1,2]=this.state.Umur;
        this.state.data[2,0]=this.state.tinggi3;
        this.state.data[2,1]=this.state.diameter3;
        this.state.data[2,2]=this.state.Umur;

        const jumlData = 3;
        const jumlKriteria = 3;

        this.state.matriks[(jumlKriteria-1),(jumlKriteria-1)];
        this.state.kuadratmatriks[(jumlKriteria-1),(jumlKriteria-1)];
        this.state.eigenVector[jumlKriteria-1];
        this.state.eigenVectorSebelumnya[jumlKriteria-1];

        while(this.state.bSt != 0){
            if(this.state.matriks[0,0] = 0){
                this.state.matriks[0,0]=1;
                this.state.matriks[0,1]=0.33;
                this.state.matriks[0,2]=0.33;
                this.state.matriks[1,0]=3;
                this.state.matriks[1,1]=1;
                this.state.matriks[1,2]=0.5;
                this.state.matriks[2,0]=3;
                this.state.matriks[2,1]=2;
                this.state.matriks[2,2]=1;

            }else{
                this.state.matriks[0,0]=this.kuadratmatriks[0,0];
                this.state.matriks[0,1]=this.kuadratmatriks[0,1];
                this.state.matriks[0,2]=this.kuadratmatriks[0,2];
                this.state.matriks[1,0]=this.kuadratmatriks[1,0];
                this.state.matriks[1,1]=this.kuadratmatriks[1,1];
                this.state.matriks[1,2]=this.kuadratmatriks[1,2];
                this.state.matriks[2,0]=this.kuadratmatriks[2,0];
                this.state.matriks[2,1]=this.kuadratmatriks[2,1];
                this.state.matriks[2,2]=this.kuadratmatriks[2,2];
            }
            var i;
            var j;
            for(i=0; i<=2; i++){
                for(j=0; j<=2; j++){
                    this.state.kuadratmatriks[i,j] = this.state.matriks[0,j] * this.state.matriks[i,0] + this.state.matriks[1,j] * this.state.matriks[i,1] + this.state.matriks[2,j] * this.state.matriks[i,2];
                    this.state.totalkuadratMatriks += this.state.kuadratmatriks[i,j];
                }
            }
            this.state.eigenVector[0] = (this.state.kuadratmatriks[0,0] + this.state.kuadratmatriks[0,1] + this.state.kuadratmatriks[0,2]) / this.state.totalkuadratMatriks
            this.state.eigenVector[1] = (this.state.kuadratmatriks[1,0] + this.state.kuadratmatriks[1,1] + this.state.kuadratmatriks[1,2]) / this.state.totalkuadratMatriks
            this.state.eigenVector[2] = (this.state.kuadratmatriks[2,0] + this.state.kuadratmatriks[2,1] + this.state.kuadratmatriks[2,2]) / this.state.totalkuadratMatriks
        
            if(this.state.eigenVectorSebelumnya[0] == this.state.eigenVector[0] && this.state.eigenVectorSebelumnya[1] == this.state.eigenVector[1] && this.state.eigenVectorSebelumnya[2] == this.state.eigenVector[2]){
                this.state.bSt = 1;
            }else{
                this.state.eigenVectorSebelumnya[0] = this.state.eigenVector[0];
                this.state.eigenVectorSebelumnya[1] = this.state.eigenVector[1];
                this.state.eigenVectorSebelumnya[2] = this.state.eigenVector[2];
            }
        }
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