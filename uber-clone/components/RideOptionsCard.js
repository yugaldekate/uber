import { StyleSheet, Text, View ,SafeAreaView, Image , FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  } , {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  } , {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {

  const navigation = useNavigation();
  const [selected , setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  console.log((travelTimeInformation?.duration/60).toFixed(2));

  return (
    <SafeAreaView style={tw`bg-white flex-grow`} >
      <View>
        <TouchableOpacity 
          onPress={()=> navigation.navigate('NavigateCard')}
          style={tw`absolute top-3 left-5 p-3 rounded-full`} >
          <Icon name='chevron-left' type='font-awesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a Ride - {((travelTimeInformation?.distance)/1000).toFixed(2)} km</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: {id, image, title, multiplier}, item}) => (
          <TouchableOpacity onPress={() => setSelected(item)} style={tw`flex-row justify-between items-center px-10 ${id=== selected?.id && 'bg-gray-200'} `} >
            <Image 
              source={{uri: item.image}}
              style={{width:90, height:90, resizeMode:'contain'}}
               />
            <View style={tw`-ml-6`} >
              <Text style={tw`text-xl font-semibold`} >{item.title}</Text>
              <Text>{(travelTimeInformation?.duration/3600).toFixed(2)} hrs</Text>
            </View>   
            <Text style={tw`text-xl`} >₹
            {((travelTimeInformation?.duration/60) * SURGE_CHARGE_RATE * multiplier).toFixed(2)}
            
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`} >
        <TouchableOpacity disabled={!selected} style={[tw`bg-black py-3 ${!selected && 'bg-gray-300'}`, {height:50}]} >
          <Text style={tw`text-center text-white text-xl`} >Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})