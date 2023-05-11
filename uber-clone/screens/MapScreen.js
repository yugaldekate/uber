import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
    const Stack = createStackNavigator();

  return (
    <SafeAreaView style={[tw`bg-white h-full`]} >
        <View style={tw`p-5`} >
            <Text>Hii Mpas</Text>
        </View>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})