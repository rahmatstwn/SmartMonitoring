import { StyleSheet, Text, View,Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { moderateScale } from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ForHome = () => {
    const navigation = useNavigation();


    return (
        <View style = {{alignItems:'center'}}>
            <Text style={styles.Judul}>Silahkan Pilih Menu Monitoring</Text>
            <View style={{alignItems:'center', marginTop: moderateScale(25)}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('HalSuhu')}>
                        <FontAwesome5 name={'temperature-high'} size={60} color={'black'} />
                        <Text>Kondisi Ruangan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('HalPH')} >
                        <FontAwesome5 name={'flask'} size={60} color={'black'}/>
                        <Text>pH Air</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('HalTDS')}>
                        <FontAwesome5 name={'water'} size={60} color={'black'}/>
                        <Text>Kadar Nutrisi Air</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate('HalUkuran')}>
                        <FontAwesome5 name={'seedling'} size={60} color={'black'}/>
                        <Text>Ukuran Tanaman</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForHome

const styles = StyleSheet.create({
    TombolRekom: {
        marginHorizontal: moderateScale(12),
        marginTop: moderateScale(16),
        marginBottom: moderateScale(24),
        width: moderateScale(150),
    },
    Gambar: {
        height: moderateScale(180),
        borderRadius: moderateScale(10),
    },
    Judul: {
        fontSize: moderateScale(20),
        fontWeight: 'bold',
        marginTop: moderateScale(20),
        marginHorizontal: moderateScale(45),
        color:'#000000'
    },
    menu:{
        backgroundColor : '#DEF1DF',
        marginHorizontal: moderateScale(16),
        borderRadius: 8,
        width: 120,
        height: 120,
        marginTop: 32,
        marginBottom: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})