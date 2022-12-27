import React, {useState, useEffect, useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  I18nManager,
  ActivityIndicator,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useQuery} from 'react-query';
import {EndPoints} from '../services/index';
import {BranchSlider} from '../components/branches/branchSlider';
//import {branches} from '../data/app-data';
import {Fonts, colors} from '../utils/appTheme';
import i18n from '../locals/i18n';

const LoadingIndicator = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};
const Location = () => {
  const mapRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const {
    isLoading: brancesLoading,
    isError: branchesHasError,
    data: branchesData,
  } = useQuery('branches', EndPoints.branches);
  let _branches = branchesData?.data[I18nManager.isRTL ? 'ar' : 'en'];

  console.log('branchesData', _branches)

  const focusCamera = () => {
    let camera = {
      center: {
        latitude: parseFloat(_branches[activeIndex].latitude),
        longitude: parseFloat(_branches[activeIndex].longitude),
      },
      zoom: 14,
    };
    mapRef.current.animateCamera(camera, {duration: 300});
  };

  useEffect(() => {
    _branches ? focusCamera() : null;
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      {!_branches ? (
        <LoadingIndicator />
      ) : (
        <MapView
          ref={mapRef}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          maxZoomLevel={10}
          region={{
            latitude: parseFloat(_branches[0]?.latitude),
            longitude: parseFloat(_branches[0]?.longitude),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker
            coordinate={{
              latitude: parseFloat(_branches[activeIndex].latitude),
              longitude: parseFloat(_branches[activeIndex].longitude),
            }}
          />
        </MapView>
      )}
      {/* <BranchSlider
                branches={_branches?_branches:[]}
                onSnapToItem={(i)=>setActiveIndex(i)}
            /> */}
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  map: {
    height: '100%',
    width: '100%',
  },
});
