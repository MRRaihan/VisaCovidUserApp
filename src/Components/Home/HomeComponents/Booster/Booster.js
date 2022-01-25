import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import MapView from 'react-native-maps';

import appUrl from "../../../../RestApi/AppUrl";
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import AsyncStorage from "@react-native-community/async-storage";

const Booster = ({navigation}) => {
    const [selectedFirstItem, setSelectedFirstItem] = useState();
    const [selectedSecondItem, setSelectedSecondItem] = useState();
    const [selectedThirdItem, setSelectedThirdItem] = useState();
    const [selectedFourItem, setSelectedFourItem] = useState();

    const [allCountry, setCountryItem] = useState([]);
    const [allState, setStateItem] = useState([]);
    const [allCity, setCityItem] = useState([]);
    const [allCenter, setCenterItem] = useState([]);

    //time
    const [currentDate, setCurrentDate] = useState('');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState("");

    useEffect(()=>{
        var date = moment().format();
        var currentDate = moment(date).format('YYYY-MM-DD');
        setCurrentDate(currentDate);

        AsyncStorage.getItem('phone').then(value =>{
            setPhone(value)
        });

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
    },[])

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.firstView}>
                <View style={styles.pickerAllItem}>
                    <Text style={styles.checkTitle}>Select a Country</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedFirstItem}
                        onValueChange={(itemValue) =>{
                            const url = appUrl.State+"/"+itemValue;
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
                                        setSelectedFirstItem(itemValue);
                                        setStateItem(responseJson.states);
                                    }else if(responseJson.status == "0"){
                                        Alert.alert(responseJson.message);
                                    }
                                })
                                .catch((error) => {
                                    //Alert.alert("Failed to registration 2");
                                });
                        }
                        }>
                        <Picker.Item key="45643234" label="Select one"/>
                        {
                            allCountry.map((country)=>{
                                return (
                                    <Picker.Item key={country.id} label={country.name} value={country.id} />
                                )
                            })
                        }
                    </Picker>
                </View>
                <View style={styles.pickerAllItem}>
                    <Text style={styles.checkTitle}>Select State</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedSecondItem}
                        onValueChange={(itemValue, itemIndex) =>{
                            const url = appUrl.City+"/"+itemValue;
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
                                        setSelectedSecondItem(itemValue)
                                        setCityItem(responseJson.cities);
                                    }else if(responseJson.status == "0"){
                                        Alert.alert(responseJson.message);
                                    }
                                })
                                .catch((error) => {
                                    //Alert.alert("Failed to registration 2");
                                });
                        }
                        }>
                        <Picker.Item key="4564234" label="Select one"/>
                        {
                            allState.map((state)=>{
                                return (
                                    <Picker.Item key={state.id} label={state.name} value={state.id} />
                                )
                            })
                        }
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text style={styles.checkTitle}>Select City</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedThirdItem}
                        onValueChange={(itemValue, itemIndex) =>
                        {
                            const url = appUrl.Center+"/"+itemValue;
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
                                        setSelectedThirdItem(itemValue)
                                        setCenterItem(responseJson.centers);
                                    }else if(responseJson.status == "0"){
                                        Alert.alert(responseJson.message);
                                    }
                                })
                                .catch((error) => {
                                    //Alert.alert("Failed to registration 2");
                                });
                        }

                        }>
                        <Picker.Item key="345634" label="Select one"/>
                        {
                            allCity.map((city)=>{
                                return (
                                    <Picker.Item key={city.id} label={city.name} value={city.id} />
                                )
                            })
                        }
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text style={styles.checkTitle}>Select a center for Vaccination Test</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedFourItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFourItem(itemValue)
                        }>
                        <Picker.Item key="345543234" label="Select one"/>
                        {
                            allCenter.map((center)=>{
                                return (
                                    <Picker.Item key={center.id} label={center.name} value={center.id} />
                                )
                            })
                        }
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <DatePicker
                        style={{width: '100%'}}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate={currentDate}
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
                            setDate(currentMyDate);
                        }}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={() => {
                    const url = appUrl.Booster;
                    const config = {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ phone:phone, center_id:selectedFourItem, date:date })
                    };
                    //Alert.alert(url);

                    fetch(url,config)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            if (responseJson.status == "2")
                            {
                                Alert.alert(responseJson.message);
                                navigation.navigate("Booster Date Status");
                            } else if (responseJson.status == "1")
                            {
                                Alert.alert(responseJson.message);
                                navigation.navigate("Booster Date Status");
                            }else if(responseJson.status == "0"){
                                Alert.alert(responseJson.message);
                            }
                        })
                        .catch((error) => {
                            //Alert.alert("Failed to registration 2");
                        });
                }}>
                    <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Registration Now</Text>
                </TouchableOpacity>

            </View>

        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "90%",
        marginLeft: 10,
        justifyContent: 'center',
        flexDirection: "column"
    },
    firstView:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    pickerAllItem:{
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: "#d9b555",
        backgroundColor: "#d8d9e6",
        width: "100%",
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
        margin: 20,
        borderWidth: 1,
        height: 50,
        width: "95%",
        backgroundColor: "#2e47e8",
        borderRadius: 10
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
    // pickerItem:{
    //     borderRadius: 10,
    //     borderColor: "#d9b555",
    //     backgroundColor: "#ebecf2",
    //     width: "100%",
    //     fontSize: 20
    // }

})

export default Booster;


