import React, {useEffect, useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

import { Icon } from 'react-native-elements';

import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import appUrl from '../../../../RestApi/AppUrl';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const AlreadyVaccinatedSecondDose = ({navigation}) => {
  const [phone, setPhone] = useState(null);
  const [vaccineNames, setVaccineNames] = useState([]);
  const [secondDose, setSecondDose] = useState('');
  const [description, setDescription] = useState(null);
  const [document, setDocument] = useState(null);
  const [formImage, setFormImage] = useState({});
  const [center, setCenter] = useState(null);
  const [centerLocation, setCenterLocation] = useState(null);
  const [selectedVaccine, setSelectedVaccine] = useState('');
  
  let [errorMessages, setErrorMessages] = useState({
      document : null,
      selectedVaccine : null,
      center : null,
      secondDose: null,
      description : null,
      centerLocation: null,
  });  
  let _onPressButton = () => {
    let newMessages = {
      document : null,
      selectedVaccine : null,
      selectedDose : null,
      center : null,
      secondDose: null,
      description : null,
      centerLocation: null,
    }
  
    // selectedVaccine
    if((selectedVaccine == null || selectedVaccine == '' || selectedVaccine == undefined ) ){
      newMessages.selectedVaccine = "Please select a Vaccine";
    }
    // center
    if((center == null || center == '' || center == undefined ) ){
      newMessages.center = "Please enter center name";
    }
    // centerLocation
    if((centerLocation == null || centerLocation == '' || centerLocation == undefined ) ){
      newMessages.centerLocation = "Please enter location";
    }
    // secondDose
    if((secondDose == null || secondDose == '' || secondDose == undefined ) ){
      newMessages.secondDose = "Please enter second dose date";
    }
    // description
    if((description == null || description == '' || description == undefined ) ){
      newMessages.description = "Please enter description";
    }
    // document
    if((document == null || document == '' || document == undefined ) ){
      newMessages.document = "Please choose a document";
    }
    setErrorMessages(newMessages);

    if((newMessages.document == null && newMessages.selectedVaccine == null && newMessages.center == null && newMessages.secondDose == null && newMessages.description == null && newMessages.centerLocation == null)){
      // console.log('ok')
      // return true;
      const url = appUrl.ExternalVaccinationDoseTwo;

      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'enctype': 'multipart/form-data',
        },
        body: JSON.stringify({
          document: formImage,
          phone: phone,
          vaccineName: selectedVaccine,
          center: center,
          secondDose: secondDose,
          selectedDose: '2nd Dose',
          description: description,
          centerLocation: centerLocation,
        }),
      };
     
      fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status == '2') {
          Alert.alert(responseJson.message);
        } else if (responseJson.status == '1') {
          Alert.alert(responseJson.message);
          navigation.navigate('Home');
        } else if (responseJson.status == '0') {
          Alert.alert(responseJson.message);
        }
      })
      .catch(error => {
        //Alert.alert("Failed to registration 2");
      });
    }else{
      // alert('not ok')
    }

  };

  useEffect(() => {
    AsyncStorage.getItem('phone').then(value => {
      setPhone(value);
    });
  }, []);

  useEffect(() => {
    const url = appUrl.VaccineNames;
    const config = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
        // Alert.alert(responseJson.status);
        if (responseJson.status == '1') {
          setVaccineNames(responseJson.vaccineName);
          // setSelectedVaccine(responseJson.vaccineName[0].name);
        } else if (responseJson.status == '0') {
          Alert.alert(responseJson.message);
        }
      })
      .catch(error => {
        //Alert.alert("Failed to registration 2");
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.inputTitle}>Select Vaccine</Text>
        <View style={styles.pickerView}>
          <Picker

            style={styles.checkItemColor}
            selectedValue={selectedVaccine}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedVaccine(itemValue);
              if((itemValue == null || itemValue == '' || itemValue == undefined ) ){
                setErrorMessages({...errorMessages,selectedVaccine:"Please select a Vaccine"})
              }else{
                setErrorMessages({...errorMessages,selectedVaccine:null})    
              }
            }}
            selectedValue={selectedVaccine}
            // value={selectedVaccine}
            >
            <Picker.Item key="12313131" label="Select one" />
            {vaccineNames.map(vaccine => {
              return (
                <Picker.Item
                  key={vaccine.id}
                  label={vaccine.name}
                  value={vaccine.name}
                />
              );
            })}
          </Picker>
          {(errorMessages.selectedVaccine != null || errorMessages.selectedVaccine  !='') ? <Text style={styles.errorText}>{errorMessages.selectedVaccine}</Text>:null}
        </View>

        <Text style={styles.inputTitle}>Center Name</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter center name"
            placeholderTextColor="#003f5c"
            onChangeText={(center) =>{ 
              setCenter(center)
              if((center == null || center == '' || center == undefined ) ){
                setErrorMessages({...errorMessages,center:"Please enter center name"})
              }else{
                setErrorMessages({...errorMessages,center:null})    
              }
            }}
            value={center} 
          />
          {(errorMessages.center != null || errorMessages.center  !='') ? <Text style={styles.errorText}>{errorMessages.center}</Text>:null}
        </View>

        <Text style={styles.inputTitle}>Center location</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter center location"
            placeholderTextColor="#003f5c"
            onChangeText={(location) => {
              setCenterLocation(location)
              if((location == null || location == '' || location == undefined ) ){
                setErrorMessages({...errorMessages,centerLocation:"Please enter location"})
              }else{
                setErrorMessages({...errorMessages,centerLocation:null})    
              }
            }}
          />
          {(errorMessages.centerLocation != null || errorMessages.centerLocation  !='') ? <Text style={styles.errorText}>{errorMessages.centerLocation}</Text>:null}
        </View>

        <Text style={styles.inputTitle}>Date of second dose</Text>
        <View>
          <DatePicker
            style={styles.datePickerStyle}
            date={secondDose}
            mode="date"
            format="YYYY-MM-DD"
            maxDate="2022-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => {
              var currentMyDate = moment(date).format('YYYY-MM-DD');
              setSecondDose(currentMyDate);
              if((currentMyDate == null || currentMyDate == '' || currentMyDate == undefined ) ){
                setErrorMessages({...errorMessages,secondDose:"Please enter second dose date"})
              }else{
                setErrorMessages({...errorMessages,secondDose:null})    
              }
            }}
          />
        </View>
        {(errorMessages.secondDose != null || errorMessages.secondDose  !='') ? <Text style={styles.errorText}>{errorMessages.secondDose}</Text>:null}

        <Text style={styles.inputTitle}>Description</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter description"
            multiline={true}
            numberOfLines={5}
            placeholderTextColor="#003f5c"
            onChangeText={(description) => {
              setDescription(description)
              if((description == null || description == '' || description == undefined ) ){
                setErrorMessages({...errorMessages,description:"Please enter description"})
              }else{
                setErrorMessages({...errorMessages,description:null})    
              }
            }}
          />
          {(errorMessages.description != null || errorMessages.description  !='') ? <Text style={styles.errorText}>{errorMessages.description}</Text>:null}
        </View>
        {document && <Image
          source={{ uri: document }}
          style={{ width:100, height:100, marginTop:18 }}
        />}

        <Text style={styles.inputTitle}>Document</Text>
          <TouchableOpacity
          style={styles.fileInput}
          onPress={() => {
            let options = {
              storageOptions: {
                  path: 'images',
                  mediaType: "image",
              },
              includeBase64:true
            };
            launchImageLibrary(options, (response) => {
        
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                setDocument(response.assets[0].uri)              
                // setFormImage(response.assets[0].base64)
                setFormImage({
                  uri: response.assets[0].uri,
                  type: response.assets[0].type,
                  name: response.assets[0].fileName,
                  // data: response.data
                  data: response.assets[0].base64
                })
                if((response.assets[0].uri == null || response.assets[0].uri == '' || response.assets[0].uri == undefined ) ){
                  setErrorMessages({...errorMessages,document:"Please choose a document"})
                }else{
                  setErrorMessages({...errorMessages,document:null})    
                }
            }
            });
          }}>
          <Text style={{textAlign: 'center', color: '#00549F', fontSize: 16,fontWeight: 'bold',}}>
          <Icon name='file' type='font-awesome' color='#00549F' /> Choose File
          </Text>
        </TouchableOpacity>
        {(errorMessages.document != null || errorMessages.document  !='') ? <Text style={styles.errorText}>{errorMessages.document}</Text>:null}
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => {

            const url = appUrl.ExternalVaccinationDoseTwo;

            const config = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'enctype': 'multipart/form-data',
              },
              body: JSON.stringify({
                document: formImage,
                phone: phone,
                vaccineName: selectedVaccine,
                center: center,
                secondDose: secondDose,
                selectedDose: '2nd Dose',
                description: description,
                centerLocation: centerLocation,
              }),
            };
           
            fetch(url, config)
              .then(response => response.json())
              .then(responseJson => {
                if (responseJson.status == '2') {
                  Alert.alert(responseJson.message);
                } else if (responseJson.status == '1') {
                  Alert.alert(responseJson.message);
                  navigation.navigate('Home');
                } else if (responseJson.status == '0') {
                  Alert.alert(responseJson.message);
                }
              })
              .catch(error => {
                //Alert.alert("Failed to registration 2");
              });
          }}>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            Submit
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          style={styles.button}
          onPress={
            _onPressButton
          }>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  inputTitle: {
    color: '#00549F',
    paddingVertical: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  inputView: {
    backgroundColor: '#ffffff',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 6,
    width: '95%',
    height: 50,
    marginBottom: 5,
  },
  pickerView: {
    backgroundColor: '#ffffff',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 6,
    width: '95%',
    height: 52,
    marginBottom: 10,
  },
  TextInput: {
    color: '#ddd',
  },
  datePickerStyle: {
    width: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 45,
    width: '95%',
    backgroundColor: '#00549F',
    borderRadius: 6,
    marginVertical: 10,
  },
  fileInput: {
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    width: '95%',
  },
  checkItemColor: {
    color: '#050505',
  },
  errorText:{
    color: 'red',
    textAlign:"left",
    fontWeight:"bold",
  },
});
export default AlreadyVaccinatedSecondDose;