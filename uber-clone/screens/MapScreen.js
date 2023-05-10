import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const MapScreen = () => {
    const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{flex:1 , backgroundColor:'#F5FF06'}} >
        <Text>Hii Mpas</Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})