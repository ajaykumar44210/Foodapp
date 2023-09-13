import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colores } from '../globle/style'

export default function Offerslider() {
  return (
    <View style={styles.hed}>
       
      <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
        dotColor={colores.text2} activeDotColor={colores.text1}>  
        
       <View style={styles.slider}> 
       <Image source={require('../Deco/noodels.jpg')}  style={styles.img}/>
       </View>

       <View style={styles.slider}> 
       <Image source={require('../Deco/roll.png')}  style={styles.img}/>
       </View>

       <View style={styles.slider}> 
       <Image source={require('../Deco/pizza.png')}  style={styles.img}/>
       </View>
       
      </Swiper>
    </View >
  )
}

const styles = StyleSheet.create({
  hed:{
    width:'100%',
    height:200,
    backgroundColor:'white',
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    marginVertical:10
  },
  slider:{
    width:'100%',
    height:200,
  
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:'100%',
    height:'100%',
    borderRadius:20,
  }
  ,slider:{

  }
})