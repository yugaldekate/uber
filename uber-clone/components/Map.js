import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView , {Marker} from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { setTravelTimeInformation } from '../slices/navSlice';
import { useDispatch } from 'react-redux';

import axios from 'axios';

const Map = () => {

    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();

    const originLat = origin?.location.lat;
    const originLng = origin?.location.lng;
    const destinationLng = destination?.location.lng;
    const destinationLat = destination?.location.lat;

    const options = {
        method: 'GET',
        url: 'https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?&distance_unit=km',
        params: {
          origins: `${originLat}, ${originLng};${destinationLat},${destinationLng};`,
          destinations: `${originLat}, ${originLng};${destinationLat},${destinationLng};`,
          distance: 'km'
        },
        headers: {
          'X-RapidAPI-Key': '303c62c77fmsh8641af55211efc3p1df84cjsn3585047e62e2',
          'X-RapidAPI-Host': 'trueway-matrix.p.rapidapi.com'
        }
      };



    useEffect(()=>{
        if(!origin || !destination) return;

        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            edgePadding:{top:50 , right:50 , bottom:50, left:50}
        });
    },[origin,destination]);



    useEffect(()=>{
        if(!origin || !destination) return;

        const getTravelTime = async()=> {

            console.log(originLat, originLng);
            console.log(destinationLat, destinationLng);

            try {
                const response = await axios.request(options);
                console.log(response.data);
                const data = response.data;

                const duration = data.durations[0][1];
                const distance =  data.distances[0][1];

                console.log({duration , distance});
                dispatch(setTravelTimeInformation({ duration , distance }))
            } catch (error) {
                console.error(error);
            }
        }

        getTravelTime();

    }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType='standard'
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta:0.005,
            longitudeDelta: 0.005
        }}
    >
        {origin?.location && (
            <Marker
            coordinate={{
                latitude: origin.location.lat,
                longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier='origin'
        />
        )}

        {destination?.location && (
            <Marker
            coordinate={{
                latitude: destination.location.lat,
                longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier='Destination'
        />
        )}    

        {origin && destination && (
            <MapViewDirections
                origin={origin.location}
                destination={destination.location}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor='black'
            />
        )}
        
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})