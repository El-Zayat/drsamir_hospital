import react from "react"
import {Linking} from 'react-native';

export const makeCall=(phone)=>{
    let phoneNumber = '';
    let p_num=phone
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${p_num}`;
    } else {
      phoneNumber = `telprompt:${p_num}`;
    } 
    Linking.openURL(phoneNumber);
}
