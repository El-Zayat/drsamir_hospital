import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Platform,
  Text,
  I18nManager,
  View,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import {EndPoints} from '../services/index';
import SearchIcon from '../components/Icons/searchIcon';
import {Categories} from '../data/app-data';
import {DoctorsVertical} from '../components/doctors/doctorsVertical';
import {CategoryList} from '../components/categories/categoryList';
import {Fonts, colors} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Doctors = () => {
  let {doctorsByDepartment, departments: departmentsEndpoint} = EndPoints;
  const [departments, setDepartments] = useState({
    data: [],
    loading: true,
    hasErr: false,
  });
  const [doctors, setDoctors] = useState({
    data: [],
    loading: true,
    hasErr: false,
  });
  const [selectedDeptId, setSelectedDeptId] = useState(1);
  //console.log('vvvv',StatusBar.currentHeight)
  const loadDepartments = async () => {
    try {
      const resDepts = await departmentsEndpoint();
      const _departments = resDepts?.data[I18nManager.isRTL ? 'ar' : 'en'];
      setDepartments({
        data: _departments,
        loading: false,
        hasErr: false,
      });
      let firstDepartmentId = _departments[0]?.term_id;
      console.log(firstDepartmentId);
      setSelectedDeptId(firstDepartmentId);
    } catch (e) {
      console.log('error fetch depts', e);
      setDepartments({
        data: [],
        loading: false,
        hasErr: true,
      });
    }
  };

  const loadDoctors = async () => {
    try {
      const resDoctors = await doctorsByDepartment(selectedDeptId);
      const _doctors = resDoctors?.data;
      setDoctors({
        data: _doctors,
        loading: false,
        hasErr: false,
      });
    } catch (e) {
      console.log('error fetch doctors', e);
      setDoctors({
        data: [],
        loading: false,
        hasErr: true,
      });
    }
  };

  const onPressCategory = id => {
    setSelectedDeptId(id);
  };

  useEffect(() => {
    loadDepartments();
  }, []);

  useEffect(() => {
    loadDoctors();
  }, [selectedDeptId]);

  return (
    <ScrollView style={styles.containner}>
      <View style={styles.topSectionContainer}>
        <Text style={styles.txtTitle1}>{i18n.t('doctors')}</Text>
        <Text style={styles.txtTitleH}>{i18n.t('find')}</Text>
        <Text style={styles.txtTitleH1}>{i18n.t('desired-doctor')}</Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder={i18n.t('find-doctor')}
          style={styles.searchBar}
        />
        <View style={styles.searchIconContainer}>
          <SearchIcon />
        </View>
      </View>

      <View>
        <Text style={styles.txtTitle2}>{i18n.t('categories')}</Text>
        <CategoryList
          loading={departments.loading}
          categories={departments.data}
          onSelectDept={onPressCategory}
          selectedDept={selectedDeptId}
        />
        <Text style={styles.txtTitle2}>{i18n.t('choose-doctors')}</Text>
        <DoctorsVertical loading={doctors.loading} doctors={doctors.data} />
        <View style={{height: 20}} />
      </View>
    </ScrollView>
  );
};

export default Doctors;

const {Family, Size} = Fonts;

const styles = StyleSheet.create({
  containner: {
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
  searchBarContainer: {
    marginTop: 20,
    marginBottom: 5,
    backgroundColor: colors.white,
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 2,
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 5,
      height: 0,
    },
    shadowRadius: 25,
    shadowColor: colors.textColor,
  },
  searchIconContainer: {
    position: 'absolute',
    top: 11,
    left: 20,
  },
  searchBar: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingLeft: 45,
    paddingVertical: 10,
    fontFamily: Family.Regular,
    fontSize: Size.fs_16,
  },
  txtTitle: {
    fontFamily: Family.Bold,
    fontSize: 22,
    marginLeft: 20,
    marginBottom: 10,
    color: colors.textColor,
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
    fontSize: Size.fs_20,
    color: colors.white,
  },
  txtTitleH1: {
    fontFamily: Family.Bold,
    textAlign: 'left',
    fontSize: 32,
    color: colors.white,
  },
  txtTitle2: {
    marginVertical: 10,
    marginLeft: 20,
    textAlign: 'left',
    fontFamily: Family.Regular,
    fontSize: Size.fs_18,
    color: colors.black,
  },
});
