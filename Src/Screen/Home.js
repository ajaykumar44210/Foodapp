import React,{useState,useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { colores, hR80 } from '../globle/style'
import firestore from '@react-native-firebase/firestore';


const Home = ({navigation}) => {
   const [foodData, setfoodData] = useState([]); 

 
console.log(foodData); 

    return (
        <View style={style.cont}>
            <Text style={style.title}>Welcome to Foodie</Text>
            <View style={style.logoout}> 
            <Image source={require('../Screen/delvery.png')} style={style.logo}/>
            </View>
            <View style={hR80} />
            <Text style={style.text}>Find the best food around you at
                lower price</Text>
            <View style={hR80} />

            <View style={style.btnout}>
                <TouchableOpacity onPress={() => navigation.navigate('sign')}>
                    <Text style={style.btn}>Sign UP</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <Text style={style.btn}>Login</Text>
                </TouchableOpacity>
            </View>


        </View>

    )
}
const style = StyleSheet.create({
    cont: {
        flex: 1,

        backgroundColor: '#ff4242',
        width: 400,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 50,
        color: colores.col1,
        textAlign: 'center',
        marginRight: 30,
        fontWeight: '200'
    },
    logoout: {
        width: "80%",
        height: "30%",
        alignItems: 'center'
    },
    logo: {
        marginRight: 100,
        width: '100%',
        height: '100%'
    },
    text: {
        width: '70%',
        fontSize: 17,
        color: colores.col1,
        textAlign: 'center'
        , marginRight: 40
    },
    btnout: {
        flexDirection: 'row'
    }
    , btn: {
        fontSize: 20,
        color: colores.text1,
        textAlign:'center',
        marginVertical:30, 
        marginRight:40,
        fontWeight:'700',
        backgroundColor:'#fff',
        borderRadius:10,
        padding:10,
        paddingHorizontal:20,



    }

})
export default Home;
