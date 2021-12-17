import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import appUrl from "../../../../RestApi/AppUrl";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import AsyncStorage from "@react-native-community/async-storage";


const AlreadyTakeVaccine = ({navigation}) => {
    const [ phone, setPhone] = useState(null);
    const [ vaccineName, setVaccineName] = useState(null);
    const [ center, setCenter] = useState(null);
    const [ firstDose, setFirstDose] = useState('');
    const [ secondDose, setSecondDose] = useState('');
    const [ description, setDescription] = useState(null);
    const [ document, setDocument] = useState(null);
    const [ centerLocation, setCenterLocation] = useState(null);

    useEffect(()=>{
        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>

                <Text style={styles.inputTitle}>Vaccine Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter vaccine name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(vaccine) => setVaccineName(vaccine)}
                    />
                </View>

                <Text style={styles.inputTitle}>Center Name</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter center name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(center) => setCenter(center)}
                    />
                </View>

                <Text style={styles.inputTitle}>Center location</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter center location"
                        placeholderTextColor="#003f5c"
                        onChangeText={(location) => setCenterLocation(location)}
                    />
                </View>

                <Text style={styles.inputTitle}>Date of first dose</Text>
                <View>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={firstDose}
                        mode="date"
                        format="YYYY-MM-DD"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {
                            var currentMyDate = moment(date).format('YYYY-MM-DD');
                            setFirstDose(currentMyDate);
                        }}
                    />
                </View>

                <Text style={styles.inputTitle}>Date of second dose</Text>
                <View>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={secondDose}
                        minDate={firstDose}
                        mode="date"
                        format="YYYY-MM-DD"
                        maxDate="2022-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {
                            var currentMyDate = moment(date).format('YYYY-MM-DD');
                            setSecondDose(currentMyDate);
                        }}
                    />
                </View>

                <Text style={styles.inputTitle}>Description</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Enter description"
                        multiline={true}
                        numberOfLines={5}
                        placeholderTextColor="#003f5c"
                        onChangeText={(description) => setDescription(description)}
                    />
                </View>

                <Text style={styles.inputTitle}>Document</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder="Upload Document"
                        multiline={true}
                        numberOfLines={5}
                        placeholderTextColor="#003f5c"
                        onChangeText={(document) => setDocument(document)}
                    />
                </View>


                <TouchableOpacity style={styles.button} onPress={() => {
                    const url = appUrl.ExternalVaccination;
                    const config = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ phone:phone, vaccineName:vaccineName, firstDose: firstDose, secondDose:secondDose, description:description, document:document, center:center, centerLocation:centerLocation })
                    };
                    //Alert.alert(url);
                    console.log(url)

                    fetch(url,config)
                        .then((response) => response.json())
                        .then((responseJson) => {

                            console.log(responseJson)
                            if (responseJson.status == "2")
                            {
                                Alert.alert(responseJson.message);
                            } else if (responseJson.status == "1")
                            {
                                Alert.alert(responseJson.message);
                                navigation.navigate("Home");
                            }else if(responseJson.status == "0"){
                                Alert.alert(responseJson.message);
                            }
                        })
                        .catch((error) => {
                            //Alert.alert("Failed to registration 2");
                        });
                }}>
                    <Text style={{textAlign:"center", color: "white", fontSize: 16}}>Submit</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%",
        marginLeft: 10,
        justifyContent: 'center',
        flexDirection: "column"
    },
    inputTitle:{
        color:'#00549F',
        paddingVertical: 10,
        fontSize: 13,
        fontWeight:'bold'
    },
    firstView:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    inputView: {
        backgroundColor: "#ffffff",
        borderColor: "#0f0f0f",
        borderWidth:1,
        borderRadius: 6,
        width: "95%",
        height: 40,
        marginBottom: 5,
    },
    TextInput:{
        color:'#ddd'
    },
    datePickerStyle:{
        width: '95%',
        backgroundColor: "#ffffff",
        borderRadius:5
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
    button: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        height: 45,
        width: "95%",
        backgroundColor: "#00549F",
        borderRadius: 6,
        marginVertical:10,
    },
    checkTitle:{
        fontSize:18,
        color: "#050505",
        marginTop: 5,
        fontWeight: 'bold'
    },
    checkItemColor:{
        color: "#050505"
    }

})
export default AlreadyTakeVaccine;