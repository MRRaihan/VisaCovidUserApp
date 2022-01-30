import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, ScrollView, ActivityIndicator} from "react-native";
import { Card } from "react-native-paper";

import AntibodyLogo from "../../../assets/images/faceRecognition.png";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../RestApi/AppUrl";

const UserProfile = (props) => {
  const [userId, setUserId] = useState();

  //Profile
  const [userProfileImage, setUserProfileImage] = useState('');
  const [userProfileId, setUserProfileId] = useState('');
  const [loader, setLoader] = useState(true);

  //PCR
  const [pcrLastTest, setPcrLastTest] = useState('');
  const [lastPcrResult, setLastPcrResult] = useState('');
  const [pcrTestCenter, setPcrTestCenter] = useState('');
  const [pcrCenterLocation, setPcrCenterLocation] = useState('');

  //Vaccination
  const [vaccinationDoseOne, setVaccinationDoseOne] = useState('');
  const [vaccinationDoseTwo, setVaccinationDoseTwo] = useState('');
  const [vaccinationName, setVaccinationName] = useState('');
  const [vaccinationCenter, setVaccinationCenter] = useState('');
  const [vaccinationCenterLocation, setVaccinationCenterLocation] = useState('');

  //Booster
  const [boosterCenter, setBoosterCenter] = useState('');
  const [boosterCenterLocation, setBoosterCenterLocation] = useState('');
  const [boosterDate, setBoosterDate] = useState('');
  const [antibodyRemaining, setAntibodyRemaining] = useState('');


  useEffect(()=>{

    AsyncStorage.getItem('phone').then(value =>{
      //For pcr Status
      const boosterUrl = appUrl.profileInformation;
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
            /*setLastEffected(responseJson.leftDay);
            setRecovered(responseJson.leftDay);
            setAntibodyRemaining(responseJson.leftDay);*/

            //Profiles
            setUserProfileImage(responseJson.userImage);
            setUserProfileId(responseJson.userId);


            //PCR
            setPcrLastTest(responseJson.myPcrLastTest);
            setLastPcrResult(responseJson.myLastPcrResult);
            setPcrTestCenter(responseJson.myPcrTestCenter);
            setPcrCenterLocation(responseJson.myPcrCenterLocation);

            //Vaccination
            setVaccinationDoseOne(responseJson.myVaccinationDoseOne);
            setVaccinationDoseTwo(responseJson.myVaccinationDoseTwo);
            setVaccinationName(responseJson.myVaccinationName);
            setVaccinationCenter(responseJson.myVaccinationCenter);
            setVaccinationCenterLocation(responseJson.myVaccinationCenterLocation);

            //Booster
            setBoosterCenter(responseJson.myBoosterCenter);
            setBoosterCenterLocation(responseJson.myBoosterCenterLocation);
            setBoosterDate(responseJson.myBoosterDate);
            setAntibodyRemaining(responseJson.myAntibodyRemaining);
            setLoader(false)
          })
          .catch((error) => {
            //Alert.alert("Failed to registration 2");
          });
    });
  },[])

  return (
    <ScrollView>
      {
          loader ? <ActivityIndicator size="large" color="#718AEE"/> :
              <View style={styles.container}>
                <View style={styles.AntibodyLogo}>
                  <Image style={styles.AntibodyLogoImg} source={{uri:appUrl.BaseUrl+userProfileImage}} />
                  <View style={styles.UserID}>
                    <View style={styles.UserIdStart}>
                      <Text style={{ width: "100%", marginLeft: "27%", color: "#050505"}}>ID: <Text style={{fontWeight: "bold", padding: 10}}>{userProfileId}</Text> </Text>
                    </View>
                  </View>
                </View>

                <Card style={styles.cardStyle}>
                  <View style={{ paddingTop: 10 }}>
                    <Text style={styles.testStyle}>Antibody Last Date</Text>
                    <View
                        style={{
                          borderBottomColor: "#e8e2e1",
                          borderBottomWidth: 2,
                          marginBottom: 10,
                        }}
                    />
                    <View style={styles.testContents}>
                      <Text style={styles.testAntibodyRemaining}>{antibodyRemaining}</Text>
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

                    <View style={styles.testContents}>
                      <Text style={styles.testStartItem}>Center Location</Text>
                      <Text style={styles.testEndItem}>{vaccinationCenterLocation}</Text>
                    </View>
                  </View>

                  <View style={{ paddingTop: 20, paddingBottom:15  }}>
                    <Text style={styles.testStyle}>Booster</Text>
                    <View
                        style={{
                          borderBottomColor: "#e8e2e1",
                          borderBottomWidth: 2,
                          marginBottom: 10,
                        }}
                    />
                    <View style={styles.testContents}>
                      <Text style={styles.testStartItem}>Center</Text>
                      <Text style={styles.testEndItem}>{boosterCenter}</Text>
                    </View>
                    <View style={styles.testContents}>
                      <Text style={styles.testStartItem}>Center Location</Text>
                      <Text style={styles.testEndItem}>{boosterCenterLocation}</Text>
                    </View>
                    <View style={styles.testContents}>
                      <Text style={styles.testStartItem}>Booster Date</Text>
                      <Text style={styles.testEndItem}>{boosterDate}</Text>
                    </View>
                    <View style={styles.testContents}>
                      <Text style={styles.testStartItem}>Antibody Remaining</Text>
                      <Text style={styles.testEndItem}>{antibodyRemaining}</Text>
                    </View>
                  </View>
                </Card>
              </View>
      }
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
    marginBottom:-80,
    paddingBottom:0,
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
    marginTop: 40,
    backgroundColor: "white",
    width: "90%",
    height: "auto",
    borderRadius: 8,
  },
  testStyle: {
    flex: 1,
    fontSize: 20,
    justifyContent: "flex-start",
    paddingTop: 10,
    color: "#050505",
    fontWeight: "bold"
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
  },
  testStartItem:{
    color: "#050505",
    fontWeight: "bold",
    width: '40%'
  },
  testEndItem:{
    color: "#050505",
    width: '50%',
    textAlign:"right",
  },
  UserID: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
    marginBottom: 5,
    height: 50,
    width: "80%",
  },
  UserIdStart: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  UserIdEnd: {
    width: "100%",
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
  testAntibodyRemaining:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
  }
});

export default UserProfile;
