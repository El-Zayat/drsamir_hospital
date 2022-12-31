import React, {useState} from 'react';
import {Dimensions, View, I18nManager, Platform} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import BranchItem from './branchItem';
import {colors, Fonts} from '../../utils/appTheme';

const windowWidth = Dimensions.get('window').width;

export const BranchSlider = ({branches, onSnapToItem}) => {
  const _renderBranchItem = ({item, index}) => {
    return <BranchItem key={item.id?.toString()} item={item} />;
  };

  const setSlidesAlignment = () => {
    if (Platform.OS === 'android') return I18nManager.isRTL ? 'end' : 'start';
    else return 'start';
  };

  return (
    <View style={{position: 'absolute', bottom: 20, left: 0, right: 0}}>
      <Carousel
        data={branches}
        renderItem={_renderBranchItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth - 50}
        layout={'default'}
        activeSlideAlignment={setSlidesAlignment()}
        slideStyle={{marginLeft: 5}}
        inactiveSlideShift={0}
        onSnapToItem={i => onSnapToItem(i)}
      />
    </View>
  );
};
