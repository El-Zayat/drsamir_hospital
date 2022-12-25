import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//--stacks--
import HomeStack from './homeStack';
import DoctorsStack from './doctorStack';
import OffersStack from './offersStack';
import Location from '../screens/location';
//--components
import CustomTabBar from './components/customTabBar';
//--

const Tab = createBottomTabNavigator();


const TabScreens=()=> {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        tabBarActiveTintColor: 'transparent',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel:'home',
        }}
      />
      <Tab.Screen
        name="DoctorsStack"
        component={DoctorsStack}
        options={{
          tabBarLabel:'doctors',
        }}
      />
      <Tab.Screen
        name="offers"
        component={OffersStack}
        options={{
          tabBarLabel:'offers',
        }}
      />
    <Tab.Screen
        name="location"
        component={Location}
        options={{
          tabBarLabel: 'location',
        }}
      />
    </Tab.Navigator>
  );
}

export default TabScreens