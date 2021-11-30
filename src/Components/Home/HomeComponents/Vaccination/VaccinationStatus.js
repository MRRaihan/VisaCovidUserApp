import React, {useEffect, useState} from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";
import VaccinationImage from "../../../../../assets/images/Vaccination.png";
import VaccinationData from "./VaccineStatusData";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../../RestApi/AppUrl";

const VaccinationStatus = ({route}) => {
    //Vaccination
    const [vaccinationDoseOne, setVaccinationDoseOne] = useState('');
    const [vaccinationDoseTwo, setVaccinationDoseTwo] = useState('');
    const [vaccinationName, setVaccinationName] = useState('');
    const [vaccinationCenter, setVaccinationCenter] = useState('');
    const [vaccinationCenterLocation, setVaccinationCenterLocation] = useState('');


    const [serveByFirstId, setServeByFirstId] = useState('');
    const [serveByFirstName, setServeByFirstName] = useState('');
    const [serveBySecondId, setServeBySecondId] = useState('');
    const [serveBySecondName, setServeBySecondName] = useState('');
    const [myVaccinationImage, setMyVaccinationImage] = useState('');

    useEffect(()=>{

        AsyncStorage.getItem('phone').then(value =>{
            //For pcr Status
            const boosterUrl = appUrl.vaccinationInformation;
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
                    setVaccinationDoseOne(responseJson.myVaccinationDoseOne);
                    setVaccinationDoseTwo(responseJson.myVaccinationDoseTwo);
                    setVaccinationName(responseJson.myVaccinationName);
                    setVaccinationCenter(responseJson.myVaccinationCenter);
                    setVaccinationCenterLocation(responseJson.myVaccinationCenterLocation);
                    setServeByFirstId(responseJson.myServeByFirstId);
                    setServeByFirstName(responseJson.myServeByFirstName);
                    setServeBySecondId(responseJson.myServeBySecondId);
                    setServeBySecondName(responseJson.myServeBySecondName);
                    setMyVaccinationImage(responseJson.myVaccinationImage);
                })
                .catch((error) => {
                    //Alert.alert("Failed to registration 2");
                });
        });
    },[])
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                <Image style={styles.VaccineLogo} source = {{uri:appUrl.BaseUrl+myVaccinationImage}} />
                </View>
                <Card style={styles.LivenessVideo}>
                    <TouchableOpacity>
                        <Text style={styles.video}>Liveness video!</Text>
                    </TouchableOpacity>
                </Card>

                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Title>First Dose</Title>
                        <View
                            style={{
                                borderBottomColor: "#e8e2e1",
                                borderBottomWidth: 2,
                                marginTop: 2,
                            }}
                        />
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Vaccination Date</Text>
                            <Text style={styles.testEndItem}>{vaccinationDoseOne}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Vaccine Name</Text>
                            <Text style={styles.testEndItem}>{vaccinationName}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Center Name</Text>
                            <Text style={styles.testEndItem}>{vaccinationCenter}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Center Address</Text>
                            <Text style={styles.testEndItem}>{vaccinationCenterLocation}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>ServedBy</Text>
                            <Text style={styles.testEndItem}>{serveByFirstName}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>ServedById</Text>
                            <Text style={styles.testEndItem}>{serveByFirstId}</Text>
                        </View>
                    </Card.Content>
                </Card>



                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Title>Second Dose</Title>
                        <View
                            style={{
                                borderBottomColor: "#e8e2e1",
                                borderBottomWidth: 2,
                                marginTop: 2,
                            }}
                        />
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Vaccination Date</Text>
                            <Text style={styles.testEndItem}>{vaccinationDoseTwo}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Vaccine Name</Text>
                            <Text style={styles.testEndItem}>{vaccinationName}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Center Name</Text>
                            <Text style={styles.testEndItem}>{vaccinationCenter}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>Center Address</Text>
                            <Text style={styles.testEndItem}>{vaccinationCenterLocation}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>ServedBy</Text>
                            <Text style={styles.testEndItem}>{serveBySecondName}</Text>
                        </View>
                        <View style={styles.testContents}>
                            <Text style={styles.testStartItem}>ServedById</Text>
                            <Text style={styles.testEndItem}>{serveBySecondId}</Text>
                        </View>

                    </Card.Content>
                </Card>
            </View>
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

export default VaccinationStatus;
