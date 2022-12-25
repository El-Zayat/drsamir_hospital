import React ,{useState,useEffect}from 'react';
import {StyleSheet,TouchableOpacity,Text,Image,Linking,View,Dimensions} from 'react-native';
import {Button} from 'react-native-paper';
import openMap from 'react-native-open-maps'
import DropShadow from "react-native-drop-shadow";
import {makeCall} from '../../components/makeCall';
import {colors,Fonts,normalize} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;


const Label=({title,imgSrc})=>{
    return(
        <View style={{flexDirection:"row",alignItems:"center"}}>
            <Image
                source={imgSrc}
            />
            <Text style={styles.label}>{title} :</Text>

        </View>  
    )
}

const BranchItem=({item})=>{

    let branchName=item.branch_name
    let branchAddress=item.address
    let branchPhone=item.phone
    let whatsappNumber=item.whatsapp_number
    let longitude=item.longitude
    let latitude=item.latitude

    const _openWhatsApp=()=>{
        let url =`whatsapp://send?phone=+020${whatsappNumber}`;
        Linking.openURL(url)
    }

    const _openMaps=()=>{
        let endPoint=`${latitude},${longitude}`
        openMap({
            end:endPoint,
            provider:"google"
        })    
    }
    
    return(
    <DropShadow
        style={{
          // margin:10,
           margin:5,
           shadowColor: "#422E15",
           shadowOffset: {
               width: 0,
               height:1,
           },
           shadowOpacity: 0.07,
           shadowRadius:4,
       }}
    >
            <View style={styles.container}> 
                <Text style={styles.bText}>{branchName}</Text>  
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../../../assets/images/loc.png')}/>
                    <Text style={styles.value}>{branchAddress}</Text>
                </View>  
                <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Image source={require('../../../assets/images/telephone.png')}/>
                    <Text style={{...styles.value,textDecorationLine:"underline"}} onPress={()=>makeCall(branchPhone)}>{branchPhone}</Text>
                </View>  
                <View style={{flexDirection:"row",marginTop:10,}}>
                    <Button
                        mode="contained"
                        style={styles.btn1}
                        uppercase={false}
                        labelStyle={styles.btnTitle}
                        onPress={_openMaps}
                    >
                       {i18n.t('get-direction')}
                    </Button>
                    <Button
                        mode="contained"
                        style={styles.btn2}
                        uppercase={false}
                        labelStyle={styles.btnTitle}
                        icon={require('../../../assets/images/whatsapp.png')}
                        onPress={_openWhatsApp}   
                    >
                        {i18n.t('whats-app')}
                    </Button>
                </View>   
                                                                                
            </View>  
        </DropShadow>     
    )
}

export default BranchItem



const {Family,Size}=Fonts

const styles=StyleSheet.create({
   container:{       
        borderRadius:15,
        height:180,
        backgroundColor: colors.white,
        paddingVertical:15,
        paddingHorizontal:15,
        justifyContent:"space-between"
    },
    imageContainer:{
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:90,
    },
    bText:{
        fontFamily:Family.Regular,
        fontSize:Size.fs_18,
        color:colors.black,
        textAlign:"center",
    },
    label:{
        fontFamily:Family.Regular,
        fontSize:Size.fs_14,
        color:'#909090',
        marginLeft:5
    },
    value:{
        fontFamily:Family.Regular,
        fontSize:Size.fs_14,
        color:colors.textGray,
        marginLeft:15,
        textAlign:"left",
    },
    btn1:{
        width:"48%",
        marginRight:10,
        backgroundColor:colors.secondary,
        elevation:0
    },
    btn2:{
        width:"48%",
        marginRight:10,
        backgroundColor:"#4CAF50",
        elevation:0
    },
    btnTitle:{
        fontFamily:Family.Regular,
        fontSize:normalize(Size.fs_14),
        color:colors.white,
    },
})