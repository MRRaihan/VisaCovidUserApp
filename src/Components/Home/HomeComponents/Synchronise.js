import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

import BeAware from "../../../../assets/images/BeAware.png";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";
import appUrl from "../../../RestApi/AppUrl";
import {userSynchronizeRuleCheck} from "../../../CustomHelper/Helper";

const Synchronise = ({navigation, route}) => {
    const [loader, setLoader] = useState(true);
    const [allRules, setAllRules] = useState([]);
    const [countryName, setCountryName] = useState('');
    const [userSynchronizeData, setUserSynchronizeData] = useState([]);

    useEffect(()=>{
        setLoader(true)
        AsyncStorage.getItem('phone').then(value =>{
            const url = appUrl.Synchronize+'/'+route.params.toAddressId+'/'+value;
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
                if (responseJson.status == "1")
                {
                    setAllRules(responseJson.rules);
                    setUserSynchronizeData(responseJson.user_synchronizes);
                    setCountryName(responseJson.country_name);
                    setLoader(false)
                }else if(responseJson.status == "0"){
                    Alert.alert(responseJson.message)
                }
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
            <View style={StyleSheet.container}>
                <View>
                    <Text style={styles.address}>To Address: {countryName}</Text>
                </View>
                    {
                        loader ? <ActivityIndicator size="large" color="#718AEE"/> :
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
                                    allRules && allRules.length > 0 && allRules.map((synchronizeRuleBasedOnCountry) =>{
                                        return (<View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 5, marginTop: 5}}>
                                            <Checkbox
                                                status={userSynchronizeRuleCheck(synchronizeRuleBasedOnCountry.rule.id, userSynchronizeData) ? 'checked' : 'unchecked'}
                                                onPress={() => {
                                                    alert("hello")
                                                }}
                                            /><Text style={styles.checkData}>{synchronizeRuleBasedOnCountry.rule.synchronize_rule}</Text>
                                        </View>)
                                    })
                                }
                            </View>
                    }
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
