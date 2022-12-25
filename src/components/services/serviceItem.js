import React ,{useState,useEffect}from 'react';
import {StyleSheet,TouchableWithoutFeedback,Text,Image,I18nManager,View,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors,Fonts,normalize} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const ServiceItem=({item,onItemPress})=>{
    const navigation=useNavigation()
    let serviceBackgroundColor=item.background?item.background:colors.white
    let serviceImg=item.thumbnail
    let serviceName=item.title

    return(
        <TouchableWithoutFeedback
            onPress={()=>navigation.navigate('serviceDetails',{service:item})}
        >
            <View style={styles.container}> 
                <View style={[
                     styles.imageContainer,
                    {backgroundColor:serviceBackgroundColor}]}>
                    <Image
                        source={{uri:serviceImg}}        
                        style={{height:'100%',width:'100%',borderRadius:15}}
                        resizeMethod={'scale'}
                       // resizeMode={'center'}             
                    />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.bText}>{serviceName}</Text>  
                </View>
                                                                                       
            </View>    
        </TouchableWithoutFeedback>   
    )
}

export default ServiceItem

let itemWidth=(windowWidth-50)/2.5

const {Family,Size}=Fonts

const styles=StyleSheet.create({
   container:{
        marginHorizontal:5,
        borderRadius:15,
        height:140,
        backgroundColor: colors.lightGreen,
        width:itemWidth
   },
   imageContainer:{
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:90,
   },
   textContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
   },
    bText:{
       fontFamily:Family.Medium,
       fontSize:normalize(Size.fs_14),
       color:colors.black,
       textAlign:"center",
   },

})