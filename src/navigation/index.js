import React,{useEffect} from 'react';
//==Navigation==
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//==Theme==
import { Provider as PaperProvider } from 'react-native-paper';
import {theme} from '../utils/theme';
//===
// import * as RNLocalize from "react-native-localize";
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {setAppLanguage} from '../locals/localizeFunctions';
//--stack screens
import First from '../screens/first';
import Intro from '../screens/intro';
//import HomeScreen from '../screens/home';
import TabScreens from './tabNavigator';
//--constants
import i18n from '../locals/i18n';


const Stack = createStackNavigator();

const Screens=()=>{

    useEffect(()=>{
        setAppLanguage()
    },[])

    return(
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="First" component={First} options={{headerShown:false}} />
                    <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
                    <Stack.Screen name="TabNav" component={TabScreens} options={{headerShown:false}} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    )
}

export default Screens