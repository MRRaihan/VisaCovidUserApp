import React from 'react'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity, Text } from 'react-native';
import { Card,Paragraph } from "react-native-paper";
import PCRImage from "../../../../../assets/images/done.png";
import PCRData from "./PCRStatusData";

const PCRTestStatus = ({route}) => {
    
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{width: "100%", height: 200, alignItems: 'center', backgroundColor: "#fff"}}>
                    <Image style={styles.PCRLogo} source={PCRImage} />
                </View>
                <Card style={styles.LivenessVideo}>
                    <TouchableOpacity>
                        <Text style={styles.video}>Liveness video!</Text>
                    </TouchableOpacity>
                </Card>
                {PCRData.map((val, ind) => {
                    return (
                        <Card style={styles.cardStyle}>
                        <Card.Content>
                        <View style={styles.testContents}>
                            <View style={styles.testStartItem}>
                                <Text>{val.pcrResult}</Text>
                                <Paragraph>{val.pcrDate}</Paragraph>
                                <Paragraph>{val.pcrValidaty}</Paragraph>
                                <Paragraph>{val.pcrCenter}</Paragraph>
                                <Paragraph>{val.pcrServedBy}</Paragraph>
                                <Paragraph>{val.pcrServedId}</Paragraph>
                                <Paragraph>{val.pcrReport}</Paragraph>
                            </View>
                            <View style={styles.testEndItem}>
                                <Paragraph>{val.pcrTestResult}</Paragraph>
                                <Paragraph>{val.pcrTestDate}</Paragraph>
                                <Paragraph>{val.pcrTestValidaty}</Paragraph>
                                <Paragraph>{val.pcrTestCenter}</Paragraph>
                                <Paragraph>{val.pcrTestServedBy}</Paragraph>
                                <Paragraph>{val.pcrTestServedId}</Paragraph>
                            <TouchableOpacity>
                                <Paragraph style={{ color: "blue" }}>
                                    {val.pcrTestReport}
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
        marginBottom: 20
        
    },
    PCRLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height:  150,
        width: 170,
        marginTop: 25,
    },
    button:{
        backgroundColor:'#ff6b6b',
        borderRadius: 10,
        padding: 15,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 10
    },
    cardStyle: {
        backgroundColor: "white",
        width: "95%",
        height: 230,
        marginTop: 10,
        borderRadius: 10
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
        marginTop: 138
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

export default PCRTestStatus;
