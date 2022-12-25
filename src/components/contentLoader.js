import React from 'react';
import {View,Dimensions} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get('window').width;

const ContentLoader=()=>{
    let skeletonWidth=windowWidth-40
    return(
        <SkeletonPlaceholder>
            <View style={{ width:skeletonWidth,height:170,marginVertical:15,alignItems:"center"}}>
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />   
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />  
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />   
                <View style={{ width: skeletonWidth-10, height: 15, borderRadius: 4 ,marginBottom:5}} />                              
            </View>
       </SkeletonPlaceholder>
    )
}

export default ContentLoader