import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native";
import {Button, Card} from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';
import AntibodyLogo from "../../../assets/images/userProfileLogoImg.jpg";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../RestApi/AppUrl";

const UserProfile = ({navigation}) => {
  const [userId, setUserId] = useState();
  const [lastEffected, setLastEffected] = useState('');
  const [recovered, setRecovered] = useState('');
  const [antibodyRemaining, setAntibodyRemaining] = useState('');
  const [pcrLastTest, setPcrLastTest] = useState('');
  const [lastPcrResult, setLastPcrResult] = useState('');
  const [pcrTestCenter, setPcrTestCenter] = useState('');
  const [pcrCenterLocation, setPcrCenterLocation] = useState('');
  const [vaccinationDoseOne, setVaccinationDoseOne] = useState('');
  const [vaccinationDoseTwo, setVaccinationDoseTwo] = useState('');
  const [vaccinationName, setVaccinationName] = useState('');
  const [vaccinationCenter, setVaccinationCenter] = useState('');
  const [boosterCenter, setBoosterCenter] = useState('');
  const [boosterDate, setBoosterDate] = useState('');

  useEffect(()=>{
    AsyncStorage.getItem('phone').then(value =>{
      //For pcr Status
      const boosterUrl = appUrl.boosterLeftTime;
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
            console.log(responseJson)
            setLastEffected(responseJson.leftDay);
            setRecovered(responseJson.leftDay);
            setAntibodyRemaining(responseJson.leftDay);
            setPcrLastTest(responseJson.leftDay);
            setLastPcrResult(responseJson.leftDay);
            setPcrTestCenter(responseJson.leftDay);
            setPcrCenterLocation(responseJson.leftDay);
            setVaccinationDoseOne(responseJson.leftDay);
            setVaccinationDoseTwo(responseJson.leftDay);
            setVaccinationName(responseJson.leftDay);
            setVaccinationCenter(responseJson.leftDay);
            setBoosterCenter(responseJson.leftDay);
            setBoosterDate(responseJson.leftDay);
          })
          .catch((error) => {
            //Alert.alert("Failed to registration 2");
          });
    });
  },[])



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.AntibodyLogo}>
          <Image style={styles.AntibodyLogoImg} source={AntibodyLogo} />
          <View style={styles.UserID}>
            <Text style={{ width: "100%", marginLeft: "27%",color: "#050505" }}>ID: <Text style={{fontWeight: "bold", padding: 10}}>954 322 541</Text> </Text>
          </View>
        </View>

        <Card style={styles.cardStyle}>
          <View style={styles.subscribtionBtn}>
            <View style={{width: "60%", justifyContent: "center", alignItems: 'center', marginLeft: 20}}>
              <TouchableOpacity style={styles.subscribtionBtnMain} onPress={() =>{
                  navigation.navigate("")
                }}>
                  <Text style={styles.PaymentText}>Subscribe Now</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.testStyle}>COVID-19 Antibody</Text>
            <View
              style={{
                borderBottomColor: "#e8e2e1",
                borderBottomWidth: 2,
                marginBottom: 10,
              }}
            />
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Last affected</Text>
              <Text style={styles.testEndItem}>{lastEffected}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Recovered</Text>
              <Text style={styles.testEndItem}>{recovered}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Antibody Remaining</Text>
              <Text style={styles.testEndItem}>{antibodyRemaining}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            <Text style={styles.testStyle}>PCR Test</Text>
            <View
              style={{
                borderBottomColor: "#e8e2e1",
                borderBottomWidth: 2,
                marginBottom: 10,
              }}
            />
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Last Test</Text>
              <Text style={styles.testEndItem}>{pcrLastTest}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Last result</Text>
              <Text style={styles.testEndItem}>{lastPcrResult}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Test Center</Text>
              <Text style={styles.testEndItem}>{pcrTestCenter}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Test Location</Text>
              <Text style={styles.testEndItem}>{pcrCenterLocation}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 10 }}>
            <Text style={styles.testStyle}>Vaccine</Text>
            <View
              style={{
                borderBottomColor: "#e8e2e1",
                borderBottomWidth: 2,
                marginBottom: 10,
              }}
            />
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Dose 1</Text>
              <Text style={styles.testEndItem}>{vaccinationDoseOne}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Dose 2</Text>
              <Text style={styles.testEndItem}>{vaccinationDoseTwo}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Vaccine name</Text>
              <Text style={styles.testEndItem}>{vaccinationName}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Vaccine center</Text>
              <Text style={styles.testEndItem}>{vaccinationCenter}</Text>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={styles.testStyle}>Booster</Text>
            <View
                style={{
                  borderBottomColor: "#e8e2e1",
                  borderBottomWidth: 2,
                  marginBottom: 10,
                }}
            />
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Booster Center</Text>
              <Text style={styles.testEndItem}>{boosterCenter}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Booster Date</Text>
              <Text style={styles.testEndItem}>{boosterDate}</Text>
            </View>
            <View style={styles.testContents}>
              <Text style={styles.testStartItem}>Antibody Remaining</Text>
              <Text style={styles.testEndItem}>{}</Text>
            </View>
          </View>

          <View style={styles.accountsForm}>
              <View style={styles.editInfo}>
                <TouchableOpacity style={styles.editInerView} onPress={() =>{
                    navigation.navigate("Personal Information")}}>

                    <Icon name="edit" size={30} color="#2d28b5" solid />
                    <Text style={styles.editBtnText}>Edit Personal Data</Text>

                </TouchableOpacity>
              </View>
              <View style={styles.logoutUser}>
                <TouchableOpacity style={styles.loginSignBtn2} onPress={() =>{
                    AsyncStorage.setItem('loginStatus', "");
                    navigation.navigate("Login")
                  }}>
                    <Text style={styles.PaymentText}>Log Out</Text>
                </TouchableOpacity>
              </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  AntibodyLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "70%",
    padding: 10,
    margin: 10,
  },
  AntibodyLogoImg: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  cardStyle: {
    padding: 10,
    marginTop: 50,
    backgroundColor: "white",
    width: "97%",
    height: "auto",
    borderRadius: 8,
    marginBottom: -50
  },
  testStyle: {
    flex: 1,
    fontSize: 18,
    justifyContent: "flex-start",
    paddingTop: 10,
    color: "#050505"
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
  },
  testStartItem:{
    color: "#050505"
  },
  testEndItem:{
    color: "#050505"
  },
  UserID: {
    justifyContent: "center",
    padding: 5,
    marginBottom: 20,
    width: "100%",
  },
  UserIdStart: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  UserIdEnd: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  testContentEdit:{
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    marginTop: 30
  },
  subscribtionBtn:{
    flexDirection: "row",
    justifyContent: 'center',
    width: "100%",
    marginBottom: 10,
    marginTop: -10

  },
  subscribtionBtnMain:{
    width: "99%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#00559D",
    marginLeft: -30
  },
  accountsForm:{
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "95%",
    padding: 1,
    margin: 10

  },
  editInfo:{
    width: "60%",
    justifyContent: 'center',
    alignItems: 'center',

  },
  editInerView:{
    flexDirection: "row",
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#050505",
    borderRadius: 10,
    marginTop: 20,
    padding: 6
  },
  logoutUser:{
    width: "35%",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  editBtnText:{
    color: "#121011",
    marginTop: 5,
  },
  PaymentText:{
    color: "#ffffff"
  },
  textLogin:{
    color: "#ffffff"
  },
  loginSignBtn2:{
    width: "99%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#9c061f",
  },
  loginSignBtn1:{
    width: "100%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
});

export default UserProfile;
