import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import database from '@react-native-firebase/database';

export default class configDatabase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            suhu: 0,
            PH: 0,
            TDS: 0,
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
        }
    }
        async componentDidMount() {
            try {
                await this.Suhu();
                await this.PH();
                await this.TDS();
                await this.Tinggi1();
                await this.Tinggi2();
                await this.Tinggi3();
                await this.Tinggi4();
                await this.Tinggi5();
                await this.Diameter1();
                await this.Diameter2();
                await this.Diameter3();
                await this.Diameter4();
                await this.Diameter5();
            } 
                catch (error) {
            }
    
        }
        componentDidUpdate() {
            console.log("masuk update")
            if (this.state.diameter1 != 0 && this.state.diameter2 != 0 && this.state.diameter3 != 0 && this.state.diameter4 != 0 && this.state.diameter5 != 0) {
                console.log("data")
            }
    
        }
    
        async Suhu() {
    
            database()
                .ref('/Hasil_Pembacaan/Temperature')
                .on('value', snapshot => {
    
                    this.setState({
                        suhu: snapshot.val()
                    })
                });
        }
    
        async PH() {
    
            database()
                .ref('/Hasil_Pembacaan/pH')
                .on('value', snapshot => {
    
                    this.setState({
                        PH: snapshot.val()
                    })
                });
        }
    
        async TDS() {
    
            database()
                .ref('/Hasil_Pembacaan/TDS')
                .on('value', snapshot => {
    
                    this.setState({
                        TDS: snapshot.val()
                    })
                });
        }
    
        async Tinggi1() {
    
            database()
                .ref('/Hasil_Pembacaan/Tanaman1/Tinggi1')
                .on('value', snapshot => {
    
                    this.setState({
                        tinggi1: snapshot.val()
                    })
                });
        }
    
        async Tinggi2() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman2/Tinggi2')
                .on('value', snapshot => {
    
                    this.setState({
                        tinggi2: snapshot.val()
                    })
                });
        }
    
        async Tinggi3() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman3/Tinggi3')
                .on('value', snapshot => {
    
                    this.setState({
                        tinggi3: snapshot.val()
                    })
                });
        }
    
        async Tinggi4() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman4/Tinggi4')
                .on('value', snapshot => {
    
                    this.setState({
                        tinggi4: snapshot.val()
                    })
                });
        }
    
        async Tinggi5() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman5/Tinggi5')
                .on('value', snapshot => {
    
                    this.setState({
                        tinggi5: snapshot.val()
                    })
                });
        }
    
        async Diameter1() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman1/Diameter1')
                .on('value', snapshot => {
    
                    this.setState({
                        diameter1: snapshot.val()
                    })
                });
        }
    
        async Diameter2() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman2/Diameter2')
                .on('value', snapshot => {
    
                    this.setState({
                        diameter2: snapshot.val()
                    })
                });
        }
    
        async Diameter3() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman3/Diameter3')
                .on('value', snapshot => {
    
                    this.setState({
                        diameter3: snapshot.val()
                    })
                });
        }
    
        async Diameter4() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman4/Diameter4')
                .on('value', snapshot => {
    
                    this.setState({
                        diameter4: snapshot.val()
                    })
                });
        }
    
        async Diameter5() {
            database()
                .ref('/Hasil_Pembacaan/Tanaman5/Diameter5')
                .on('value', snapshot => {
    
                    this.setState({
                        diameter5: snapshot.val()
                    })
                });
        }
}