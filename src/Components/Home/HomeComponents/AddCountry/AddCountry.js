import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Card } from 'react-native-elements';

const AddCountry = (props) => {
    const [fromAddress, setfromAddress] = useState();
    const [toAddress, settoAddress] = useState();
    

    return (
            <Card style={styles.container}>
                <View style={styles.itemView}>
                    <Text style={{fontSize: 19, fontWeight: 'bold', color: "#050505"}}>From</Text>
                    <Picker
                    itemStyle={{color:'#050505'}}
                    style={{color: "#050505", backgroundColor: '#e1e8eb'}}
                        selectedValue={fromAddress}
                        onValueChange={(itemValue, itemIndex) =>
                            setfromAddress(itemValue)
                    }>
                        <Picker.Item label="Bangladesh" value="Bangladesh" />
                        <Picker.Item label="Argentina" value="Argentina" />
                        <Picker.Item label="Brazil" value="Brazil" />
                        <Picker.Item label="Germany" value="Germany" />
                        <Picker.Item label="Baharain" value="Baharain" />
                        <Picker.Item label="China" value="China" />
                        <Picker.Item label="Dubai" value="Dubai" />
                        <Picker.Item label="Arab" value="Arab" />
                    </Picker>
                </View>

                <View style={styles.itemView}>
                    <Text style={{fontSize: 19, fontWeight: 'bold', color: "#050505"}}>To</Text>
                    <Picker
                        style={{color: "#050505", backgroundColor: '#e1e8eb'}}
                        selectedValue={toAddress}
                        onValueChange={(itemValue, itemIndex) =>
                            settoAddress(itemValue)
                    }>
                        
                        <Picker.Item label="Argentina" value="Argentina" />
                        <Picker.Item label="Bangladesh" value="Bangladesh" />
                        <Picker.Item label="Brazil" value="Brazil" />
                        <Picker.Item label="Germany" value="Germany" />
                        <Picker.Item label="Baharain" value="Baharain" />
                        <Picker.Item label="China" value="China" />
                        <Picker.Item label="Dubai" value="Dubai" />
                        <Picker.Item label="Arab" value="Arab" />
                    </Picker>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', width:"100%"}}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        props.navigation.navigate("Synchronise");
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
