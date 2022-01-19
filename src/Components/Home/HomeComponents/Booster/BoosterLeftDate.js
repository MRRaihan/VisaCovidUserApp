import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import { Card } from 'react-native-paper';

import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../../RestApi/AppUrl";

const BoosterLeftDate = ({navigation}) => {

    const [boosterLeftDay, setBoosterLeftDay] = useState('');
    const [boosterLeftTime, setBoosterLeftTime] = useState('');
    const [centerAddress, setCenterAddress] = useState('');

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
                    setBoosterLeftDay(responseJson.leftDay);
                    setBoosterLeftTime(responseJson.leftHour)
                    setCenterAddress(responseJson.centerAddress)
                })
                .catch((error) => {
                    //Alert.alert("Failed to registration 2");
                });
        });
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.statusText}>You have registered for the Booster. Your booster left</Text>
                <View style={styles.dateTimesStatus}>
                    <View style={styles.leftTime}>
                        <Text style={styles.leftDates}>{boosterLeftDay}</Text>
                        <Text style={styles.leftMiddle}>:</Text>
                        <Text style={styles.leftHours}>{boosterLeftTime}</Text>
                    </View>
                    <View style={styles.timeBottomTitte}>
                        <Text style={styles.leftDatesText}>Days</Text>
                        <Text style={styles.leftHoursText}>Hours</Text>
                    </View>
                </View>
                <Card style={{paddingRight: 20, marginTop: 30}}>
                    <View style={styles.pickLocation}>
                        <Text style={{fontSize: 20, color: "#050505"}}>{centerAddress}</Text>
                    </View>
                </Card>
                <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate("");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 16}}>Ready to Booster</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        width: "100%",


    },
    statusText:{
        width: "100%",
        fontSize: 16,
        justifyContent: 'center',
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
        color: "#00549F",
    },
    dateTimesStatus:{
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center"
    },
    leftTime:{
        width: "50%",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 5

    },
    timeBottomTitte:{
        width: "40%",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems: "center",
        padding: 10,
    },
    leftDates:{
        backgroundColor: "#333538",
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        paddingTop: 35,
        paddingBottom: 35,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10


    },
    leftHours:{
        backgroundColor: "#333538",
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        paddingTop: 35,
        paddingBottom: 35,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10

    },
    leftMiddle:{
        fontSize: 50,
        color: "black",
        fontWeight: 'bold',
        padding: 10,
    },
    leftDatesText:{
        fontSize: 25,
        color: "black",
        paddingRight: 30,
        marginLeft: -9,
        marginTop: -20
    },
    leftHoursText:{
        fontSize: 25,
        color: "black",
        marginTop: -20,
        marginLeft: 19
    },
    MapArea:{
        backgroundColor: "#d8d9e6",
        borderRadius: 10,
        padding: 10,
        flexDirection: "column",
        height: 410,
        width: "100%",
        marginLeft: 10
    },
    map: {
        width: "100%",
        height: 345,
        borderRadius: 10

    },
    pickLocation:{
        width: "90%",
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        marginTop: 30,
        height: 45,
        width: "100%",
        backgroundColor: "#00549F",
        borderRadius: 6
    },

})

export default BoosterLeftDate;
