import React from 'react';
import {ScrollView,StyleSheet,Dimensions,SafeAreaView,I18nManager,View,Text}from 'react-native';
import Image from 'react-native-scalable-image';
import {useRoute} from '@react-navigation/native';
import {Fonts,colors} from '../utils/appTheme';
import i18n from '../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const OfferDetails=()=>{
    const route=useRoute()
    let details=route.params.offer
    let offerBackgroundImg=details.background
    let offerTitle=details.heading
    let offerSubTitle=details.sub_heading

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
               // style={styles.container}
            >
            <Image
                width={windowWidth-50}
                source={{uri:offerBackgroundImg}}               
                style={{alignSelf:"center",marginTop:35}}
            />
            <Text style={styles.title}>{offerTitle}</Text>
            <Text style={styles.subText}>{offerSubTitle}</Text> 

            </ScrollView>
        </SafeAreaView>
    )
}

export default OfferDetails

const {Family,Size}=Fonts

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
       // paddingTop:35,
        paddingHorizontal:20
    },
    topSectionContainer:{
        height:260,
        paddingTop:50,
        paddingHorizontal:20,
        width:"100%",
        backgroundColor: colors.backgroundGray,
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
        marginTop:25,
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
        marginBottom:10
    },
})