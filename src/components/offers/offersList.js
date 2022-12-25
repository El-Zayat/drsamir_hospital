import React from 'react';
import {FlatList} from 'react-native';
import OfferItem from './offerItem';
import OfferSkelton from './offerSkelton';

export const OffersList = ({offers, loading}) => {
  let listDataLoading = [1, 2, 3];

  const _renderOfferItem = ({item, index}) => {
    return <OfferItem key={item.id?.toString()} item={item} />;
  };

  const _renderOfferSkelton = () => {
    return <OfferSkelton />;
  };

  return (
    <FlatList
      data={loading ? listDataLoading : offers}
      renderItem={loading ? _renderOfferSkelton : _renderOfferItem}
      keyExtractor={item => item.id?.toString()}
      // refreshControl={
      //     <RefreshControl
      //         refreshing={loading}
      //         colors={[`${colors.primary}`]}
      //         tintColor={colors.primary}
      //     />
      // }
      contentContainerStyle={{paddingHorizontal: 15}}
    />
  );
};
