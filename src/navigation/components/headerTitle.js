import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {colors,Fonts,AppMeasures} from '../../utils/appTheme';

const HeaderTitle=({title})=>{   
    return(
        <Text style={styles.title}>{title}</Text>         
    )
}

export default HeaderTitle

const styles=StyleSheet.create({
    title:{
        fontFamily:Fonts.Family.Bold,
        fontSize:18,     
        color:colors.black,     
    }
})