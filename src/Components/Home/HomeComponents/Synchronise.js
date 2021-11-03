import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { Checkbox } from 'react-native-paper';

import BeAware from "../../../../assets/images/BeAware.png";

const Synchronise = (props) => {
    const [personalDataChecked, setPersonalDataChecked] = React.useState(false);
    const [diagnosisDataChecked, setDiagnosisDataChecked] = React.useState(false);
    const [PCRDataChecked, setPCRDataChecked] = React.useState(false);
    const [vaccinationDataChecked, setVaccinationDataChecked] = React.useState(false);
    const [biometricDataChecked, setBiometricDataChecked] = React.useState(false);
    return (
        <ScrollView>
            <View style={StyleSheet.container}>

            <View>
            <Text style={styles.mainTitle}>Trusted app for Bahrain</Text>
            <Card style={styles.cardStyleCovidVisa}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                    <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: "#050505" }}>Be Aware</Text> 
                        <Text style={{ color: "#050505" }}>United against COVID-19</Text>
                    </View>
                    <View style={{justifyContent: "flex-end", height: 100}}>
                        <Image style={styles.ImageShow} source={BeAware} /> 
                    </View>
                </View>
            </Card>
            </View>

            <View>
            <Text style={styles.mainTitle}>Trusted app for Bangladesh</Text>
            <Card style={styles.cardStyleSurokkha}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                    <View style={{flexDirection:"column", justifyContent: "flex-start", padding: 10}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: "#050505" }}>Surokkha</Text> 
                        <Text style={{ color: "#050505" }}>United against COVID-19</Text>
                    </View>
                    <View style={{justifyContent: "flex-end", height: 100}}>
                        <Image style={styles.ImageShow} source={BeAware} /> 
                    </View>
                </View>
            </Card>
            </View>

            <View style={styles.checkboxViewStyle}>
            <Text style={styles.mainTitle}>Synchronise</Text>
                <View
                    style={{
                    borderBottomColor: "#e8e2e1",
                    borderBottomWidth: 2,
                    marginTop: 13,
                    }}
                />
                <View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 5, marginTop: 5}}>
                    <Checkbox
                        status={personalDataChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setPersonalDataChecked(!personalDataChecked);
                        }}
                    /><Text style={styles.checkData}>Personal Data</Text>
                </View>

                <View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 2}}>
                    <Checkbox
                        status={diagnosisDataChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setDiagnosisDataChecked(!diagnosisDataChecked);
                        }}
                    /><Text style={styles.checkData}>Diagnosis Data</Text>
                </View>

                <View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 2}}>
                    <Checkbox
                        status={PCRDataChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setPCRDataChecked(!PCRDataChecked);
                        }}
                    /><Text style={styles.checkData}>PCR Data</Text>
                </View>

                <View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 2}}>
                    <Checkbox
                        status={vaccinationDataChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setVaccinationDataChecked(!vaccinationDataChecked);
                        }}
                    /><Text style={styles.checkData}>Vaccination Data</Text>
                </View>

                <View style={{flexDirection: "row", width:"80%", marginLeft: 10, padding: 2}}>
                    <Checkbox
                        status={biometricDataChecked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setBiometricDataChecked(!biometricDataChecked);
                        }}
                    /><Text style={styles.checkData}>Biometric Data</Text>
                </View>

            </View>

            <View>
                <Text style={styles.downloadInstallStyle}>N.B- Download & Install be Aware app</Text>
                <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        props.navigation.navigate("Home");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Synchronize & Exit</Text>
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
    mainTitle:{
        fontSize: 20,
        paddingTop:10,
        marginTop: 15,
        marginBottom: -10,
        marginLeft: 20,
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
        borderWidth: 1,
        height: 50,
        width: "90%",
        backgroundColor: "#2e47e8",
        borderRadius: 10
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