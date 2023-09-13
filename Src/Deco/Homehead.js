import { View, Text, StyleSheet,   TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colores } from '../globle/style';
 
const Homehead = ({navigation}) => {
  return (

    <View style={styles.contener}>

      <EvilIcons name="navicon" size={30} color="#ff4242" />
      <View style={styles.cont2}>
        <Text style={{fontSize:20,color:'#ff4242'}}>Foodie</Text>
        <Ionicons name="fast-food" size={27} color="#ff4242" />
      </View> 
      <TouchableOpacity onPress={()=>navigation.navigate('user')}>
      <EvilIcons name="user" size={30} color="#ff4242" />
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  contener: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,

    alignItems: 'center',
    backgroundColor: colores.col1,
    elevation: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cont2:{
    alignItems:'center',
    flexDirection:'row'
  }
})

export default Homehead