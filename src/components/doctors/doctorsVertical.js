import React from 'react';
import {FlatList, View} from 'react-native';
import DoctorSkelton from './doctorSkelton';
import DoctorItem from './doctorItem';

export const DoctorsVertical = ({doctors, loading}) => {
  let listData = doctors ? Object.values(doctors) : [];
  let listDataLoading = [1, 2, 3, 4];

  const _renderDoctorItem = (item, index) => {
    return (
      <DoctorItem
        key={item.id?.toString()}
        item={item}
        isVertical={true}
        // onItemPress={()=>_onProductItemPress(item)}
      />
    );
  };

  const _renderDoctorSkelton = () => {
    return <DoctorSkelton isVertical={true} />;
  };

  return <>
    {listData && <View>{listData.map((item, index) => _renderDoctorItem(item, index))}</View>}
  </>
    // <FlatList
    //     data={loading?listDataLoading:listData}
    //     renderItem={loading?_renderDoctorSkelton:_renderDoctorItem}
    //     keyExtractor={item => item.id?.toString()}
    //     contentContainerStyle={{paddingHorizontal:20}}
    // />
};
