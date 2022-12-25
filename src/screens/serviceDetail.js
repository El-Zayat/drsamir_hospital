import React from 'react';
import {ScrollView,StyleSheet,Dimensions,I18nManager,View,Text,SafeAreaView}from 'react-native';
import { useQuery } from 'react-query'
import {EndPoints} from '../services/index';
import Image from 'react-native-scalable-image';
import {useRoute} from '@react-navigation/native';
import ContentLoader from '../components/contentLoader';
import {Fonts,colors} from '../utils/appTheme';
import i18n from '../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const ServiceDetails=()=>{
    const route=useRoute()
    let details=route.params.service
    let serviceId=details.id
    let serviceImg=details.thumbnail
    let serviceTitle=details.title

    let {serviceDetail}=EndPoints
    const { isLoading :serviceLoadig, isError :servicesHasError, data :servicesData,} = useQuery(['serviceDetail',serviceId],serviceDetail)
    let serviceContent=servicesData?.data?.content

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
                //style={styles.container}
            >
            <Image
                width={windowWidth-50}
                source={{uri:serviceImg}}
                style={{alignSelf:"center",marginTop:25}}
            />
            <Text style={styles.title}>{serviceTitle}</Text>
            {serviceContent?
                <Text style={styles.subText}>{serviceContent}</Text>
                :<ContentLoader/>}

            </ScrollView>
        </SafeAreaView>
    )
}

export default ServiceDetails

const {Family,Size}=Fonts

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        //paddingTop:25,
        paddingHorizontal:20
    },
    topSectionContainer:{
        height:260,
        paddingTop:50,
        paddingHorizontal:20,
        width:"100%",
        backgroundColor: colors.backgroundGray,
    },
    roundedView:{
        height:32,
        backgroundColor: colors.backgroundGray,        
        borderBottomLeftRadius:35,
        borderBottomRightRadius:35,
    },
    imgContainer:{
        height:135,
        width:135,
        borderRadius:20,
        marginRight:15
    },
    img:{
       // height:150,
        width:"99%",
        height:"100%",
        borderRadius:20,
        // marginTop:-15,
        // marginLeft:-25,
        alignSelf:"center"
    },
    title:{
        marginTop:15,
        fontFamily:Family.Bold,
        fontSize:Size.fs_20,
        color:colors.black,
        textAlign:"center",
        marginBottom:5
    },
    subText:{
        textAlign:"left",
        fontFamily:Family.Regular,
        fontSize:Size.fs_13,
        color:colors.textGray,
        marginBottom:30
    },
})