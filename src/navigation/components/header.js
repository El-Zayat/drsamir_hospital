import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {colors,Fonts,AppMeasures} from '../../utils/appTheme';

const Header=({title})=>{   
    return(
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>         
        </View>
    )
}

export default Header

const styles=StyleSheet.create({
    content:{
        paddingHorizontal:AppMeasures.paddingHorizontal,
        paddingTop:30,
        backgroundColor: colors.backgroundGray,
    },
    title:{
        fontFamily:Fonts.Family.Bold,
        fontSize:22,
        marginBottom:5,
        color:colors.textColor
    }
})