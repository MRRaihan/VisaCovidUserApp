import * as React from "react";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { TouchableOpacity, StyleSheet, View, Text,Image, ScrollView} from "react-native";

import UpSlider from "../../../assets/images/slider.png";
import Antibody from "../../../assets/images/battery.png";

import PCR from "../../../assets/images/done.png";
import Vaccination from "../../../assets/images/Vaccination.png";
import AddCountry from "../../../assets/images/CAddCountry.jpeg";
import Booster from "../../../assets/images/CBooster.jpeg";


const Home = (props) =>{
    return(
        <ScrollView>
          <View style={styles.container}>
            <Card style={styles.Slider}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5}}>
                <View style={{color:"white", flexDirection: "column", justifyContent:'flex-start', width:"55%", padding:5}}>
                  <Title>Covid increasing at Bahrain</Title>
                  <Paragraph>Bangladesh fight limited & 10 days quarantine is must.</Paragraph>
                </View>
                <View style={{justifyContent:'flex-end', width:"44%", padding:5, height: 150, }}>
                <Card.Cover style={{width:"100%", height: 150}} source={UpSlider} />
                </View>
              </View>
            </Card>
            <View style={styles.healthData}>
              <Text style={styles.HelthTitle}>Health Data</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "95%"
                }}
              >
                <Card style={styles.fDataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Vaccination
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Vaccine Registration");
                    }}
                  >
                    <Image style={styles.vSliderImage} source={Vaccination} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Antibody
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Antibody");
                    }}
                  >
                    <Image style={styles.SliderImage} source={Antibody} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      PCR
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("PCR");
                    }}
                  >
                    <Image style={styles.pSliderImage} source={PCR} />
                  </TouchableOpacity>
                  </View>
                </Card>

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Booster
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -30
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Booster");
                    }}
                  >
                    <Image style={styles.bSliderImage} source={Booster} />
                  </TouchableOpacity>
                  </View>
                </Card>

                

                <Card style={styles.dataFlex}>
                  <View style={styles.CardInsideTitle}>
                    <Text
                      style={{
                        alignItems: "center",
                        flex: 1,
                        justifyContent: "center",
                        marginTop: 9,
                        fontSize: 18,
                        color: "#050505"
                      }}
                    >
                      Add Country
                    </Text>

                    <TouchableOpacity>
                      <Button
                        style={{
                          alignItems: "center",
                          flex: 1,
                          justifyContent: "space-between",
                          marginTop: 15,
                          marginRight: -25
                        }}
                        icon="information-outline"
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate("Add Country");
                    }}
                  >
                    <Image style={styles.adSliderImage} source={AddCountry} />
                  </TouchableOpacity>
                  </View>
                </Card>
                
              </View>
            </View>
          </View>
         </ScrollView>
    )
}


const styles = StyleSheet.create({
  container: {
    // flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 85,
  },
  Slider: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-between",
    height: 150,
    width: "100%",
    marginTop: 150,
    backgroundColor: "#718AEE",
    borderRadius: 10,
  },
  HelthTitle: {
    fontSize: 22,
    marginBottom: 10,
    marginTop: -50,
    color: "#050505"
  },
  healthData: {
    marginTop: 100,
  },
  fDataFlex: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    width: "80%",
    borderWidth: 2,
    marginTop: -220,
    marginBottom: 6,
    height: 250

  },
  dataFlex: {
    backgroundColor: "white",
    flexDirection: "row",
    padding: 10,
    width: "80%",
    borderWidth: 2,
    margin: 6,
    height: 250

  },
  CardInsideTitle: {
    flexDirection: "row",
    padding: 2,
    marginBottom: 20,
    marginTop: 10
  },
  SliderImage: {
    height: 100,
    width: "97%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 5
  },
  vSliderImage:{
    height: 150,
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 50
  },
  bSliderImage:{
    height: 140,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 15
  },
  pSliderImage:{
    height: 170,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -10,
    marginLeft: 40
  },
  adSliderImage:{
    height: 120,
    width: "88%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginLeft: 15
  },
});

export default Home;
