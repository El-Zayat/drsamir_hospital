import React from 'react';
import { View, Text,Image,StyleSheet,TouchableWithoutFeedback} from 'react-native';
import BottomLabel from './bottomLabel';
import i18n from "../../locals/i18n"
import {colors,Fonts} from '../../utils/appTheme';

const focusedImages=[
    require('../../../assets/images/home.png'),
    require('../../../assets/images/doctors.png'),
    require('../../../assets/images/offers.png'),
    require('../../../assets/images/location.png'),
]

const unfocusedImages=[
  require('../../../assets/images/homeUnfocused.png'),
  require('../../../assets/images/doctorsUnfocused.png'),
  require('../../../assets/images/offersUnfocused.png'),
  require('../../../assets/images/locationUnfocused.png'),
]

function CustomTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
        <View style={styles.mainContainer}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = options.tabBarLabel

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableWithoutFeedback
                key={index.toString()}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
              // style={{ flex: 1 }}
              >
                
                <View style={styles.itemContainer}>
                   
             
                    <View style={styles.imageContainer}>                  
                          <Image 
                            source={isFocused?focusedImages[index]:unfocusedImages[index]}
                            style={{width:"100%"}}
                            resizeMethod={"resize"}
                            resizeMode="center"
                          // style={{height:22,width:"100%"}}
                        />
                    </View>                          
                   <BottomLabel label={i18n.t(`${label}`)} focus={isFocused}/>
              </View>
              </TouchableWithoutFeedback>
            );
          })}
          </View>
  );
}

export default CustomTabBar

const {Family,Size}=Fonts


const styles=StyleSheet.create({
    mainWrapper:{
      paddingHorizontal:20,
      paddingBottom:25,
      backgroundColor: colors.white,
    },
    mainContainer:{
        overflow:"hidden",
        flexDirection: 'row' ,
        paddingHorizontal:30,
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:colors.white,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        elevation:5,
        shadowColor:colors.textColor,
        shadowOpacity:0.05,
        shadowOffset:{height:0,width:0},    
        shadowRadius:25   
    },
    text:{
      fontSize:Size.fs_12,
      fontFamily:Family.Medium,
      color:colors.primary
    },
    itemContainer:{
      alignItems:"center",
      justifyContent:"center",
      paddingTop:8,
      paddingBottom:12,
      paddingHorizontal:5
    },
    imageContainer:{
        height:22,
        width:30,
        alignItems:"center",
        justifyContent:"center",
    },
    circle:{
      height:6,
      width:6,
      borderRadius:3,
      backgroundColor: colors.primary,
      alignSelf:"center",
      marginTop:1
    }
})