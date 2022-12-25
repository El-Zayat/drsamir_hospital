import React from 'react';
import {
  StyleSheet,
  I18nManager,
  Text,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import {OffersList} from '../components/offers/offersList';
import {useQuery} from 'react-query';
import {EndPoints} from '../services/index';
import {Fonts, colors, AppMeasures} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Offers = () => {
  const {
    isLoading: offersLoading,
    isError: offersHasError,
    data: offersData,
  } = useQuery('offers', EndPoints.offers);
  let _offers = offersData?.data[I18nManager.isRTL ? 'ar' : 'en'];

  console.log('offersData', _offers);

  return (
    <View style={styles.container}>
      <View style={styles.topSectionContainer}>
        <Text style={styles.txtTitle1}>{i18n.t('offers')}</Text>
        <Text style={styles.txtTitleH}>{i18n.t('find-here')}</Text>
        <Text style={styles.txtTitleH1}>{i18n.t('best-offers')}</Text>
      </View>
      <View style={{height: 25}} />
      <OffersList offers={_offers} loading={offersLoading} />
    </View>
  );
};

export default Offers;

const {Family, Size} = Fonts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topSectionContainer: {
    height: 180,
    paddingTop: Platform.OS === 'ios' ? 45 : 20,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderBottomRightRadius: 65,
  },
  txtTitle1: {
    fontFamily: Family.Bold,
    textAlign: 'center',
    fontSize: 24,
    color: colors.white,
  },
  txtTitleH: {
    marginTop: 20,
    fontFamily: Family.Regular,
    textAlign: 'left',
    fontSize: Size.fs_18,
    color: colors.white,
  },
  txtTitleH1: {
    fontFamily: Family.Bold,
    textAlign: 'left',
    fontSize: 32,
    color: colors.white,
  },
});
