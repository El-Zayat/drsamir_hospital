import React from 'react';
import {View,Platform} from 'react-native';
import DropShadow from "react-native-drop-shadow";

const ShadowViewAndroid=(props)=>{
    return(
        <DropShadow style={props.style}>
            {props.children}
        </DropShadow>
    )
}

const ShadowViewIos=(props)=>{
    return(
        <View style={props.style}>
            {props.children}
        </View>
    )
}

//const ShadowView =()=> Platform.OS==='ios'?<ShadowViewIos />:<ShadowViewAndroid/>

const ShadowView = Platform.select({
    ios: () =>( <ShadowViewIos />) ,
    android: () =>(<ShadowViewAndroid/>) 
  })();

export default ShadowView