import React from 'react';
import {Image,I18nManager,Platform} from 'react-native';

const Back=()=>{
    return(
        <Image
            source={require('../../../assets/images/back2.png')}
            style={{transform:[{rotateY:I18nManager.isRTL?'180deg':'0deg',}],marginLeft:Platform.OS==='ios'?15:0}}
        />
    )
}

export default Back