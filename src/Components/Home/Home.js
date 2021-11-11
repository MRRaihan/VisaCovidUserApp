import * as React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import {TouchableOpacity, StyleSheet, View, Text, Image, ScrollView, Alert, Dimensions} from "react-native";

import UpSlider from "../../../assets/images/slider.png";
import Antibody from "../../../assets/images/battery.png";

import PCR from "../../../assets/images/done.png";
import Vaccination from "../../../assets/images/Vaccination.png";
import AddCountry from "../../../assets/images/CAddCountry.jpeg";
import Booster from "../../../assets/images/CBooster.jpeg";
import {useEffect, useState} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../RestApi/AppUrl";



const Home = ({navigation}) =>{
    const [sliders, setSlider] = useState([]);
    const [phone, setPhone] = useState("");
    const [userId, setUserId] = useState("");

    //For service status check
    const [vaccination, setVaccination] = useState("");
    const [pcr, setPcrStatus] = useState("");
    const [booster, setBooster] = useState("");

    //For Slider width & hight
    const WIDTH = Dimensions.get('window').width;
    const HEIGHT = Dimensions.get('window').height;

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            //For Vaccination Status
            const vaccineUrl = appUrl.VaccineStatus;
            const postConfig = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({phone:value})
            };
            fetch(vaccineUrl,postConfig)
                .then((response) => response.json())
                .then((responseJson) => {
                    setVaccination(responseJson.navigationPath);
                })
                .catch((error) => {
                    //Alert.alert("Failed to registration 2");
                });
        });

    }, []);

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            //For pcr Status
            const pcrUrl = appUrl.PcrStatus;
            const postConfig = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({phone:value})
            };
            fetch(pcrUrl,postConfig)
                .then((response) => response.json())
                .then((responseJson) => {
                    setPcrStatus(responseJson.navigationPath);
                })
                .catch((error) => {
                    //Alert.alert("Failed to registration 2");
                });
        });

    }, []);

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            //For pcr Status
            const boosterUrl = appUrl.BoosterStatus;
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
                    setBooster(responseJson.navigationPath);
                })
                .catch((error) => {
                    //Alert.alert("Failed to registration 2");
                });
        });

    }, []);

    useEffect(()=>{
        //For slider
        const url = appUrl.Slider;
        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        fetch(url,config)
            .then((response) => response.json())
            .then((responseJson) => {
                // Alert.alert(responseJson.status);
                if (responseJson.status == "1")
                {
                    setSlider(responseJson.sliders);
                }else if(responseJson.status == "0"){
                    Alert.alert(responseJson.message);
                }
            })
            .catch((error) => {
                //Alert.alert("Failed to registration 2");
            });


    }, []);


    return(
        <ScrollView>
          <View style={styles.container}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "60%"}}>
                  <ScrollView horizontal={true} showsHorizontalqScrollIndicator={false}>
                      {
                          sliders.map((slider)=>{
                              return (
                                  <Image key={slider.id} source = {{uri:appUrl.BaseUrl+slider.image}}
                                         style = {{ width: WIDTH, height: HEIGHT * 0.25 }}
                                  />
                              )
                          })
                      }
                  </ScrollView>
              </View>

              <View style={styles.healthData}>
              <Text style={styles.HelthTitle}>Health Data</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "95%"
                }}
              >
                <Card style={styles.fDataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Vaccination
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      //props.navigation.navigate("Vaccine Registration");
                        navigation.navigate(vaccination);
                    }}
                  >
                    <Image style={styles.vSliderImage} source={Vaccination} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Antibody
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Antibody");
                    }}
                  >
                    <Image style={styles.SliderImage} source={Antibody} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      PCR
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      //navigation.navigate("PCR");
                      navigation.navigate(pcr);
                    }}
                  >
                    <Image style={styles.pSliderImage} source={PCR} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Booster
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      //navigation.navigate("Booster");
                      navigation.navigate(booster);
                    }}
                  >
                    <Image style={styles.bSliderImage} source={Booster} />
                  </TouchableOpacity>
                  </View>
                </Card>



                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Add Country
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -25
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Add Country");
                    }}
                  >
                    <Image style={styles.adSliderImage} source={AddCountry} />
                  </TouchableOpacity>
                  </View>
                </Card>

              </View>
            </View>
          </View>
         </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 85,
  },
  Slider: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    height: 150,
    width: "100%",
    marginTop: 150,
    backgroundColor: "#718AEE",
    borderRadius: 10,
  },
  HelthTitle: {
    fontSize: 22,
    marginBottom: 10,
    color: "#050505"
  },
  healthData: {
    marginTop: 50,
  },
  fDataFlex: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    width: "80%",
    borderWidth: 2,
    marginTop: -320,
    marginBottom: 6,
    height: 250

  },
  dataFlex: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    width: "80%",
    borderWidth: 2,
    margin: 6,
    height: 250

  },
  CardInsideTitle: {
    flexDirection: "row",
    padding: 2,
    marginBottom: 20,
    marginTop: 10
  },
  SliderImage: {
    height: 100,
    width: "97%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 5
  },
  vSliderImage:{
    height: 150,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 50
  },
  bSliderImage:{
    height: 140,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 15
  },
  pSliderImage:{
    height: 170,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    marginLeft: 40
  },
  adSliderImage:{
    height: 120,
    width: "88%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 15
  },
});

export default Home;
