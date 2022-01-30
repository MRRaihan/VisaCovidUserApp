import React from 'react'
import { View, Text, ScrollView, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button } from "react-native-paper";
import CovidVisa from "../../../assets/images/logo.png";
import BeAware from "../../../assets/images/BeAware.png";
import Scan from "../../../assets/images/scan.png";
import Battery from "../../../assets/images/battery.png";
import PCRTest from "../../../assets/images/done.png";
import Vaccination from "../../../assets/images/Vaccination.png"
import ArtboardData from './MadeData/ArtboardData';

const ArtBoard = () => {
    return (

        <ScrollView>
            <SafeAreaView styl={styles.container}>
                <View styl={styles.container}>
                <Card >
                    <View style={styles.HeaderCard}>
                        <View style={{flexDirection: "column", width: "65%",}}>
                            <Title>Covid-19 Health Report</Title>
                            <Paragraph>Authentication by trusted service providers of Bangladesh(Covid Visa) and Bahrain(Be Aware)</Paragraph>
                        </View>
                        <View style={{flexDirection: "column", width: "30%", justifyContent:"center", alignContent: "center"}}>
                            <Card.Cover style={{width: 100, height: 80, padding: 5, margin: 2, borderRadius: 10}} source={CovidVisa} />
                            <Card.Cover style={{width: 100, height: 80, padding: 5, margin: 2, borderRadius: 10}}  source={BeAware} />
                        </View>
                    </View>
                </Card>
                <View style={{ flexDirection: "row"}}>
                    <View style={{width: "70%", padding: 20}}>
                        {ArtboardData.map((val, ind) => {
                            return (
                                <View style={styles.testContents}>
                                    <View style={styles.testStartItem}>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.name}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.passport}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.country}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.email}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.mobile}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.dateOfBirth}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.boardingTo}</Paragraph>
                                        <Paragraph style={{fontWeight: 'bold'}}>{val.healthStatus}</Paragraph>
                                    </View>
                                    <View style={styles.testEndItem}>
                                    <Paragraph>{val.nameValue}</Paragraph>
                                        <Paragraph>{val.passportValue}</Paragraph>
                                        <Paragraph>{val.countryValue}</Paragraph>
                                        <Paragraph>{val.emailValue}</Paragraph>
                                        <Paragraph>{val.mobileValue}</Paragraph>
                                        <Paragraph>{val.dateOfBirthValue}</Paragraph>
                                        <Paragraph>{val.boardingToValue}</Paragraph>
                                        <Paragraph>{val.healthStatusValue}</Paragraph>
                                    </View>
                                </View>
                            
                            );
                        })}
                    </View>
                    <View style={{flexDirection: "column", width: "40%", justifyContent:"center", alignContent: "center", padding: 10}}>
                        <Card.Cover style={{width: 130, height: 100, marginLeft: -10, borderRadius: 10}}  source={Scan} />
                        <View style={{flexDirection: "row", marginLeft: -10, }}>
                            <Text style={{fontWeight: "bold", color:"#050505"}}>ID: </Text>
                            <Text style={{ color:"#050505"}}>954 322 541</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: "column", padding: 10, marginRight: 7, marginBottom: 30}}>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity style={{width: "50%", height: 120, justifyContent: "center", alignContent: "center"}}>
                            <Card style={{width: "100%", height: 120, justifyContent: "center", alignContent: "center"}}>
                                <Card.Cover style={styles.batteryIcon} source={Battery} />
                            </Card>
                        </TouchableOpacity>
                        <View style={{flexDirection: "column", justifyContent: "center", marginLeft: 15, color: "#050505"}}>
                            <Text style={{fontWeight: "bold", color: "#050505"}}>Natural Antibody</Text>
                            <Text style={styles.dataStatus}>Recovered at <Text style={{fontWeight: "bold", color: "#050505"}}>21-03-2021</Text></Text>
                            <Text style={styles.dataStatus}>Antibody left <Text style={{fontWeight: "bold", color: "#050505"}}> 55 </Text>days</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: "row", marginTop: 20}}>
                    <View style={{width: "46%", flexDirection: "column", justifyContent: "center", marginLeft: 15}}>
                            <Text style={styles.dataStatus}>Vaccinated <Text>Moderna</Text></Text>
                            
                            <Text style={styles.dataStatus}>Date: <Text style={{fontWeight: "bold"}}> 12-06-2021 </Text></Text>
                        </View>
                        <TouchableOpacity style={{width: "50%", height: 120, justifyContent: "center", alignContent: "center", marginRight: 30}}>
                            <Card style={{width: "100%", height: 120, justifyContent: "center", alignContent: "center", marginRight: 20}}>
                                <Card.Cover style={{width: 110, height: 100, marginTop: 10, marginLeft:30, borderRadius: 10, justifyContent: "center", alignContent: "center"}} source={Vaccination} />
                            </Card>
                        </TouchableOpacity>
                        
                    </View>

                    <View style={{flexDirection: "row", marginTop: 20 }}>
                    <TouchableOpacity style={{width: "50%", height: 120, justifyContent: "center", alignContent: "center"}}>
                        <Card style={{width: "100%", height: 120, justifyContent: "center", alignContent: "center"}}>
                            <Card.Cover style={{width: 120, height: 110, marginTop: 5, marginLeft:23, borderRadius: 10, justifyContent: "center", alignContent: "center"}} source={PCRTest} />
                        </Card>
                    </TouchableOpacity>
                        <View style={{width: "50%", flexDirection: "column", justifyContent: "center", marginLeft: 15}}>
                            <Text style={styles.dataStatus}>PCR Tested <Text>Covid Negative</Text></Text>
                            
                            <Text style={styles.dataStatus}>Date: <Text style={{fontWeight: "bold"}}> 12-06-2021 </Text></Text>
                        </View>
                    </View>
                </View>

                <Card>
                <View style={{flexDirection: "column"}}>
                    <Text style={{fontSize: 17, padding: 10, color:"#050505"}}>
                        The COVID-19 report of <Text>Mr Munzurul Alam</Text> is issued on <Text>12th July 2021</Text>,<Text> 01:15 PM</Text> by <Text>Kuet Moitri Hospital-1234563.</Text>
                    </Text>
                    <Text style={styles.personStatus}>
                        This is report valid till <Text>14th July 2021</Text> Bangladesh time.
                    </Text>
                    <Text style={styles.personStatus}>
                        For more details please scan the QR code  or enter the ID number on CovidVisa app. <Text>Thank You</Text>
                    </Text>
                    <Text style={styles.personStatus}>
                        <Text>Ekramul Haque</Text> - <Text>1234321</Text>
                    </Text>
                    <Text style={{fontSize: 17, paddingBottom: 15, paddingLeft: 10, }}>Validation Officer</Text>
                </View>
                </Card>

                <View style={{flexDirection:"row",justifyContent:"space-between", marginTop: 20}}>
                    <Button labelStyle={{ fontSize: 16 }} icon="copyright">CovidVisa 2021</Button>
                    <Button labelStyle={{ fontSize: 16 }} icon="">21-07-2021</Button>
                </View>
            </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
    },
    HeaderCard:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "95%",
        padding: 20
    },
    testContents: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "row",
        paddingTop: 5,
    },
    testStartItem: {
        justifyContent: "flex-start",
    },
    testEndItem: {
        justifyContent: "flex-end",
    },
    batteryIcon:{
        width: 140,
        height: 80,
        marginTop: 20,
        marginLeft:15,
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center"
    },
    vaccinationIcon:{

    },
    dataStatus:{
        color:"#050505"
    },
    personStatus:{
        fontSize: 17,
        padding: 10,
        color:"#050505"
    }

})

export default ArtBoard;
