import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Homehead from './Homehead'
import Categary from './Categary'
import Offerslider from './Offerslider'
import { AntDesign } from '@expo/vector-icons';
import { colores } from '../globle/style'

export default function Firstpage() {
  return (
    <View style={styles.conten}>

      <StatusBar/>
      <Homehead/>
      <View style={styles.serchbox}>
      <AntDesign name="search1" size={24} color="#ff4242" />
      <TextInput placeholder='Seacrh'  style={styles.input}/>
      </View>
      <Categary/> 
      <Offerslider/>
    </View>
  )
}

const styles = StyleSheet.create({
   conten:{
    flex:1,
    backgroundColor:colores.col1,
    alignItems:'center',
    width:'100%'
   } ,
   serchbox:{
    flexDirection:'row',
    width:'90%',
    borderRadius:15,
    backgroundColor:colores.col1,
    alignItems:'center',
    padding:10,
    margin:20,
    elevation:20
   },
   input:{
    width:'90%'
    ,fontSize:15,
   }

})