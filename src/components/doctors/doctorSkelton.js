import React from 'react';
import {View,Dimensions,StyleSheet} from 'react-native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const windowWidth = Dimensions.get('window').width;
let itemWidth=windowWidth-40

const DoctorSkelton=()=>{
    let skeletonWidth=itemWidth
    return(
        <SkeletonPlaceholder>
            <View style={styles.container}>
                <View style={{height:80,width:80,borderRadius:10,}} />
                <View style={{marginLeft:15}} >
                    <View style={{ width: 150, height: 20, borderRadius: 4 ,marginBottom:15}} />
                    <View style={{ width: 180, height: 20, borderRadius: 4 ,marginBottom:5}} />
                </View>
            </View>
       </SkeletonPlaceholder>
    )
}

export default DoctorSkelton

const styles=StyleSheet.create({
    container:{
        width:itemWidth,
        height:90,
        marginVertical:5,
        alignItems:"center",
        flexDirection:"row",
    }
})