import {I18nManager,Dimensions, Platform, PixelRatio} from "react-native"

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  // based on iphone 5s's scale
  const scale = SCREEN_WIDTH / 375;
  
export function normalize(size) {
    const newSize = size * scale 
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}

export const colors={
    primary:"#40A441",
    secondary:"#EB1C22",
    lightGreen:"#F7FCF7",
    white:"#FFFFFF",
    black:"#000000",
    textColor:"#422E15",
    backgroundGray:"#F5F4F3",
    textGray:"#808080",
    
}

const ArFonts={
    Family:{
        Regular:"Almarai-Light",
        Medium:"Almarai-Regular",
        Bold:"Almarai-Bold"
    },  
    Size:{
        fs_10:10,
        fs_11:11,
        fs_12:12,
        fs_13:13,
        fs_14:14,
        fs_15:15,
        fs_16:16,
        fs_17:17,
        fs_18:18,
        fs_19:19,
        fs_20:20,
    },
}

const EnFonts={
    Family:{
        Regular:"Quicksand-Regular",
        Medium:"Quicksand-Medium",
        Bold:"NotoSans-Bold"
    },  
    Size:{
        fs_10:10,
        fs_11:11,
        fs_12:12,
        fs_13:13,
        fs_14:14,
        fs_15:15,
        fs_16:16,
        fs_17:17,
        fs_18:18,
        fs_19:19,
        fs_20:20,
    },
}

export const Fonts=I18nManager.isRTL?ArFonts:EnFonts

export const AppMeasures={
   paddingHorizontal:20 
}

