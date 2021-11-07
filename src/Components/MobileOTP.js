import React, {useState, useEffect, useRef} from 'react';
import {TextInput} from "react-native-gesture-handler";
import {View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import appUrl from "../RestApi/AppUrl";



const MobileOTP= ({navigation, route}) =>{
          const lengthInput = 6;
          const defaultCountdown = 30;
          let clockCall= null;
          let textInput = useRef(null);
          const [internalVal, setInternalVal] = useState("");
          const [countdown, setCountdown] = useState(defaultCountdown);
          const [enableResend, setEnableResend] = useState(false);
          const [phone, setPhone] = useState("");
          useEffect(() => {
                    clockCall = setInterval(() => {
                              decrementClock();
                    }, 1000)
                    return () =>{
                              clearInterval(clockCall);
                    }
          })

        useEffect(()=>{
            AsyncStorage.getItem('phone').then(value =>{
                setPhone(value)
            });
        })
          const decrementClock = () =>{
                    if(countdown === 0){
                              setEnableResend(true)
                              setCountdown(0)
                              clearInterval(clockCall)
                    }else{
                              setCountdown( countdown -1)
                    }
          }

          const onChangeText = (val) =>{
                    setInternalVal(val);
                    // if(val.length === lengthInput){
                    //           navigation.navigate('Home');
                    // }
          }

          const onChangeNumber = (val) =>{
                    setInterval(val);
          }
          const onResendOTP = () =>{
                    if(enableResend){
                              setCountdown(defaultCountdown)
                              setEnableResend(false)
                              clearInterval(clockCall)
                              clockCall = setInterval(() => {
                                        decrementClock(0)
                              }, 1000)
                    }
          }

          useEffect(() =>{
                    textInput.focus();
          }, [])
          return (
            <ScrollView>
          <View style={styles.container}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={50}
                behavior={'padding'}
                styles={styles.containerAvoidingView}
            >

                <Text style={styles.titleStyle}>Code is sent to <Text style={styles.titleNumberStyle}>{phone}</Text></Text>

                <View>
                <TextInput
                    ref={(input) => textInput = input}
                    onChangeText={onChangeText}
                    style={{width: 0, height: 0, color: "#0f0f0f"}}
                    placeholderTextColor='#0f0f0f'
                    underlineColorAndroid='#0f0f0f'
                    value={internalVal}
                    maxLength={lengthInput}
                    returnKeyType="done"
                    keyboardType="numeric"
                />
                <View style={styles.containerInput}>
                {
                    Array(lengthInput).fill().map((data, index) =>(
                        <View key={index} style={[styles.cellView,
                            {
                                borderBottomColor: index === internalVal.length ? '#FB6CA6' : '#234DB7'
                            }
                            ]}>
                            <Text style={styles.cellText}
                                    onPress={() => textInput.focus()}
                                >
                                {internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                </Text>
                            </View>
                            ))
                        }
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.btnResend} >
                        <Text style={styles.textResend}>
                        Didn't receive any code?
                        </Text>
                    </View>
                <TouchableOpacity onPress={onChangeNumber}>
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
                        body: JSON.stringify({ phone:phone, otp:internalVal})
                    };

                    fetch(url,config)
                        .then((response) => response.json())
                        .then((responseJson) => {

                            if (responseJson.status == "1")
                            {
                                Alert.alert(responseJson.message);
                                AsyncStorage.setItem('phone', responseJson.phone);
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

            </KeyboardAvoidingView>
          </View>
          </ScrollView>
          );
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 50
    },

    containerAvoidingView:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    titleStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: "#0f0f0f"

    },
        titleNumberStyle: {
        fontSize: 20,
        textAlign: 'center',
        color: "#0814bf"

    },
    containerInput:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    cellView:{
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        color: "#0f0f0f",
    },
    cellText:{
        textAlign: 'center',
        fontSize: 16
    },
    bottomView:{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        marginTop: 30,
        paddingTop: 20,
        alignItems: 'center'
    },
    btnChangeNumber:{
        width: 150,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',

    },
    textChange:{
        color: '#234BB7',
        alignItems: 'center',
        fontSize: 17

    },
    btnResend: {
        width: 200,
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textResend: {
        alignItems: 'center',
        fontSize: 15,
        color: "#0f0f0f"
    },
    otpButton:{
        backgroundColor: "#2a24c9",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        height: 50,
        width: "80%",
        borderRadius: 10,
        margin: 20,
    },
    otpButtonView:{
        color: "white",
        fontSize: 20

    },
    SubmitBtn:{

    },
})

export default MobileOTP;
