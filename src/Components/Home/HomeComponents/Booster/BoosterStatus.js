import React, {useEffect, useState} from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";
import BoosterImage from "../../../../../assets/images/Booster.png";
import BoosterData from "./BoosterStatusData";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../../RestApi/AppUrl";

const BoosterStatus = ({route}) => {
    const [boosterCenter, setBoosterCenter] = useState('');
    const [boosterCenterLocation, setBoosterCenterLocation] = useState('');
    const [boosterDate, setBoosterDate] = useState('');
    const [antibodyRemaining, setAntibodyRemaining] = useState('');
    const [vaccineName, setVaccineName] = useState('');
    const [loader, setLoader] = useState(true);


    const [serveById, setServeById] = useState('');
    const [serveByName, setServeByName] = useState('');

    useEffect(()=>{

        AsyncStorage.getItem('phone').then(value =>{
            //For pcr Status
            setLoader(true)
            const boosterUrl = appUrl.boosterInformation;
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
                    setBoosterCenter(responseJson.myBoosterCenter);
                    setBoosterCenterLocation(responseJson.myBoosterCenterLocation);
                    setBoosterDate(responseJson.myBoosterDate);
                    setAntibodyRemaining(responseJson.myAntibodyRemaining);
                    setAntibodyRemaining(responseJson.myNameOfVaccine);
                    setVaccineName(responseJson.myNameOfVaccine);
                    setServeById(responseJson.myServeById);
                    setServeByName(responseJson.myServeByName);
                    setLoader(false)
                })
                .catch((error) => {
                    setLoader(false)
                    //Alert.alert("Failed to registration 2");
                });
        });
    },[])

    return (
        <ScrollView>
            {
                loader ? <ActivityIndicator size="large" color="#718AEE"/> :
                    <View style={styles.container}>
                        <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                            <Image style={styles.VaccineLogo} source={BoosterImage} />
                        </View>
                        <Card style={styles.LivenessVideo}>
                            <TouchableOpacity>
                                <Text style={styles.video}>Liveness video!</Text>
                            </TouchableOpacity>
                        </Card>

                        <Card style={styles.cardStyle}>
                            <Card.Content>
                                <Title>Booster</Title>
                                <View
                                    style={{
                                        borderBottomColor: "#e8e2e1",
                                        borderBottomWidth: 2,
                                        marginTop: 2,
                                    }}
                                />
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>Vaccine Name</Text>
                                    <Text style={styles.testEndItem}>{vaccineName}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>Center Name</Text>
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
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>ServedBy</Text>
                                    <Text style={styles.testEndItem}>{serveByName}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>ServedById</Text>
                                    <Text style={styles.testEndItem}>{serveById}</Text>
                                </View>
                            </Card.Content>
                        </Card>
                    </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginBottom: 10
    },
    VaccineLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  180,
        width: 180,
        marginTop: 25,
        marginBottom: 10
    },
    button:{
        backgroundColor:'#ff6b6b',
        borderRadius: 10,
        padding: 15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
    },
    text:{
        fontSize: 20,
        color:'#fff',
    },
    cardStyle: {
        backgroundColor: "white",
        width: "95%",
        height: 270,
        marginTop:20,
    },
    testContents: {
        justifyContent: "space-between",
        flexDirection: "row",
        paddingTop: 5,
    },
    testStartItem: {
        color: "#050505",
        fontWeight: "bold",
        width: '40%'
    },
    testEndItem: {
        color: "#050505",
        width: '50%',
        textAlign:"right",
    },
    LivenessVideo:{
        width: "95%",
        height: 230,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#cfcbca",
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 6
    },
    video:{
        color: "#000000",
        marginTop: 110,
        fontSize: 20,

    }
})

export default BoosterStatus;
