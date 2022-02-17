import React, {useState, useEffect, useRef} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import {View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import appUrl from "../RestApi/AppUrl";



const MobileOTP= ({navigation, route}) =>{

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(0);
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");


    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });

        AsyncStorage.getItem('password').then(value =>{
            setPassword(value)
        });

        AsyncStorage.getItem('userId').then(value =>{
            setUserId(value)
        });

    }, [])




    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.titleStyle}>OTP Code is sent to <Text style={styles.titleNumberStyle}>{phone}</Text> number</Text>
                </View>
                <OTPInputView
                    style={styles.containerInput}
                    pinCount={6}
                    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    // onCodeChanged = {code => { this.setState({code})}}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled = {(code) => {
                        setOtp(code)
                    }}
                />
            </View>

            <View style={styles.bottomView}>
                <View style={styles.btnResend} >
                    <Text style={styles.textResend}>
                        Didn't receive any code?
                    </Text>
                </View>
                <TouchableOpacity onPress={() => {
                    const url = appUrl.OtpResend;
                    const config = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({phone: phone})
                    };
                    fetch(url,config)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.status == "1")
                        {
                            Alert.alert(responseJson.message);
                            navigation.navigate("Mobile OTP")
                        }else if(responseJson.status == "0"){
                            Alert.alert(responseJson.message);
                        }
                    })
                    .catch((error) => {
                        //Alert.alert("Failed to registration 2");
                    });
                }}>
                    <View style={styles.btnChangeNumber} >
                        <Text style={styles.textChange} >Send again</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.SubmitBtn}>
                <TouchableOpacity onPress={()=>{
                    const url = appUrl.OtpCheck;
                    const config = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ phone:phone, otp:otp})
                    };

                    fetch(url,config)
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.status == "1")
                        {
                            Alert.alert(responseJson.message);
                            AsyncStorage.setItem('phone', responseJson.phone);
                            AsyncStorage.setItem('userId', responseJson.userId);
                            AsyncStorage.setItem('loginStatus', responseJson.loginStatus);
                            navigation.navigate("Home")
                        }else if(responseJson.status == "0"){
                            Alert.alert(responseJson.message);
                        }

                    })
                    .catch((error) => {
                        //Alert.alert("Failed to registration 2");
                    });
                    //Alert.alert(url);
                    //props.navigation.navigate("Home")
                }}  style={styles.otpButton}
                >
                    <Text style={styles.otpButtonView}>Verify & Continue</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop:'50%'
    },
    titleStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0f0f0f"

    },
    titleNumberStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: "#0814bf",

    },
    bottomView:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
        paddingTop: 20,
        alignItems: 'center'
    },
    textChange:{
        color: '#234BB7',
        alignItems: 'center',
        fontSize: 17

    },
    SubmitBtn:{
        textAlign:"center",
        marginLeft:"15%"
    },
    btnResend: {
        width: 200,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnChangeNumber:{
        width: 150,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textResend: {
        alignItems: 'center',
        fontSize: 15,
        color: "#0f0f0f"
    },
    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:"70%",
        marginTop:"5%",

    },
    otpButton:{
        backgroundColor: "#2a24c9",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        height: 40,
        width: "70%",
        borderRadius: 10,
        margin: 20,
    },
    otpButtonView:{
        color: "white",
        fontSize: 16
    },

    borderStyleHighLighted: {
        borderColor: "#10a547",
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color:"#000"
    },

    underlineStyleHighLighted: {
        borderColor: "#0c6fe1",
    },
});

export default MobileOTP;