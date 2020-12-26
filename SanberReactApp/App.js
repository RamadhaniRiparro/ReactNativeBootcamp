import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tugas12 from './Tugas/Tugas-12-ReactNative-Component/App'
import Tugas13_Register from './Tugas/Tugas-13-React_Native-Styling/RegisterScreen'
import Tugas13_Login from './Tugas/Tugas-13-React_Native-Styling/LoginScreen'
import Tugas13_About from "./Tugas/Tugas-13-React_Native-Styling/AboutScreen";
export default function App() {
  return (
    //<Tugas12></Tugas12>
    //<Tugas13_Register></Tugas13_Register>
    //<Tugas13_Login></Tugas13_Login>
    <Tugas13_About></Tugas13_About>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});