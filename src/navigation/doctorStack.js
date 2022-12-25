import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//--stacks
import Doctors from '../screens/doctors';
import DoctorDetails from '../screens/doctorDetail';
//--components
import HeaderTitle from './components/headerTitle'
import Back from './components/back';
//--constants
import {colors,AppMeasures} from '../utils/appTheme';
import i18n from '../locals/i18n';

const Stack = createStackNavigator();

const DoctorsStack=()=>{
    return(
      <Stack.Navigator>
        <Stack.Screen 
            name="doctors" 
            component={Doctors} 
            options={{
              headerShown:false
             // header:()=>(<Header title={i18n.t('doctors')}/>)
            //  headerStyle:{backgroundColor:colors.backgroundGray,elevation:0},
            //  headerTitle:()=>(<HeaderTitle title={i18n.t('doctors')}/>),
            //  headerTitleAlign:"left",
            //  headerLeft:null,
           }}
        /> 
        <Stack.Screen 
            name="doctorDetail" 
            component={DoctorDetails} 
            options={{
              headerShown:false
              // headerStyle:{backgroundColor:colors.backgroundGray,elevation:0},
              // headerTitle:'',
            }}
        /> 
      </Stack.Navigator>
    )
}

export default DoctorsStack