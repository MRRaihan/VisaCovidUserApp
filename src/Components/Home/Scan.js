import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView} from "react-native";
import { Card } from "react-native-paper";

import AntibodyLogo from "../../../assets/images/faceRecognition.png";

const UserProfile = (props) => {
  const [userId, setUserId] = useState();

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.AntibodyLogo}>
        <Image style={styles.AntibodyLogoImg} source={AntibodyLogo} />
        <View style={styles.UserID}>
          <View style={styles.UserIdStart}>
          <Text style={{ width: "100%", marginLeft: "27%", color: "#050505"}}>ID: <Text style={{fontWeight: "bold", padding: 10}}>954 322 541</Text> </Text>
          </View>
        </View>
      </View>

      <Card style={styles.cardStyle}>
        <View style={{ paddingTop: 10 }}>
          <Text style={styles.testStyle}>COVID-19 Antibody</Text>
          <View
            style={{
              borderBottomColor: "#e8e2e1",
              borderBottomWidth: 2,
              marginBottom: 10,
            }}
          />
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Last affected</Text>
            <Text style={styles.testEndItem}>12 Sep 2021</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Recovered</Text>
            <Text style={styles.testEndItem}>22 Sep 2021</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Antibody Remaining</Text>
            <Text style={styles.testEndItem}>4 mon 14 days</Text>
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Text style={styles.testStyle}>PCR Test</Text>
          <View
            style={{
              borderBottomColor: "#e8e2e1",
              borderBottomWidth: 2,
              marginBottom: 10,
            }}
          />
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Last Test</Text>
            <Text style={styles.testEndItem}>12 Sep 2021</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Last result</Text>
            <Text style={styles.testEndItem}>Negative</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Test Center</Text>
            <Text style={styles.testEndItem}>UTTPS</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Test Location</Text>
            <Text style={styles.testEndItem}>Dhaka</Text>
          </View>
        </View>

        <View style={{ paddingTop: 10 }}>
          <Text style={styles.testStyle}>Vaccine</Text>
          <View
            style={{
              borderBottomColor: "#e8e2e1",
              borderBottomWidth: 2,
              marginBottom: 10,
            }}
          />
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Dose 1</Text>
            <Text style={styles.testEndItem}>No data</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Dose 2</Text>
            <Text style={styles.testEndItem}>No data</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Vaccine name</Text>
            <Text style={styles.testEndItem}>No data</Text>
          </View>
          <View style={styles.testContents}>
            <Text style={styles.testStartItem}>Vaccine center</Text>
            <Text style={styles.testEndItem}>No data</Text>
          </View>
        </View>
      </Card>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  AntibodyLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "70%",
    padding: 10,
    margin: 10,
  },
  AntibodyLogoImg: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  cardStyle: {
    padding: 10,
    marginTop: 50,
    backgroundColor: "white",
    width: "90%",
    height: "auto",
    borderRadius: 8,
  },
  testStyle: {
    flex: 1,
    fontSize: 20,
    justifyContent: "flex-start",
    paddingTop: 10,
    color: "#050505",
    fontWeight: "bold"
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
  },
  testStartItem:{
    color: "#050505",
    fontWeight: "bold"
  },
  testEndItem:{
    color: "#050505",
  },
  UserID: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    padding: 5,
    marginBottom: 5,
    height: 50,
    width: "80%",
  },
  UserIdStart: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  UserIdEnd: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
  },
  testContentEdit:{
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 10,
    marginTop: 30
  }
});

export default UserProfile;
