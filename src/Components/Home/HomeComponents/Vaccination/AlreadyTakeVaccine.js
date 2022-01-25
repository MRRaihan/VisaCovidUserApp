import React, {useEffect, useState} from 'react';
import {launchImageLibrary,ImagePicker} from 'react-native-image-picker';
import { Icon } from 'react-native-elements';

import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import appUrl from '../../../../RestApi/AppUrl';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';

const AlreadyTakeVaccine = ({navigation}) => {
  const [phone, setPhone] = useState(null);
  const [vaccineNames, setVaccineNames] = useState([]);
  const [firstDose, setFirstDose] = useState('');
  const [secondDose, setSecondDose] = useState('');
  const [description, setDescription] = useState(null);
  const [document, setDocument] = useState(null);
  const [center, setCenter] = useState(null);
  const [centerLocation, setCenterLocation] = useState(null);

  // new added by arafat
  const [vaccineDoses, setVaccineDoses] = useState([
    '1st Dose',
    '2nd Dose',
    'Both Dose',
  ]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [selectedDose, setSelectedDose] = useState('1st Dose');
  const [selectedVaccine, setSelectedVaccine] = useState('');

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
        } else if (responseJson.status == '0') {
          Alert.alert(responseJson.message);
        }
      })
      .catch(error => {
        //Alert.alert("Failed to registration 2");
      });
  }, []);

  useEffect(() => {
    console.log(selectedDose);
    console.log(selectedVaccine);
    console.log(center);
    console.log(centerLocation);
    console.log(secondDose);
    console.log(description);
    console.log(firstDose);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {(errorMessages != null) ?<View>
            {errorMessages.map(message => {
                return (
                <Text>{message}</Text>
                );
            })}
        </View>:null}
        {console.log(errorMessages)}
        <Text style={styles.inputTitle}>Select Dose</Text>
        <View style={styles.pickerView}>
          <Picker
            style={styles.checkItemColor}
            selectedValue={selectedDose}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedDose(itemValue);
            }}>
            <Picker.Item key="165161651" label="Select one" />
            {vaccineDoses.map(dose => {
              return <Picker.Item key={dose} label={dose} value={dose} />;
            })}
          </Picker>
        </View>

        <Text style={styles.inputTitle}>Select Vaccine</Text>
        <View style={styles.pickerView}>
          <Picker
            style={styles.checkItemColor}
            selectedValue={selectedVaccine}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedVaccine(itemValue);
            }}>
            <Picker.Item key="165161651" label="Select one" />
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
        </View>

        <Text style={styles.inputTitle}>Center Name</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter center name"
            placeholderTextColor="#003f5c"
            onChangeText={center => setCenter(center)}
          />
        </View>

        <Text style={styles.inputTitle}>Center location</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter center location"
            placeholderTextColor="#003f5c"
            onChangeText={location => setCenterLocation(location)}
          />
        </View>

        {selectedDose === '1st Dose' || selectedDose === 'Both Dose' ? (
          <>
            <Text style={styles.inputTitle}>Date of first dose</Text>
            <View>
              <DatePicker
                style={styles.datePickerStyle}
                date={firstDose}
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
                  setFirstDose(currentMyDate);
                }}
              />
            </View>
          </>
        ) : null}

        {selectedDose === '2nd Dose' || selectedDose === 'Both Dose' ? (
          <>
            <Text style={styles.inputTitle}>Date of second dose</Text>
            <View>
              <DatePicker
                style={styles.datePickerStyle}
                date={secondDose}
                minDate={firstDose}
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
                }}
              />
            </View>
          </>
        ) : null}

        <Text style={styles.inputTitle}>Description</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Enter description"
            multiline={true}
            numberOfLines={5}
            placeholderTextColor="#003f5c"
            onChangeText={description => setDescription(description)}
          />
        </View>

        <Text style={styles.inputTitle}>Document</Text>
          <TouchableOpacity
          style={styles.fileInput}
          onPress={() => {
            let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            };
            launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
        
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                // this.setState({
                // filePath: response,
                // fileData: response.data,
                // fileUri: response.uri
                // });

                setDocument(response.data)
                // console.log(document)
            }
            });
          }}>
          <Text style={{textAlign: 'center', color: '#00549F', fontSize: 16,fontWeight: 'bold',}}>
          <Icon name='file' type='font-awesome' color='#00549F' /> Choose File
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            const url = appUrl.ExternalVaccination;
            const config = {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'enctype': 'multipart/form-data',
              },
              body: JSON.stringify({
                phone: phone,
                vaccineName: selectedVaccine,
                firstDose: firstDose,
                secondDose: secondDose,
                selectedDose: selectedDose,
                description: description,
                document: document,
                center: center,
                centerLocation: centerLocation,
              }),
            };

            fetch(url, config)
              .then(response => response.json())
              .then(responseJson => {
                // console.log(responseJson)
                if (responseJson.status == '2') {
                  Alert.alert(responseJson.message);
                } else if (responseJson.status == '1') {
                  Alert.alert(responseJson.message);
                  navigation.navigate('Home');
                } else if (responseJson.status == '0') {
                  Alert.alert(responseJson.message);
                } else if (responseJson.status == '3') {
                  setErrorMessages(responseJson.messages.toArray())
                // Alert.alert(responseJson.messages);

                }
              })
              .catch(error => {
                //Alert.alert("Failed to registration 2");
              });
          }}>
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

  pickerAllItem: {
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderColor: '#d9b555',
    backgroundColor: '#d8d9e6',
    width: '100%',
  },
  inputTitle: {
    color: '#00549F',
    paddingVertical: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
  firstView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputView: {
    backgroundColor: '#ffffff',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 6,
    width: '95%',
    height: 40,
    marginBottom: 5,
  },
  pickerView: {
    backgroundColor: '#ffffff',
    borderColor: '#0f0f0f',
    borderWidth: 1,
    borderRadius: 6,
    width: '95%',
    height: 52,
    marginBottom: 5,
  },
  TextInput: {
    color: '#ddd',
  },
  datePickerStyle: {
    width: '95%',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  MapArea: {
    backgroundColor: '#d8d9e6',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'column',
    height: 410,
    width: '100%',
    marginLeft: 10,
  },

  map: {
    width: '100%',
    height: 345,
    borderRadius: 10,
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
    // color: '#00549F',
    // fontWeight: 'bold',

    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    height: 40,
    width: '95%',
    // backgroundColor: '#white',
  },
  checkTitle: {
    fontSize: 18,
    color: '#050505',
    marginTop: 5,
    fontWeight: 'bold',
  },
  checkItemColor: {
    color: '#050505',
  },
});
export default AlreadyTakeVaccine;