import React from 'react';
import {SafeAreaView,ScrollView,StyleSheet,I18nManager,Platform,View,Text,Pressable,Dimensions}from 'react-native';
import {useRoute,useNavigation} from '@react-navigation/native';
import Image from 'react-native-scalable-image';
import {Fonts,colors,normalize} from '../utils/appTheme';
import i18n from '../locals/i18n';

const DoctorDetails=()=>{
    const navigation=useNavigation()
    const route=useRoute()
    let details=route.params.doctor
    //console.log('detail',details)
    let doctorImg=details?.thumbnail
    let doctorName=details?.title
    let doctorSpeciality=details?.specialization
    let doctorPhone=details?.phone_number
    let description=details?.content
    let workTimes=details?.doctor_working_hours

    return (
  
      <ScrollView style={styles.container}>
        <View style={styles.topSectionContainer}>
          <Pressable onPress={()=>navigation.goBack()}>
              <Image
                  source={require('../../assets/images/back.png')}
                  style={{alignSelf:"flex-start",transform:[{rotateY:I18nManager.isRTL?'180deg':'0deg'}]}}
              />
          </Pressable>         
          <View style={styles.sectionContainer}>
            <View style={styles.doctorData}>
              <Text style={styles.docName}>{doctorName}</Text>
              <Text style={styles.docSpeciality}>{doctorSpeciality}</Text>
              <Text style={styles.title}>{i18n.t('work-times')}</Text>
              {workTimes?.map(T => {
                return (
                  <Text style={styles.subText}>
                    {T.day} ({T.time})
                  </Text>
                );
              })}
              <View style={styles.phoneContainer}>
                <Image
                  source={require('../../assets/images/phone.png')}
                  style={{
                    transform: [
                      {rotateY: I18nManager.isRTL ? '180deg' : '0deg'},
                    ],
                  }}
                  resizeMethod={'resize'}
                  resizeMode={'center'}
                />
                <Text style={styles.docPhone}>{doctorPhone}</Text>
              </View>
            </View>
            <View style={styles.imgContainer}>
              <Image
                source={{uri: doctorImg}}
                width={docImgWidth}
                style={{borderRadius:25}}
                // resizeMethod={'resize'}
                // resizeMode={'center'}
              />
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.title}>{i18n.t('description')}</Text>
          <Text style={styles.subText}>{description}</Text>       
        </View>
      </ScrollView>

    );
}

export default DoctorDetails

const {Family,Size}=Fonts
const windowWidth = Dimensions.get('window').width;
const resizeWidth=windowWidth/375
const docImgWidth=(windowWidth-70)*0.40


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
    },
    topSectionContainer:{
        height:300,
        paddingTop:Platform.OS==='ios'?45:20,
        paddingHorizontal:20*resizeWidth,
        width:"100%",
        backgroundColor: colors.primary,
        borderBottomRightRadius:65
    },
    sectionContainer:{
      justifyContent:"space-between",
      flexDirection: 'row',
      flex: 1,
      marginTop:15,
    },
    imgContainer:{
      width:"40%",
      height:"80%",
      // marginLeft:25*resizeWidth,
      justifyContent:"center",
      alignItems:"center"
    },
    doctorData:{
        
    },
    docName:{
        textAlign:"left",
        fontFamily:Family.Bold,
        fontSize:normalize(24),
        color:colors.white
    },
    docSpeciality:{
        marginVertical:10,
        fontFamily:Family.Regular,
        fontSize:normalize(Size.fs_18),
        color:colors.white
    },
    docPhone:{
        fontFamily:Family.Regular,
        fontSize:normalize(Size.fs_14),
        color:colors.textGray,
        marginLeft:10
    },
    phoneContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:10
        
    },
    bottomSection:{
        paddingTop:24,
        paddingHorizontal:20,
    },
    title:{
        textAlign:'left',
        fontFamily:Family.Regular,
        fontSize:Size.fs_16,
        color:colors.black,
        marginBottom:5
    },
    subText:{
        textAlign:'left',
        fontFamily:Family.Regular,
        fontSize:12,
        color:colors.white,
        marginBottom:10
    },
    Btn:{
        backgroundColor: colors.secondary,
        marginVertical:30
    },
    btnTitle:{
        fontFamily:Family.Regular,
        fontSize:Size.fs_16,
        color:colors.white,
    }
})