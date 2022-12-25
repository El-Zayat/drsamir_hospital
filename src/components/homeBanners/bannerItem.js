import React ,{useState,useEffect}from 'react';
import {StyleSheet,TouchableOpacity,Text,I18nManager,View,Dimensions} from 'react-native';
import Image from 'react-native-scalable-image';
import {Button} from 'react-native-paper';
import DropShadow from "react-native-drop-shadow";
import {useNavigation} from '@react-navigation/native';
import {colors,Fonts} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const BannerItem=({item,onItemPress})=>{
    const navigation=useNavigation()
    let bannerBackgroundColor=item.background_color
    let bannerImg=item.image
    let bannerTxt=item.heading
    return(
    <DropShadow
        style={{
           shadowColor:'rgba(0,0,0)',
           shadowOffset: {
               width: 0,
               height:10,
           },
           shadowOpacity: 0.07,
           shadowRadius:20,
       }}
   >
            <View style={[styles.container,{backgroundColor:bannerBackgroundColor}]}>
                <View style={styles.sectionContainer}>   
                    <View style={{alignItems:"center",alignSelf:"center",marginRight:10}}>
                        <Text 
                            style={styles.bText}
                           // numberOfLines={2}
                        >{bannerTxt}</Text>  
                        {/* <Button
                            uppercase={false}
                            style={styles.btn}
                            labelStyle={styles.btnTitle}
                        >
                            {i18n.t('view-more')}
                        </Button> */}
                    </View>                

                    <Image
                        width={itemWidth*0.42}
                        source={{uri:bannerImg}}
                        resizeMethod={"scale"}
                        resizeMode={"center"}
                        style={{alignSelf:"center"}}
                    />
                  
                </View>                                                               
            </View>   
        </DropShadow>
    )
}

export default BannerItem

let itemWidth=windowWidth-50

const {Family,Size}=Fonts

const styles=StyleSheet.create({
   container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:10,
        marginHorizontal:5,
        width:itemWidth,
        borderRadius:32,
        height:180,
      //  backgroundColor:colors.white
   },
   sectionContainer:{
        flexDirection:"row",
        //alignItems:"center",
   },
   imageContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
   },
    bText:{
       width:150,
       fontFamily:Family.Bold,
       fontSize:20,
       color:colors.white ,
       textAlign:"left"
   },
   btn:{
       marginTop:15,
       backgroundColor:'rgba(255, 255, 255, 0.3)',
       alignSelf:"flex-start"
   },
   btnTitle:{
        fontFamily:Family.Medium,
        fontSize:Size.fs_16,
        color:colors.textColor ,     
   }
})