import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourite from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const location = {'lat': 28.7041 , 'lng' : 77.1025};
  const description = "Delhi"

  dispatch(setDestination( { location: location, description: description} ));

  return (
    <SafeAreaView style={tw`flex-1 bg-white`} >
      <Text style={tw`text-center py-1 text-xl`} >Good Morning, Yugal</Text>
      <View style={tw` border-gray-200 flex-shrink`} >
        <View>
          <GooglePlacesAutocomplete
            styles={{
                container:{flex: 0, backgroundColor: '#fff',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                margin: 10,
                padding: 2,
              },
                textInput:{fontSize:18}
                }}
              onPress={(data, details = null)=>{
                navigation.navigate('RideOptionsCard');
              }}
              placeholder='Where to?'
              fetchDetails={true}
              returnKeyType={"search"}
              minLength={2}
              enablePoweredByContainer={false}
              query={{
                key:'AIzaSyCoC0RjqUjREXSch9K82xeFZTXdJDyDMZU',
                language:"en",
              }}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
          />
        </View>
        <NavFavourite/>

        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`} >
          <TouchableOpacity 
            onPress={()=> navigation.navigate('RideOptionsCard')}
            style={tw`flex flex-row justify-between bg-black w-24 py-3 px-4 rounded-full justify-center `} >
            <Icon name='car' type='font-awesome' color='white' size={16} />
            <Text style={tw`text-center text-white`} >Ride</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`flex flex-row w-24 py-3 px-4 rounded-full justify-center `} >
            <Icon name='fast-food-outline' type='ionicon' color='black' size={16} />
            <Text style={tw`text-center text-black`} >Eats</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})