import React from 'react';
import {RefreshControl as RefreshControlRN } from 'react-native';
import {colors} from '../utils/appTheme';

const AppRefreshControl=({refreshing})=>{
    return(
        <RefreshControlRN
            refreshing={refreshing}
            colors={[`${colors.primary}`]}
            tintColor={colors.primary}
        />
    )
}

export default AppRefreshControl