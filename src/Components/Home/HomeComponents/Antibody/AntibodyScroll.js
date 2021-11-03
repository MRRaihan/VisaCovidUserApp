import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Antibody from "./Antibody";

const AntibodyScroll = () => {
    return (
        <ScrollView style={styles.container}>
            <Antibody />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "100%"
    }
})

export default AntibodyScroll;
