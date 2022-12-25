import React from 'react';
import {View,Dimensions,StyleSheet} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get('window').width;

const OfferSkelton=()=>{
    let skeletonWidth=windowWidth-40
    let halfWidth=skeletonWidth/2
    return(
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View style={{height:130,width:halfWidth,marginBottom:5}} />
                <View style={{marginLeft:10}}>
                    <View style={{ width: halfWidth-20, height: 20, borderRadius: 4 ,marginBottom:5}} />
                    <View style={{ width: halfWidth-20, height: 20, borderRadius: 4 ,marginBottom:5}} />
                    <View style={{ width: halfWidth-10, height: 20, borderRadius: 4 ,marginBottom:5}} />
                    <View style={{ width: halfWidth-10, height: 20, borderRadius: 4 ,marginBottom:5}} />             
                </View>                
            </View>
       </SkeletonPlaceholder>
    )
}

export default OfferSkelton

const styles=StyleSheet.create({
    container:{
        width:windowWidth-40,
        height:140,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:15,
        marginBottom:15,        
    }
})