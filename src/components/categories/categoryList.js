import React,{useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CategoryItem from './categoryItem';
import CategorySkelton from './categorySkelton';
import {colors,Fonts} from '../../utils/appTheme';

export const CategoryList=({
        categories,loading,onSelectDept,selectedDept       
    })=>{

    let dataLoading=[1,2,3,4]

    const _renderCategoryItem=({item,index})=>{
        return(
            <CategoryItem
                key={item.id?.toString()}
                item={item} 
                onItemPress={onSelectDept}
                selectedDept={selectedDept}
            />
        )
    }

    const _renderCategorySkelton=({item,index})=>{
        return(
            <CategorySkelton/>
        )
    }

    return(
        <FlatList
            data={loading?dataLoading:categories}
            renderItem={loading?_renderCategorySkelton:_renderCategoryItem}
            keyExtractor={item => item.id?.toString()}
            horizontal={true}
            contentContainerStyle={{paddingHorizontal:15}}
        />
    )

}