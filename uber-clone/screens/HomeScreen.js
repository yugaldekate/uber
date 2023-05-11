import { StyleSheet, Text, View , SafeAreaView , Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const location = {'lat': 51.509865 , 'lng' : -0.118092};
  const description = "London is the capital of England and the United Kingdom."

  return (
    <SafeAreaView style={tw`bg-white h-full`} >
        <View style={tw`p-5`} >
            <Image
                style={{width:100 , height:100 , resizeMode:'contain'}}
                source={{uri:'https://links.papareact.com/gzs'}}
            />

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
                console.log(location);
                dispatch(setOrigin({
                  location: location,
                  description: description
                }));

                dispatch(setDestination(null));
              }}
              placeholder='Where from'
              fetchDetails={true}
              returnKeyType={"search"}
              enablePoweredByContainer={false}
              minLength={2}
              query={{
                key:'GOOGLE_MAPS_APIKEY',
                language:"en",
              }}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />


            <NavOptions/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});