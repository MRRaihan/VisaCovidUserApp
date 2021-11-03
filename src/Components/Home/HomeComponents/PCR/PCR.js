import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView  } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import MapView from 'react-native-maps';

const PCR = (props) => {
    const [selectedFirstItem, setSelectedFirstItem] = useState();
    const [selectedSecondItem, setSelectedSecondItem] = useState();
    const [selectedThirdItem, setSelectedThirdItem] = useState();
    const [selectedFourItem, setSelectedFourItem] = useState();
    const [selectedFiveItem, setSelectedFiveItem] = useState();
    

    return (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.firstView}>
                <View style={styles.pickerAllItem}>
                <Text  style={styles.checkTitle}>Select a Country</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedFirstItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFirstItem(itemValue)
                    }>
                        <Picker.Item label="Bangladesh" value="Bangladesh" />
                        <Picker.Item label="Argentina" value="Argentina" />
                        <Picker.Item label="Brazil" value="Brazil" />
                        <Picker.Item label="Germany" value="Germany" />
                    </Picker>
                </View>
                <View style={styles.pickerAllItem}>
                    <Text  style={styles.checkTitle}>Select a City</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedSecondItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedSecondItem(itemValue)
                    }>
                        <Picker.Item label="Dhaka" value="Dhaka" />
                        <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                        <Picker.Item label="Sao Paulo" value="Sao Paulo" />
                        <Picker.Item label="Berlin" value="Berlin" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text  style={styles.checkTitle}>Select a Zone</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedThirdItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedThirdItem(itemValue)
                    }>
                        <Picker.Item label="Uttara" value="Uttara" />
                        <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                        <Picker.Item label="Sao Paulo" value="Sao Paulo" />
                        <Picker.Item label="Berlin" value="Berlin" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text  style={styles.checkTitle}>Select a center for PCR Test</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedFourItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFourItem(itemValue)
                    }>
                        <Picker.Item label="Kuet Moitri Medical" value="Kuet Moitri Medical" />
                        <Picker.Item label="Argentina Medical Center" value="Argentina Medical Center" />
                        <Picker.Item label="Brazil Medical Center" value="Brazil Medical Center" />
                        <Picker.Item label="Germany Medical Center" value="Germany Medical Center" />
                    </Picker>
                </View>

                <View style={styles.pickerAllItem}>
                    <Text  style={styles.checkTitle}>Select a Date</Text>
                    <Picker
                        style={styles.checkItemColor}
                        selectedValue={selectedFiveItem}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFiveItem(itemValue)
                    }>
                        <Picker.Item label="12 / 07 / 2020" value="12 / 07 / 2020" />
                    </Picker>
                </View>


                <TouchableOpacity style={styles.button} onPress={() => {
                            props.navigation.navigate("PCR Payment Method");
                    }}>
                        <Text style={{textAlign:"center", color: "white", fontSize: 20}}>Register</Text>
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

})

export default PCR;
