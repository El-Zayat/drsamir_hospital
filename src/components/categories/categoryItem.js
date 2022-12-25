import React ,{useState,useEffect}from 'react';
import {StyleSheet,TouchableWithoutFeedback,Text,Image,I18nManager,View,Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors,Fonts,normalize} from '../../utils/appTheme';
import i18n from '../../locals/i18n';

const windowWidth = Dimensions.get('window').width;

const CategoryItem=({item,onItemPress,selectedDept})=>{
    const navigation=useNavigation()
    // let categoryImg=item.image
    let deptId=item.term_id
    let isSelected=selectedDept===deptId
    let categoryImg=require('../../../assets/images/back/children.png')
    let categorName=item.name

    return(
        <TouchableWithoutFeedback 
          onPress={()=>onItemPress(deptId)}
       >
            <View style={{...styles.container,borderWidth:isSelected?1:0,}}> 
                <Image
                    source={categoryImg}   
                    resizeMethod={"scale"}
                    resizeMode={"center"}  
                    style={{alignSelf:"center",}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.cText}>{categorName}</Text>  
                </View>                                                                         
            </View>  
        </TouchableWithoutFeedback>  
    )
}

export default CategoryItem

let itemWidth=(windowWidth-50)/2.5

const {Family,Size}=Fonts

const styles=StyleSheet.create({
   container:{       
        borderRadius:20,
        borderColor:colors.primary,
        height:100,
        backgroundColor: colors.white,
        width:itemWidth,
        padding:10,
        margin:5,
        elevation:2,
        shadowColor: "#422E15",
        shadowOffset: {
            width: 0,
            height:1,
        },
        shadowOpacity: 0.07,
        shadowRadius:4,
    },
    imageContainer:{
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        height:90,
    },
    cText:{
        fontFamily:Family.Regular,
        fontSize:normalize(Size.fs_16),
        color:colors.black,
        textAlign:"center",
        marginTop:5
    },
    textContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }

})