import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  I18nManager,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StarIcon from '../Icons/starIcon';
import {colors, Fonts, normalize} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const DoctorItem = ({item, onItemPress, isVertical}) => {
  const navigation = useNavigation();
  let doctorImg = item.thumbnail;
  let doctorName = item.title;
  let doctorSpeciality = item.specialization;
  let doctorRate = item.rate;

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('doctorDetail', {doctor: item})}>
      <View style={styles.container}>
        <Image
          source={
            doctorImg
              ? {uri: doctorImg}
              : require('../../../assets/images/logo.png')
          }
          // resizeMethod={"scale"}
          resizeMode={'contain'}
          style={{alignSelf: 'center', height: 80, width: 80, borderRadius: 10}}
        />
        <View style={styles.docInfoContainer}>
          <Text style={styles.bText}>{doctorName}</Text>
          <View style={styles.rowView}>
            <Text style={styles.sText}>{doctorSpeciality}</Text>
            <View style={styles.rateContainer}>
              <StarIcon />
              <Text style={styles.rText}>{doctorRate}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DoctorItem;

let itemWidth = windowWidth - 40;

const {Family} = Fonts;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    height: 90,
    backgroundColor: colors.lightGreen,
    width: itemWidth,
    padding: 5,
    elevation:1,
    shadowColor: '#422E15',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 3,
  },
  imageContainer: {
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
  },
  docInfoContainer: {
    marginLeft: 15,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: '70%',
  },
  bText: {
    fontFamily: Family.Bold,
    fontSize: normalize(16),
    color: colors.black,
    textAlign: 'left',
    marginTop: 10,
  },
  sText: {
    fontFamily: Family.Regular,
    fontSize: normalize(14),
    color: colors.textGray,
    textAlign: 'left',
    marginTop: 5,
  },
  rateContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  rText: {
    marginLeft: 5,
    fontFamily: Family.Regular,
    fontSize: 13,
    color: '#000',
    textAlign: 'left'
  },
});
