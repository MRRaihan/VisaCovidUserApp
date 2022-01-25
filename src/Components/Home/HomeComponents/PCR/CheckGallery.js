import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { Card } from "react-native-paper";

class CheckGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
          images: [
            require('../../../../../assets/images/bKash.png'),
            require('../../../../../assets/images/master.png'),
            require('../../../../../assets/images/nagod.png'),
            require('../../../../../assets/images/visa.png'),
          ]
        };
      }
      render() {
        return (
          <View style={styles.container}>
            <Card style={styles.CardImage}>
                <TouchableOpacity style={{flexDirection: "row"}}>
                    <SliderBox 
                    style={styles.Image}
                    images={this.state.images}
                    onCurrentImagePressed={index =>
                        console.warn(`Card ${index} pressed`)
                    }
                    />
                </TouchableOpacity>
            </Card>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    CardImage:{
        flexDirection: "row",
    },
    Image:{
        width: "90%",
        height: 100,
        padding: 10,
        marginRight: 30,
    }
})

export default CheckGallery;
