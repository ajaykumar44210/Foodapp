import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import style, { colores, hR80, title } from '../globle/style'
import { Feather, Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Login=({navigation})=> {
  const [email, setemail] = useState(false);
  const [Password, setpassword] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  return (
    <View style={styles.he}>

      <Text style={styles.he2}>Sign In</Text>
      <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={email === true ? colores.text1 : colores.text2} />
        <TextInput style={styles.inp} placeholder='Email'
          onFocus={() => {
            setemail(true)
            setpassword(false)
            setpassword(false)
          }} />
      </View>

      <View style={styles.inputout}>
        <Feather name="lock" size={24} color={Password === true ?
          colores.text1 : colores.text2} />

        <TextInput style={styles.inp} placeholder='Password'
          onFocus={() => {
            setemail(false)
            setpassword(true)
          }}
          secureTextEntry={showpassword === false ? true : false}
        />

        <Octicons name={showpassword == false ? "eye-closed" : "eye"}
          size={25} color="black" onPress={() => setShowpassword(!showpassword)}
        />


      </View>
      <TouchableOpacity style={style.btn1}>
        <Text style={{ color: colores.col1, fontSize: title.btntxt, fontWeight: "bold", textAlign: 'center' }}
        onPress={() => navigation.navigate('first')} >Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In with</Text>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
          <View style={styles.gfiicon}>
            <FontAwesome name="google" size={24} color="#EA4335" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.gfiicon}>
            <FontAwesome name="facebook" size={24} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hR80}></View>
      <Text>Don't have an account?
        <Text style={{ color: colores.text1 }} onPress={() => navigation.navigate('sign')}> Sign Up</Text></Text>

    </View>
  )
};

const styles = StyleSheet.create({
  he: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  }, he2: {
    fontSize: title.title1,
    color: colores.text1,
    textAlign: 'center',
    marginVertical: 10,


  },
  inputout: {
    flexDirection: 'row',
    width: '80%',

    marginVertical: 10,
    backgroundColor: colores.col1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,

    elevation: 20,


  }
  , forgot: {
    color: colores.text2,
    marginTop: 20,
    marginBottom: 10,
  }, or: {
    color: colores.text1,
    marginVertical: 10,
    fontWeight: 'bold'

  }
  ,
  gftxt: {
    color: colores.text2,
    marginVertical: 10,
    fontSize: 20
  },
   gfiicon: {
    backgroundColor: 'white',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  },
   inp: { 
    width:220
  }
})
export default Login