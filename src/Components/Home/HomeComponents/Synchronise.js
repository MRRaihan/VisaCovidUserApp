import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

import BeAware from "../../../../assets/images/BeAware.png";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../RestApi/AppUrl";

const Synchronise = ({navigation, route}) => {
    const [personalDataChecked, setPersonalDataChecked] = React.useState(false);
    const [diagnosisDataChecked, setDiagnosisDataChecked] = React.useState(false);
    const [PCRDataChecked, setPCRDataChecked] = React.useState(false);
    const [vaccinationDataChecked, setVaccinationDataChecked] = React.useState(false);
    const [biometricDataChecked, setBiometricDataChecked] = React.useState(false);

    const [allRules, setAllRules] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [errorRules, setErrorRules] = useState('');
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(()=>{

        const url = appUrl.Synchronize+'/'+route.params.toAddressId;
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
                console.log(responseJson)
                if (responseJson.status == "1")
                {
                    setAllRules(responseJson.rules);
                    setCountryName(responseJson.country_name);
                }else if(responseJson.status == "0"){
                   Alert.alert(responseJson.message)
                }
            })
            .catch((error) => {
                //Alert.alert("Failed to registration 2");
            });
    },[])

    return (
        <ScrollView>
            <View style={StyleSheet.container}>

            <View>
                <Text style={styles.address}>To Address: {countryName}</Text>
            </View>

            <View style={styles.checkboxViewStyle}>
            <Text style={styles.mainTitle}>Rules for movement</Text>
                <View
                    style={{
                    borderBottomColor: "#e8e2e1",
                    borderBottomWidth: 2,
                    marginTop: 13,
                    }}
                />

                {
                    allRules.length < 1 && (<View style={{flexDirection: "row", width:"80%", marginLeft: 5, padding: 5, marginTop: 5}}>
                       <Text style={styles.checkData}>No data found</Text>
                    </View>)
                }

                {
                    allRules && allRules.length > 0 && allRules.map((rule) =>{
                        return (<View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 5, marginTop: 5}}>
                            <Checkbox
                                status={personalDataChecked ? 'checked' : 'unchecked'}
                                onPress={() => {

                                }}
                            /><Text style={styles.checkData}>{rule.synchronize_rule}</Text>
                        </View>)
                    })
                }
            </View>

            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        props.navigation.navigate("Home");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 16}}>Synchronize & Exit</Text>
                    </TouchableOpacity>
                </View>
            </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        width: "90%",
        paddingBottom: 20
     },
    cardStyleCovidVisa:{
        flexDirection: 'row',
        width: "90%",
        backgroundColor: "#4484eb",
    },
    cardStyleSurokkha:{
        flexDirection: 'row',
        width: "90%",
        backgroundColor: "#bb44eb",
    },
    address:{
        fontSize: 20,
        paddingTop:10,
        marginTop: 15,
        marginBottom: -10,
        marginLeft: 20,
        color: "gray"
    },
    mainTitle:{
        fontSize: 20,
        paddingTop:10,
        marginTop: 15,
        marginBottom: -10,
        marginLeft: 6,
        color: "gray"
    },
    ImageShow:{
        height: 100,
        width: 100
    },
    checkboxViewStyle:{
        justifyContent: "center",
        flexDirection: "column",
        width: "90%",
        marginLeft: 10,
        padding: 5
    },
    checkData:{
        fontSize:18,
        color: "#050505",
        marginTop: 5
    },
    downloadInstallStyle:{
        width: "90%",
        fontSize: 20,
        paddingTop:10,
        marginTop: 15,
        marginBottom: -10,
        marginLeft: 20,
        color: "gray"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        margin: 20,
        height: 40,
        width: "90%",
        backgroundColor: "#00549F",
        borderRadius: 6
    },
})

export default Synchronise;

{/* <View style={styles.mainTitle}>Trusted app for Bahrain</View>

<Card style={styles.cardStyleCovidVisa}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
        <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
            <View style={{fontSize: 30, fontWeight: 'bold' }}>Be Aware</View>
            <View>United against COVID-19</View>
        </View>
        <View style={{justifyContent: "flex-end", height: 100}}>
            <Image style={styles.ImageShow} source={BeAware} />
        </View>
    </View>
</Card>

<View style={styles.mainTitle}>Trusted app for Bangladesh</View>
<Card style={styles.cardStyleSurokkha}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
        <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
            <View style={{fontSize: 30, fontWeight: 'bold' }}>Surokkha</View>
            <View>United against COVID-19</View>
        </View>
        <View style={{justifyContent: "flex-end", height: 100}}>
            <Image style={styles.ImageShow} source={BeAware} />
        </View>
    </View>
</Card> */}
