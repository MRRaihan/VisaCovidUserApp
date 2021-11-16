import React from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Card, Title, Paragraph } from "react-native-paper";
import BoosterImage from "../../../../../assets/images/Booster.png";
import BoosterData from "./BoosterStatusData";

const BoosterStatus = ({route}) => {
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                <Image style={styles.VaccineLogo} source={BoosterImage} />
                </View>
                <Card style={styles.LivenessVideo}>
                    <TouchableOpacity>
                        <Text style={styles.video}>Liveness video!</Text>
                    </TouchableOpacity>
                </Card>
                {BoosterData.map((val, ind) => {
                    return (
                        <Card style={styles.cardStyle}>
                        <Card.Content>
                        <Title>{val.title}</Title>
                        <View
                            style={{
                            borderBottomColor: "#e8e2e1",
                            borderBottomWidth: 2,
                            marginTop: 2,
                            }}
                        />

                        <View style={styles.testContents}>
                            <View style={styles.testStartItem}>
                                <Paragraph>{val.vaccinationDate}</Paragraph>
                                <Paragraph>{val.vaccineCenter}</Paragraph>
                                <Paragraph>{val.servedBy}</Paragraph>
                                <Paragraph>{val.servedId}</Paragraph>
                                <Paragraph>{val.report}</Paragraph>
                            </View>
                            <View style={styles.testEndItem}>
                                <Paragraph>{val.vaccinationFixedDate}</Paragraph>
                                <Paragraph>{val.covidTestCenter}</Paragraph>
                                <Paragraph>{val.covidServedBy}</Paragraph>
                                <Paragraph>{val.covidServedId}</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: "blue" }}>
                                {val.testReport}
                                </Paragraph>
                            </TouchableOpacity>
                            </View>
                        </View>
                        </Card.Content>
                    </Card>
                    
                    );
                })}
            </View>
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
    VaccineLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  180,
        width: 180,
        marginTop: 25,
        marginBottom: 10
    },
    button:{
        backgroundColor:'#ff6b6b',
        borderRadius: 10,
        padding: 15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
    },
    text:{
        fontSize: 20,
        color:'#fff',
    },
    cardStyle: {
        backgroundColor: "white",
        width: "95%",
        height: 230
    },
    testContents: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        height: 40
    },
    testStartItem: {
        justifyContent: "flex-start",
    },
    testEndItem: {
        justifyContent: "flex-end",
        marginTop: 100
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

export default BoosterStatus;
