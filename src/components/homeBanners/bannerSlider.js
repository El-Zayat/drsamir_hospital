import React from 'react';
import {FlatList,RefreshControl} from 'react-native';
import BannerItem from './bannerItem';
import {colors,Fonts} from '../../utils/appTheme';

export const BannersSlider=({
        banners,  
        loading     
    })=>{


    const _renderBannerItem=({item,index})=>{
        return(
            <BannerItem
                key={item.id?.toString()}
                item={item}            
               // onItemPress={()=>_onProductItemPress(item)}
            />
        )
    }

    return(
        <FlatList
            data={banners}
            renderItem={_renderBannerItem}
            keyExtractor={item => item.id?.toString()}
            horizontal={true}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    colors={[`${colors.primary}`]}
                    tintColor={colors.primary}
                />
            }
            contentContainerStyle={{paddingHorizontal:15}}
        />
    )

}