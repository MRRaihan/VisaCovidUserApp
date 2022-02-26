import React, {useEffect, useState} from 'react'
import {View, StyleSheet, ScrollView, Image, TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Card, Paragraph, Title} from "react-native-paper";
import PCRImage from "../../../../../assets/images/done.png";
import PCRData from "./PCRStatusData";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../../RestApi/AppUrl";

const PCRTestStatus = ({route}) => {
    const [pcrLastTest, setPcrLastTest] = useState('');
    const [lastPcrResult, setLastPcrResult] = useState('');
    const [pcrTestCenter, setPcrTestCenter] = useState('');
    const [pcrCenterLocation, setPcrCenterLocation] = useState('');
    const [loader, setLoader] = useState(true);


    const [serveById, setServeById] = useState('');
    const [serveByName, setServeByName] = useState('');

    useEffect(()=>{

        setLoader(true)
        AsyncStorage.getItem('phone').then(value =>{
            //For pcr Status
            const boosterUrl = appUrl.pcrInformation;
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
                setPcrLastTest(responseJson.myPcrLastTest);
                setLastPcrResult(responseJson.myLastPcrResult);
                setPcrTestCenter(responseJson.myPcrTestCenter);
                setPcrCenterLocation(responseJson.myPcrCenterLocation);
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
                            <Image style={styles.PCRLogo} source={PCRImage} />
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
                                    <Text style={styles.testStartItem}>PCR Test Date</Text>
                                    <Text style={styles.testEndItem}>{pcrLastTest}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>PCR Test Result</Text>
                                    <Text style={styles.testEndItem}>{lastPcrResult}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>Center Name</Text>
                                    <Text style={styles.testEndItem}>{pcrTestCenter}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>Center Address</Text>
                                    <Text style={styles.testEndItem}>{pcrCenterLocation}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>ServedBy</Text>
                                    <Text style={styles.testEndItem}>{serveById}</Text>
                                </View>
                                <View style={styles.testContents}>
                                    <Text style={styles.testStartItem}>ServedById</Text>
                                    <Text style={styles.testEndItem}>{serveByName}</Text>
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
    PCRLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  150,
        width: 170,
        marginTop: 25,
    },
    button:{
        backgroundColor:'#ff6b6b',
        borderRadius: 10,
        padding: 15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
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

export default PCRTestStatus;
