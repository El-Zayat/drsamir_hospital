import React,{Component} from 'react';
import {StyleSheet,Text} from "react-native"
import {colors,Fonts} from '../../utils/appTheme';


const {Family}=Fonts;

const BottomLabel=({label,focus})=>{    
    return(
      <Text style={focus?styles.txtFocus:styles.txt}>
          {label}
      </Text>
    )   
   }

export default BottomLabel;

const styles=StyleSheet.create({
  txt:{
    color:colors.textGray,
    fontSize:12,
    fontFamily:Family.Regular
  },
  txtFocus:{
    color:colors.primary,
    fontSize:12,
    fontFamily:Family.Regular
  }
})