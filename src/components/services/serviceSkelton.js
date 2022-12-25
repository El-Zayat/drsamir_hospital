import React from 'react';
import {View,Dimensions} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get('window').width;

const ServiceSkelton=()=>{
    let skeletonWidth=(windowWidth-50)/2.5
    return(
        <SkeletonPlaceholder>
            <View style={{ width:skeletonWidth,height:170, margin:8,alignItems:"center" }}>
                <View style={{height:90,width:skeletonWidth,borderRadius:15,marginBottom:5}} />
                <View style={{ width: skeletonWidth-40, height: 20, borderRadius: 4 ,marginBottom:5}} />
            </View>
       </SkeletonPlaceholder>
    )
}

export default ServiceSkelton