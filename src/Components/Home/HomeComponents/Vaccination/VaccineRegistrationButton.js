import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";

const VaccineRegistrationButton = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        navigation.navigate("Already TakeVaccine");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 16}}>Already Take Vaccine</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.button} onPress={()=>{
                        navigation.navigate("Vaccine Registration");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 16}}>New Registration</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        height: 50,
        width: "90%",
        backgroundColor: "#00549F",
        borderRadius: 6
    },
    checkTitle:{
        fontSize:15,
        color: "#050505",
        marginTop: 5,
    },
    checkItemColor:{
        color: "#050505"
    }

})

export default VaccineRegistrationButton;