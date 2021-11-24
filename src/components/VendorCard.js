import React from 'react';
import {View, Text, Image} from 'react-native';
import vendorCardStyles from '../styles/componentStyles/vendorCardStyles';

export default VendorCard = ({data}) => {
  return (
    <View style={vendorCardStyles.vendorCardView}>
      <Image
        style={vendorCardStyles.imageIconStyle}
        resizeMode={'cover'}
        source={{uri: data.imageUrl}}
      />
      <View style={{marginLeft: 15}}>
        <Text style={vendorCardStyles.vendorNameText}>{data.vendorName}</Text>
        <Text style={vendorCardStyles.vendorLocationText}>
          {data.vendorLocation}
        </Text>
      </View>
    </View>
  );
};
