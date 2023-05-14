import { StyleSheet, Text, View , SafeAreaView , Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination , setOrigin } from '../slices/navSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const location = {'lat': 19.0760 , 'lng' : 72.8777};
  const description = "Mumbai, Maharastra"

  dispatch(setOrigin( { location: location, description: description} ));

  dispatch(setDestination(null));

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
              }}
              placeholder='Where from'
              fetchDetails={true}
              returnKeyType={"search"}
              enablePoweredByContainer={false}
              minLength={2}
              query={{
                key:GOOGLE_MAPS_APIKEY,
                language:"en",
              }}
              nearbyPlacesAPI='GooglePlacesSearch'
              debounce={400}
            />

            <NavOptions/>

            <NavFavourites/>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({});