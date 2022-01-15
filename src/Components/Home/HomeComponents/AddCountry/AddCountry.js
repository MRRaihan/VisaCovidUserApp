import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Card } from 'react-native-elements';
import appUrl from "../../../../RestApi/AppUrl";

const AddCountry = ({navigation}) => {
    const [fromAddress, setfromAddress] = useState();
    const [toAddress, settoAddress] = useState();
    const [loader, setLoader] = useState(true);

    const [allCountry, setCountryItem] = useState([]);


    useEffect(()=>{
        setLoader(true)
        const url = appUrl.Country;
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
                    setCountryItem(responseJson.countries);
                }else if(responseJson.status == "0"){
                    Alert.alert(responseJson.message);
                }
            })
            .catch((error) => {
                //Alert.alert("Failed to registration 2");
            });
        setLoader(false)

    }, []);

    return (
            <Card style={styles.container}>
                {
                    loader ? <ActivityIndicator size="large" color="#718AEE"/> :
                        <View style={styles.itemView}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: "#050505"}}>From</Text>
                            <Picker
                                itemStyle={{color:'#050505'}}
                                style={{color: "#050505", backgroundColor: '#e1e8eb'}}
                                selectedValue={fromAddress}
                                onValueChange={(itemValue, itemIndex) =>
                                    setfromAddress(itemValue)
                                }>
                                {
                                    allCountry.map((country)=>{
                                        return (
                                            <Picker.Item key={country.id} label={country.name} value={country.id} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                }

                {
                    loader ? <ActivityIndicator size="large" color="#718AEE"/> :
                        <View style={styles.itemView}>
                            <Text style={{fontSize: 19, fontWeight: 'bold', color: "#050505"}}>To</Text>
                            <Picker
                                style={{color: "#050505", backgroundColor: '#e1e8eb'}}
                                selectedValue={toAddress}
                                onValueChange={(itemValue, itemIndex) =>
                                    settoAddress(itemValue)
                                }>

                                {
                                    allCountry.map((country)=>{
                                        return (
                                            <Picker.Item key={country.id} label={country.name} value={country.id} />
                                        )
                                    })
                                }
                            </Picker>
                        </View>
                }

                <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate("Synchronise", { fromAddressId: fromAddress, toAddressId:toAddress });
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Select</Text>
                    </TouchableOpacity>
                </View>
        </Card>


    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "90%",
        marginLeft: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: "center",
        flexDirection: "column",
        height: 40
    },
    itemView:{
        padding: 20,
        margin: 5
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        margin: 10,
        borderWidth: 1,
        height: 50,
        width: "100%",
        backgroundColor: "#2e47e8",
        borderRadius: 10
    },
    // pickerItem:{
    //     borderRadius: 10,
    //     borderColor: "#d9b555",
    //     backgroundColor: "#ebecf2",
    //     width: "100%",
    //     fontSize: 20
    // }

})

export default AddCountry;
