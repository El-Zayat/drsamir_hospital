import React from 'react';
import {ScrollView,View,Text,StyleSheet,Image,ImageBackground,I18nManager,Platform} from 'react-native';
import { useQuery } from 'react-query'
import {EndPoints} from '../services/index';
import {handleToggleLang} from '../locals/localizeFunctions';
import {ServicesSlider} from '../components/services/serviceSlider';
import {DoctorsVertical} from '../components/doctors/doctorsVertical';
import {Fonts,colors,normalize} from '../utils/appTheme';
import i18n from '../locals/i18n';


const RequestItem=({color,Icon,name})=>{
    return(
        <View style={{...styles.item,backgroundColor:color,}}>
            <View style={styles.imgContainer}>
                <Image
                    source={Icon}
                    style={{alignSelf:"center"}}
                />
            </View>
            <Text style={styles.itemText} numberOfLines={2}>{name}</Text>
        </View>
    )
}

const HomeScreen=()=>{
    const { isLoading :bannersLoading, isError :bannersHasError, data :homeBanners,  } = useQuery('banners', EndPoints.homeBanners)
    const { isLoading :servicesLoading, isError:servicesHasError, data :servicesData, } = useQuery('services', EndPoints.services)
    const { isLoading :doctorsLoading, isError:doctorsHasError, data :doctorsData, } = useQuery('doctors', EndPoints.doctors)
    let _homeBanners=homeBanners?.data[I18nManager.isRTL?'ar':'en']
    let _services=servicesData?.data[I18nManager.isRTL?'ar':'en']
    let _doctors=doctorsData?.data[I18nManager.isRTL?'ar':'en']
    
    const btnLang=I18nManager.isRTL?'English':'العربية'

    return (
      <ScrollView 
        style={styles.container}
      >
        
    {/* <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={468.471}
      height={449.021}
      viewBox="0 0 468.471 449.021"
      style={{position:"absolute",top:-70,right:-40,zIndex:9999}}
    >
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.81}
          y1={0.129}
          x2={0.411}
          y2={0.852}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#68d814" stopOpacity={0.961} />
          <Stop offset={0.502} stopColor="#95fe47" stopOpacity={0.949} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
      </Defs>
      <Path
        data-name="Path 18494"
        d="M-306.541 3676.117c44.8-34.257-11.691 143.853-197.557 141.109S-732.261 4064.4-732.261 4064.4l32-419.33s348.916 65.304 393.72 31.047z"
        transform="rotate(-4 -52116.898 -8646.726)"
        opacity={0.3}
        fill="url(#prefix__a)"
      />
    </Svg> */}
        <View style={styles.topContainer}>
  
          <View style={styles.headerContainer}>
            <Text style={styles.title}>{i18n.t('home')}</Text>
            {/* <Text style={styles.btnLang} onPress={handleToggleLang}>
              {btnLang}
            </Text> */}
          </View>
          <View style={{marginTop:35,}}>
            <Text style={styles.txtTitle}>{i18n.t('hello')}</Text>
            <Text style={styles.oTxt}>{i18n.t('get-appointment')}{`\n`}{i18n.t('right-doctor')}</Text>
            <RequestItem
                name={`${i18n.t('book')} ${i18n.t('appointment')}`}
                color="#E5F2E5"
                Icon={require('../../assets/images/calendarIcon.png')}
            />
           </View>
           <Image
                source={require('../../assets/images/docImg.png')}
                style={{position:"absolute",top:102,right:-10,transform:[{rotateY:I18nManager.isRTL?'-180deg':'0deg'}]}}
            />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.txtTitle1}>{i18n.t('services')}</Text>
          <ServicesSlider loading={servicesLoading} services={_services} />
          <Text style={{...styles.txtTitle1, marginTop: 15}}>
            {i18n.t('doctors')}
          </Text>
          <DoctorsVertical 
            doctors={_doctors} 
            loading={doctorsLoading}
          />
          <View style={{height: 40}} />
        </View>
      </ScrollView>
    );

}
export default HomeScreen

const {Family,Size} =Fonts
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
    },
    topContainer:{
        backgroundColor:colors.primary,
        paddingTop:Platform.OS==='ios'?45:20,
        width:"100%",
        height:270,
        paddingHorizontal:20,
        borderBottomRightRadius:65,
    },
    headerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5,
    },
    title:{
        fontFamily:Family.Bold,
        fontSize:22,   
        color:colors.white
    },
    btnLang:{
        fontFamily:Family.Medium,
        fontSize:16,
        color:colors.white
    },
    oTxt:{
        color:colors.white,
        fontSize:Size.fs_14,
        fontFamily:Family.Regular,
        textAlign:"left",
        marginBottom:15,
    },
    txtTitle:{
        color:colors.white,
        fontSize:Size.fs_20,
        fontFamily:Family.Bold,
        textAlign:"left",
        marginBottom:10,
    },
    txtTitle1:{
        textAlign:"left",
        color:colors.black,
        fontSize:Size.fs_18,
        fontFamily:Family.Regular,
        marginBottom:20,
        marginLeft:20,
    },
    item:{
        flexDirection:"row",
       // justifyContent:"space-between",
        alignItems:"center",
        borderRadius:15,
        padding:10,
        width:"60%",
    },
    itemText:{
        color:'#40A441',
        fontSize:normalize(16),
        fontFamily:Family.Regular,
        textAlign:"left",
        marginLeft:5
    },
    imgContainer:{
        backgroundColor: colors.white,
        padding:5,
        borderRadius:5,
        marginRight:5
    }
})