import React from 'react';
import {View,Dimensions} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get('window').width;

const CategorySkelton=()=>{
    let skeletonWidth=(windowWidth-50)/2.5
    return(
        <SkeletonPlaceholder>
            <View style={{ width:skeletonWidth,height:90, margin:8,alignItems:"center",padding:10 }}>
                <View style={{height:40,width:40,borderRadius:20,marginBottom:5}} />
                <View style={{ width: skeletonWidth-20, height: 20, borderRadius: 4 ,marginBottom:5}} />
            </View>
       </SkeletonPlaceholder>
    )
}

export default CategorySkelton