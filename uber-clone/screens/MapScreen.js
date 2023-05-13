import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createStackNavigator();

  return (
    <View style={[tw`bg-white h-full`]} >
    
        <View style={tw`h-1/2`} >
          <Map/>
        </View>

        <View style={tw`h-1/2`} >
          <Stack.Navigator>
            <Stack.Screen
              name="NavigationCard"
              component={NavigateCard}
              options={{
                headerShown: false,
                headerTitle:"",
                headerShadowVisible: false,
              }}
            />
            <Stack.Screen
              name="RideOptionsCard"
              component={RideOptionsCard}
              options={{
                headerShown:false,
              }}
            />
          </Stack.Navigator>
        </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})