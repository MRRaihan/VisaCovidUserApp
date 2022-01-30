import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../RestApi/AppUrl";

export default function App({navigation}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");


  useEffect(()=>{
    AsyncStorage.getItem('phone').then(value =>{
      //For pcr Status
      const boosterUrl = appUrl.editUserProfile;
      const postConfig = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone:value})
      };
      fetch(boosterUrl,postConfig)
          .then((response) => response.json())
          .then((responseJson) => {
            setName(responseJson.user.name);
            setPhone(responseJson.user.phone);
            setAddress(responseJson.address);
            setPassport(responseJson.passport);
          })
          .catch((error) => {
            //Alert.alert("Failed to registration 2");
          });
    });
  },[])


  return (
      <ScrollView>
    <View style={styles.container}>
      <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Full Name"
            value={name}
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            value={phone}
            placeholderTextColor="#003f5c"
            onChangeText={(phone) => setPhone(phone)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
              style={styles.TextInput}
              placeholder="Present Address"
              value={address}
              placeholderTextColor="#003f5c"
              onChangeText={(address) => setAddress(address)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Passport Number"
            value={passport}
            placeholderTextColor="#003f5c"
            onChangeText={(passport) => setPassport(passport)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Confirm Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={() =>{

          const url = appUrl.updateUserProfile;
          const newConfig = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name:name, phone:phone, password:password, address:address, passport:passport })
          };

          fetch(url,newConfig)
              .then((response) => response.json())
              .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status == "1")
                {
                  Alert.alert(responseJson.message);
                  navigation.navigate("Home")
                }else if(responseJson.status == "0"){
                  Alert.alert(responseJson.message);
                }
              })
              .catch((error) => {
                //Alert.alert("Failed to registration 2");
              });


          }}>
          <Text style={styles.textLogin}>Save & Exit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 50
  },
  accountsForm:{
      flexDirection: "row",
      justifyContent: 'space-between',
      width: "100%",
      padding: 5,
      marginBottom: 10,
      marginLeft: 30

  },
  loginSign:{
      width: "50%"
  },
  loginSignBtn2:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#c4c3e8",
  },
  loginSignBtn1:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#f5f0f0",
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height:  280,
    width: 230,
    marginBottom: 30
  },

  inputView: {
    backgroundColor: "#ffffff",
    borderColor: "#0f0f0f",
    borderWidth:1,
    borderRadius: 10,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 5,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginSignBtn:{
    width: "85%",
    borderRadius: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#f5f0f0",
  },

  loginBtn: {
    width: "90%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#021078",
  },
  textLogin:{
      color: "#ffffff"
  }
});




