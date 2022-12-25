import React,{useState} from 'react';
import {FlatList,RefreshControl} from 'react-native';
import ServiceSkelton from './serviceSkelton';
import ServiceItem from './serviceItem';
import {colors,Fonts} from '../../utils/appTheme';

export const ServicesSlider=({
        services,  
        loading     
    })=>{

    let listData=services?Object.values(services):[]
    let listDataLoading=[1,2,3]

    const _renderServiceItem=({item,index})=>{
        return(
            <ServiceItem
                key={item.id?.toString()}
                item={item}            
            />
        )
    }

    const _renderServiceSkelton=({item,index})=>{
        return(
            <ServiceSkelton
                key={item.id?.toString()}           
            />
        )
    }

    return(
        <FlatList
            data={loading?listDataLoading:listData}
            renderItem={loading?_renderServiceSkelton:_renderServiceItem}
            keyExtractor={item => item.id?.toString()}
            horizontal={true}
            // refreshControl={
            //     <RefreshControl
            //         refreshing={loading}
            //         colors={[`${colors.primary}`]}
            //         tintColor={colors.primary}
            //     />
            // }
            contentContainerStyle={{paddingHorizontal:15}}
        />
    )

}