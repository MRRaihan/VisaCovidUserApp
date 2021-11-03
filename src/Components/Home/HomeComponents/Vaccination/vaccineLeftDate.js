import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const vaccineLeftDate = (props) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.statusText}>You have registered for the Vaccination</Text>
                <View style={styles.dateTimesStatus}>
                    <View style={styles.leftTime}>
                        <Text style={styles.leftDates}>14</Text>
                        <Text style={styles.leftMiddle}>:</Text>
                        <Text style={styles.leftHours}>10</Text>
                    </View>
                    <View style={styles.timeBottomTitte}>
                        <Text style={styles.leftDatesText}>Days</Text>
                        <Text style={styles.leftHoursText}>Hours</Text>
                    </View>
                </View>
                <Card style={{paddingRight: 20, marginTop: 30}}>
                    <View style={styles.pickLocation}>
                        <Text style={{fontSize: 20, color: "#050505"}}>House 24, Road 03, Sector 04, Uttara Dhaka, Bangladesh</Text>
                    </View>
                </Card>
                <TouchableOpacity style={styles.button} onPress={() => {
                        props.navigation.navigate("");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Ready to Vaccination</Text>
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
        fontSize: 20,
        justifyContent: 'center',
        textAlign: "center",
        padding: 20,
        color: "#a0a2a3",
        fontWeight: "bold"
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
        margin: 20,
        borderWidth: 1,
        height: 50,
        width: "90%",
        backgroundColor: "#2e47e8",
        borderRadius: 10
    },

})

export default vaccineLeftDate;
