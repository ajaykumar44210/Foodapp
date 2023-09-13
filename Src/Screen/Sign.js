import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import style, { colores, hR80, title } from '../globle/style'
import { Feather, Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Sign = ({ navigation }) => {
  const [email, setemail] = useState(false);
  const [phone, setphone] = useState(false);
  const [Password, setpassword] = useState(false);
  const [Name, setname] = useState(false);
  const [showpassword, setShowpassword] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [CPassword, setcpassword] = useState(false);
  return (
    <View style={styles.he}>

      <Text style={styles.he2}>Sign Up</Text>

      <View style={styles.inputout}>
        <AntDesign name="user" size={24} color={Name === true ? colores.text1 : colores.text2} />
        <TextInput style={styles.inp} placeholder='Full Name'
          onFocus={() => {
            setname(true)
            setemail(false)
            setpassword(false)
            setphone(false)
            setcpassword(false)


          }} />
      </View>
      <View style={styles.inputout}>
        <MaterialIcons name="email" size={24} color={email === true ? colores.text1 : colores.text2} />
        <TextInput style={styles.inp} placeholder='Email'
          onFocus={() => {
            setemail(true)
            setpassword(false)
            setphone(false)
            setcpassword(false)
            setname(false)

          }} />
      </View>
      <View style={styles.inputout}>
        <Feather name="phone" size={24} color={phone === true ? colores.text1 : colores.text2} />
        <TextInput style={styles.inp} placeholder='Phone Number'
          onFocus={() => {
            setemail(false)
            setphone(true)
            setcpassword(false)
            setpassword(false)
            setname(false)

          }} />
      </View>

      <View style={styles.inputout}>
        <Feather name="lock" size={24} color={Password === true ?
          colores.text1 : colores.text2} />

        <TextInput style={styles.inp} placeholder='Password'
          onFocus={() => {
            setphone(false)
            setemail(false)
            setpassword(true)
            setcpassword(false)
            setname(false)

          }}
          secureTextEntry={showpassword === false ? true : false}
        />

        <Octicons name={showpassword == false ? "eye-closed" : "eye"}
          size={25} color="black" onPress={() => setShowpassword(!showpassword)}
        />


      </View>
      <View style={styles.inputout}>
        <Feather name="lock" size={24} color={CPassword === true ?
          colores.text1 : colores.text2} />

        <TextInput style={styles.inp} placeholder='ConfirmPassword'
          onFocus={() => {
            setemail(false)
            setcpassword(true)
            setpassword(false)
            setphone(false)
            setname(false)
          }}
          secureTextEntry={showcpassword === false ? true : false}
        />

        <Octicons name={showcpassword == false ? "eye-closed" : "eye"}
          size={25} color="black" onPress={() => setShowcpassword(!showcpassword)}
        />


      </View>
      <TouchableOpacity style={style.btn1}>
        <Text style={{ color: colores.col1, fontSize: title.btntxt, fontWeight: "bold", textAlign: 'center' }}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In with</Text>

      <View style={{ flexDirection: 'row' }}>
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
      <Text>Already have an account?
        <Text style={{ color: colores.text1 }} onPress={() => navigation.navigate('login')}> Login</Text></Text>

    </View>
  )
};

const styles = StyleSheet.create({
  he: {
    marginTop: 70,                                                                                           
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  he2: {
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
  ,forgot: {
    color: colores.text2,
    marginTop: 20,
    marginBottom: 10,
  }
  ,or:{
    color: colores.text1,
    marginVertical: 10,
    fontWeight: 'bold'
  }
  ,gftxt: {
    color: colores.text2,
    marginVertical: 10,
    fontSize: 20
  }
  ,gfiicon: {
    backgroundColor: 'white',
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    elevation: 20,
  }
  ,inp: {
    width: 220
  }
})
export default Sign