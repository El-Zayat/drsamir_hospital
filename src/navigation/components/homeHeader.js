import React from 'react';
import {View,StyleSheet,Text, I18nManager} from 'react-native';
import {colors,Fonts,AppMeasures} from '../../utils/appTheme';
import {handleToggleLang} from '../../locals/localizeFunctions';
import i18n from "../../locals/i18n"

const HomeHeader=()=>{   
    const btnLang=I18nManager.isRTL?'English':'العربية'
    return(
        <View style={styles.content}>
            <Text style={styles.title}>{i18n.t('home')}</Text>   
            <Text style={styles.btnLang} onPress={handleToggleLang}>{btnLang}</Text>                  
        </View>
    )
}

export default HomeHeader

const styles=StyleSheet.create({
    content:{
        paddingHorizontal:AppMeasures.paddingHorizontal,
        paddingTop:30,
        backgroundColor: colors.backgroundGray,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    title:{
        fontFamily:Fonts.Family.Bold,
        fontSize:22,
        marginBottom:5,
        color:colors.textColor
    },
    btnLang:{
        fontFamily:Fonts.Family.Medium,
        fontSize:16,
        marginBottom:5,
        color:colors.textColor
    }
})