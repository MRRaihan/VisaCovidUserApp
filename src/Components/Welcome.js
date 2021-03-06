import React, {useState, useEffect} from 'react';
import logo from '../../assets/images/logo.png';
import background from '../../assets/images/Group162.png';
import AsyncStorage from '@react-native-community/async-storage';


import {View, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';

const Welcome = ({navigation}) => {
    const [phone, setPhone] = useState("");
    const [loginStatus, setLoginStatus] = useState("");

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            if (value !=null)
            {
                setPhone(value)
            }else {
                setPhone(null);
            }
        });

        AsyncStorage.getItem('loginStatus').then(value =>{
            if (value !=null)
            {
                setLoginStatus(value)
            }else {
                setLoginStatus("0");
            }
        });

    })

    const onRedirect = () =>{
        if (loginStatus == "1")
        {
            return "Home";
        }else {
            return "Login";
        }
    }

     return (
         <View>
             <View style={styles.container}>
                 <TouchableOpacity onPress={() =>{
                     let redirect = onRedirect();
                     navigation.navigate(redirect)
                 }}>
                     <Image style={styles.logo}
                            source={logo}
                     />

                 </TouchableOpacity>
             </View>
         </View>
     );
}

const styles = StyleSheet.create({
   container: {
       display:"flex",
       height:'100%',
       justifyContent:"center",
       alignItems: 'center',
   },
   logo: {
       height:  250,
       width: 200,
   },
})
export default Welcome;
