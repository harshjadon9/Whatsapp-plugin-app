import React, { useState } from 'react'
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Linking, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [number, setNumber] = useState()

  const caller = async ()=>{
    await Linking.openURL(`whatsapp://send?text=&phone=+91${number}`)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
        maxLength={10}
        autoFocus
      />
      <TouchableOpacity
        onPress={caller}
        title="Whatsapp"
        style={styles.submit}
        accessibilityLabel="Learn more about this purple button"
      ><Text style={styles.text}>WhatsApp</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdffc9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical:10,
    backgroundColor: '#ffffff',
    borderColor: '#348042',
    borderWidth: 3,
    borderRadius: 7,
    color: 'black',
    fontWeight: "bold",
    marginVertical:40,
    fontSize:30
  },
  submit:{
    backgroundColor:"#2ab551",
    color:'white',
    padding:10,
    borderRadius:10
  },
  text:{
    fontSize:25,
    fontWeight:"bold",
    color:'white'
  }
});
