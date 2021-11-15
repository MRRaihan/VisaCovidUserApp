import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import AntibodyData from "../../MadeData/AntibodyData";
import AntibodyLogo from "../../../../../assets/images/battery.png";

const Antibody = () => {
  return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.AntibodyLogo}>
            <Image style={styles.AntibodyLogoImg} source={AntibodyLogo} />
          </View>
          {AntibodyData.map((val, ind) => {
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
                      <Paragraph style={styles.itemColor}>{val.result}</Paragraph>
                      <Paragraph>{val.testDate}</Paragraph>
                      <Paragraph>{val.antibodyLeft}</Paragraph>
                      <Paragraph>{val.testCenter}</Paragraph>
                      <Paragraph>{val.servedBy}</Paragraph>
                      <Paragraph>{val.servedId}</Paragraph>
                      <Paragraph>{val.report}</Paragraph>
                    </View>
                    <View style={styles.testEndItem}>
                      <Paragraph>{val.resultOfPerson}</Paragraph>
                      <Paragraph>{val.personTestDate}</Paragraph>
                      <Paragraph>{val.pwesonAntibodyLeft}</Paragraph>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingBottom: 40,

  },
  cardStyle: {
    backgroundColor: "white",
    width: "90%",
    height: 230
  },
  testContents: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 5,
    height: 40
  },
  testStartItem: {
    justifyContent: "flex-start",
  },
  testEndItem: {
    justifyContent: "flex-end",
    marginTop: 130
  },
  AntibodyLogo: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "20%",
    padding: 10,
    margin: 10,
  },
  AntibodyLogoImg: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 125,
  },
  itemColor:{
    color: "#050505"
  }
});

export default Antibody;
