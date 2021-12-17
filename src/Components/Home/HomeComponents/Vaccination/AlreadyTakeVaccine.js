import React from 'react';
import {StyleSheet, Text} from "react-native";

const AlreadyTakeVaccine = () => {
    return (
        <>
            <Text>New Registration</Text>
        </>
    );
};
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

    button: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: 'center',
        margin: 20,
        borderWidth: 1,
        height: 50,
        width: "90%",
        backgroundColor: "#00549F",
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

})
export default AlreadyTakeVaccine;