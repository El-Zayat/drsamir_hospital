import React,{useEffect} from 'react';
import { View,StyleSheet,ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from "../utils/appTheme";

const First=()=>{
    const navigation=useNavigation()

    const setLaunchScreen=()=>{       
        setTimeout(async()=>{   
            let Launched=await AsyncStorage.getItem("alreadyLaunched")
            if(Launched)
                navigation.reset({index:0,routes:[{name:'TabNav'}]}) 
            else{
                AsyncStorage.setItem('alreadyLaunched', "true"); 
                navigation.reset({index:0,routes:[{name:'Intro'}]})
            }
        },50)
    }
    useEffect(()=>{
        setLaunchScreen()
    },[]) 

    // useEffect(()=>{
    //     setTimeout(()=>{   
    //         navigation.reset({index:0,routes:[{name:'Intro'}]})  
    //     },50)
    // },[])  
   
    return(
       <View style={styles.Container}>
          <ActivityIndicator
            size="large"
            color={colors.primary}
          />
       </View>
      )   
}

export default First

const styles=StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:colors.white,
        justifyContent:"center",
        alignItems:"center"
    }
})