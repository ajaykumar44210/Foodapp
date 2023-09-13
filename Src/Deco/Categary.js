import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { colores } from '../globle/style';
const Categary = () => {
  return (

    <View style={styles.continue}>


      <Text style={styles.head}>Categary</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={styles.dec}>
          <View style={styles.flex}>
            <MaterialCommunityIcons name="food-outline" size={30} color="black" />
            <Text style={styles.text}>Buger</Text>
          </View>

          <View style={styles.flex}>
            <FontAwesome5 name="pizza-slice" size={24} color="black" />
            <Text style={styles.text}>Pizza</Text>
          </View>

          <View style={styles.flex}>
            <MaterialCommunityIcons name="noodles" size={24} color="black" />
            <Text style={styles.text}>Noodles</Text>
          </View>
          <View style={styles.flex}>
            <Entypo name="cake" size={24} color="black" />
            <Text style={styles.text}>cake</Text>
          </View>

          <View style={styles.flex}>
          <MaterialIcons name="free-breakfast" size={24} color="black" />
            <Text style={styles.text}>Tea</Text>
          </View> 
           
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  continue: {
    backgroundColor: colores.col1,
    width: "90%",
    elevation: 10,
    borderRadius: 10
  },
  head: {
    color: colores.text1,
    fontSize: 23,
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: colores.text1

  },

  flex: {
    backgroundColor: colores.col1,
    padding: 10,
    elevation: 20,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row'
  },
  dec: {
    flexDirection: 'row'
  },
  text: {
    padding: 5
  }
})

export default Categary