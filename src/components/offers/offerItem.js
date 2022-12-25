import React ,{useState,useEffect}from 'react';
import {StyleSheet,TouchableWithoutFeedback,Text,Image,I18nManager,View,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropShadow from "react-native-drop-shadow";
import {colors,Fonts,normalize} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const OfferItem=({item,onItemPress})=>{
    const navigation=useNavigation()
    let offerBackgroundImg=item.background
    let offerTitle=item.heading
    let offerSubTitle=item.sub_heading

    return (
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
      <TouchableWithoutFeedback
        onPress={()=>navigation.navigate('offerDetails',{offer:item})}
      >
        <View style={styles.container}>
          {/* <View style={styles.imageContainer}> */}
            <Image
              source={{uri: offerBackgroundImg}}
              style={{height: '100%', width: '45%',marginVertical:5}}
              resizeMethod={'scale'}
              resizeMode={'center'}
            />
          {/* </View> */}
          <View style={{width:'55%',}}>
            <Text style={styles.bText}>{offerTitle}</Text>
            <Text style={styles.sText} numberOfLines={3}>{offerSubTitle}</Text>
          </View>
         
        </View>
      </TouchableWithoutFeedback>
      </DropShadow>
    );
}

export default OfferItem

let itemWidth=(windowWidth-40)

const {Family,}=Fonts

const styles=StyleSheet.create({
   container:{
        borderRadius:8,
        height:140,
        width:itemWidth,
        marginBottom:15,
        backgroundColor:colors.lightGreen,
        flexDirection:"row",
        alignItems:"center",
        // elevation:0.5,
        // shadowColor: "#422E15",
        // shadowOffset: {
        //     width: 0,
        //     height:1,
        // },
        // shadowOpacity: 0.07,
        // shadowRadius:4,     
   },
   imageContainer:{
        backgroundColor:colors.white,
        borderTopLeftRadius:15,
        borderBottomLeftRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:140,
   },
    bText:{
       textAlign:"left", 
       fontFamily:Family.Bold,
       fontSize:normalize(16),
       color:colors.black,
       marginTop:8,
       marginHorizontal:10
   },
   sText:{
      textAlign:"left", 
      fontFamily:Family.Regular,
      fontSize:normalize(14),
      color:colors.textGray,
      marginVertical:5,
      marginHorizontal:10
  },
})