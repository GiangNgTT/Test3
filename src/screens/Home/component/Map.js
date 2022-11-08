
import Geolocation from '@react-native-community/geolocation';
import { useRoute } from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {defaultDelta, defaultLagLng, LOCATION} from '../constant/index';

const getLatLng = ({latitude, longitude}) => {
  return {latitude, longitude};
};
const navigateToCurrentPosition = (mapRef, callback) => {
  Geolocation.requestAuthorization(
    () => {
      Geolocation.getCurrentPosition(
        ({coords}) => {
          const {latitude, longitude} = coords;
          const currentRegion = {
            ...defaultDelta,
            latitude,
            longitude,
          };
          mapRef?.current?.animateToRegion(currentRegion, 800);
          callback(currentRegion);
        },
        e => {
          console.log(e.message);
        },
      );
    },
    e => {
      console.log(e.message);
    },
  );
};
export default () => {
  const route = useRoute()
  const [region, setRegion] = useState(LOCATION[route.params?.city]);
  const mapRef = useRef(null);

  useEffect(() => {
    navigateToCurrentPosition(mapRef, setRegion);
  }, []);
  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={region}
        zoomControlEnabled={true}
        onPress={e => {
          const {latitude, longitude} = e.nativeEvent.coordinate;
          setRegion({...region, latitude, longitude});
        }}>
        <Marker
          coordinate={defaultLagLng}
        />
        <Marker coordinate={getLatLng(region)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 120,
  },
  locationBtn: {
    top: 50,
    right: 20,
  },
});