import React from 'react';
import {View, Text} from 'react-native';
import getIconByName from '../constants/getIconByName';
import headerStyles from '../styles/componentStyles/headerStyles';

export default Header = ({title = 'TITLE'}) => {
  return (
    <View style={headerStyles.headerView}>
      {getIconByName('MENU')}
      <Text style={headerStyles.headerTitleText}>{title}</Text>
      {getIconByName('ADD')}
    </View>
  );
};
