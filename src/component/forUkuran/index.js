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
        }
    }
    async componentDidMount() {
        try {
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
        } catch (error) {

        }


    }
    componentDidUpdate() {
        console.log("masuk update")
        if (this.state.diameter1 != 0 && this.state.diameter2 != 0 && this.state.diameter3 != 0 && this.state.diameter4 != 0 && this.state.diameter5 != 0) {
            console.log("masuk ahp")
            this.fungAHP();
        }

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

    fungAHP = () => {
        const jumlData = 5;
        const jumlKriteria = 3;
        let bSt = false;
        let matriksData = [];
        let kuadratmatriks =[];
        let totalkuadratMatriks = 0;
        let eigenVector = [];
        let eigenVectorSebelumnya = [];
        let data = [];
        let i, j;

        for (i = 0; i < jumlData; i++) {
            data[i] = [];
            for (j = 0; j < jumlKriteria; j++) {
                data[i][j] = null;
            }
        }
        for (i = 0; i < jumlKriteria; i++) {
            matriksData[i] = [];
            kuadratmatriks[i] = []
            for (j = 0; j < jumlKriteria; j++) {
                matriksData[i][j] = 0;
                kuadratmatriks[i][j] = 0;
            }
        }
        console.log(tanaman)

        data[0][0] = this.state.tinggi1;
        data[0][1] = this.state.diameter1;
        data[0][2] = this.state.Umur;
        data[1][0] = this.state.tinggi2;
        data[1][1] = this.state.diameter2;
        data[1][2] = this.state.Umur;
        data[2][0] = this.state.tinggi3;
        data[2][1] = this.state.diameter3;
        data[2][2] = this.state.Umur;
        data[3][0] = this.state.tinggi4;
        data[3][1] = this.state.diameter4;
        data[3][2] = this.state.Umur;
        data[4][0] = this.state.tinggi5;
        data[4][1] = this.state.diameter5;
        data[4][2] = this.state.Umur;
        


        for (i = 0; i < jumlKriteria - 1; i++) {
            for (j = 0; j < jumlKriteria - 1; j++) {
                data[i][j]
            }
        }

        console.log(data);
        console.log("matriks perbandingan awal sebelum di input")
        console.log(matriksData);
        console.log("matriks kuadrat awal sebelum di input")
        console.log(kuadratmatriks);

        do{
            if(matriksData[0][0] == 0){
                matriksData[0][0] = 1;
                matriksData[0][1] = 0.33;
                matriksData[0][2] = 0.33;
                matriksData[1][0] = 3;
                matriksData[1][1] = 1;
                matriksData[1][2] = 0.5;
                matriksData[2][0] = 3;
                matriksData[2][1] = 2;
                matriksData[2][2] = 1;

            }else{
                matriksData[0][0] = kuadratmatriks[0][0];
                matriksData[0][1] = kuadratmatriks[0][1];
                matriksData[0][2] = kuadratmatriks[0][2];
                matriksData[1][0] = kuadratmatriks[1][0];
                matriksData[1][1] = kuadratmatriks[1][1];
                matriksData[1][2] = kuadratmatriks[1][2];
                matriksData[2][0] = kuadratmatriks[2][0];
                matriksData[2][1] = kuadratmatriks[2][1];
                matriksData[2][2] = kuadratmatriks[2][2];
            }

            for(i=0; i<=2; i++){
                for(j=0; j<=2; j++){
                    kuadratmatriks[i][j] = (matriksData[0][j] * matriksData[i][0]) + (matriksData[1][j] * matriksData[i][1]) + (matriksData[2][j] * matriksData[i][2]);
                    totalkuadratMatriks += kuadratmatriks[i][j];
                }
            }
            eigenVector[0] = (kuadratmatriks[0][0] + kuadratmatriks[0][1] + kuadratmatriks[0][2]) / totalkuadratMatriks
            eigenVector[1] = (kuadratmatriks[1][0] + kuadratmatriks[1][1] + kuadratmatriks[1][2]) / totalkuadratMatriks
            eigenVector[2] = (kuadratmatriks[2][0] + kuadratmatriks[2][1] + kuadratmatriks[2][2]) / totalkuadratMatriks

            if(eigenVectorSebelumnya[0]===eigenVector[0] && eigenVectorSebelumnya[1]===eigenVector[1] && eigenVectorSebelumnya[2]===eigenVector[2]){
                bSt = true
            }else{
                eigenVectorSebelumnya[0] = eigenVector[0]
                eigenVectorSebelumnya[1] = eigenVector[1]
                eigenVectorSebelumnya[2] = eigenVector[2]
            }
        }while(bSt != false);
        console.log("matriks perbandingan awal sesudah di input")
        console.log(matriksData);
        console.log("matriks kuadrat awal sesudah di input")
        console.log(kuadratmatriks);
        console.log("Nilai Eigen");
        console.log(eigenVector)

        const maksUmur = 50;
        const maksDiameter = 28;
        const maksTinggi = 20;

        let ahp = [];
        let stat = [];

        for(i=0; i<=jumlData-1; i++){
            ahp[i] = (data[i][0] / maksTinggi * eigenVector[0]) + (data[i][1] / maksDiameter) * eigenVector[1] + (data[i][2] / maksUmur) * eigenVector[2]
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

        const tanaman = [{ahp : ahp[0], nama : "Tanaman 1"}, {ahp : ahp[1], nama : "Tanaman 2" }, {ahp : ahp[2], nama : "Tanaman 3"}, {ahp : ahp[3], nama : "Tanaman 4"}, {ahp : ahp[4], nama : "Tanaman 5"}];
        tanaman.sort((a,b) => b.ahp - a.ahp);

        console.log(tanaman)

        // console.log("Hasil Akhir")
        // console.log("Tanaman 1" && ahp[0])
        // console.log("Tanaman 2" && ahp[1])
        // console.log("Tanaman 3" && ahp[2])
        // console.log("Tanaman 2" && ahp[3])
        // console.log("Tanaman 3" && ahp[4])

        // console.log("Kesimpulan Akhir")
        // console.log("Tanaman 1" && stat[0])
        // console.log("Tanaman 2" && stat[1])
        // console.log("Tanaman 3" && stat[2])
        // console.log("Tanaman 2" && stat[3])
        // console.log("Tanaman 3" && stat[4])
    }
    render() {
        return (
            <SafeAreaView>
                <View style={styles.kotak}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', marginHorizontal: moderateScale(30) }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Tanaman 1</Text>
                            <Text>Diameter : {this.state.diameter1}</Text>
                            <Text>Tinggi : {this.state.tinggi1}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginHorizontal: moderateScale(30) }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Tanaman 2</Text>
                            <Text>Diameter : {this.state.diameter2}</Text>
                            <Text>Tinggi : {this.state.tinggi2}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: moderateScale(30) }}>
                        <View style={{ flexDirection: 'column', marginHorizontal: moderateScale(30) }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Tanaman 3</Text>
                            <Text>Diameter : {this.state.diameter3}</Text>
                            <Text>Tinggi : {this.state.tinggi3}</Text>
                        </View>
                        <View style={{ flexDirection: 'column', marginHorizontal: moderateScale(30) }}>
                            <Text style={{ fontWeight: 'bold' }}>Data Tanaman 4</Text>
                            <Text>Diameter : {this.state.diameter4}</Text>
                            <Text>Tinggi : {this.state.tinggi4}</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', alignItems: 'flex-start' }}>Data Tanaman 5</Text>
                        <Text>Diameter : {this.state.diameter5}</Text>
                        <Text>Tinggi : {this.state.tinggi5}</Text>
                    </View>

                </View>
                <View style={{ alignItems: 'center', marginTop: moderateScale(100) }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Rahmat Setiawan - 118140097</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    kotak: {
        marginTop: moderateScale(30),
        backgroundColor: '#DEF1DF',
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