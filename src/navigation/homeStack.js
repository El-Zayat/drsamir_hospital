import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//--stacks
import Home from '../screens/home';
import DoctorDetails from '../screens/doctorDetail';
import ServiceDetails from '../screens/serviceDetail';
//--components
import HomeHeader from './components/homeHeader';
import HeaderTitle from './components/headerTitle'
import Back from './components/back';
//--constants
import {colors,AppMeasures} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Stack = createStackNavigator();

const HomeStack=()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{
              //header:()=>(<HomeHeader/>)
              headerShown:false
           }}
        />  
        <Stack.Screen 
            name="doctorDetail" 
            component={DoctorDetails} 
            options={{
              headerShown:false
            }}
        /> 
        <Stack.Screen 
            name="serviceDetails" 
            component={ServiceDetails} 
            options={{
              headerStyle:{backgroundColor:colors.white,elevation:0,shadowOpacity:0},
              headerTitle:()=>(<HeaderTitle title={i18n.t('service-details')}/>),
              headerTitleAlign:"center",
              headerBackImage:()=>(<Back/>),
              headerBackTitleVisible:false
            }}
        /> 
        
      </Stack.Navigator>
    )
}

export default HomeStack