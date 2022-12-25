import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
//--stacks
import Offers from '../screens/offers';
import OfferDetails from '../screens/offerDetail';
//--components
import HeaderTitle from './components/headerTitle'
import Back from './components/back';

//--constants
import {colors,Fonts,AppMeasures} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Stack = createStackNavigator();

const OffersStack=()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="Offers" 
            component={Offers} 
            options={{
             headerShown:false 
           }}
        />  
        <Stack.Screen 
            name="offerDetails" 
            component={OfferDetails} 
            options={{
             headerStyle:{backgroundColor:colors.white,elevation:0,shadowOpacity:0},
             headerTitle:()=>(<HeaderTitle title={i18n.t('offers-details')}/>),
             headerTitleAlign:"center",
             headerBackImage:()=>(<Back/>),
             headerBackTitleVisible:false
           }}
        /> 
      </Stack.Navigator>
    )
}

export default OffersStack