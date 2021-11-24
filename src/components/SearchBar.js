import React from 'react';
import {View, TextInput} from 'react-native';
import colors from '../constants/colors';
import getIconByName from '../constants/getIconByName';
import searchBarStyles from '../styles/componentStyles/searchBarStyles';

export default SearchBar = ({onChangeText = () => {}}) => {
  return (
    <View style={searchBarStyles.searchBarView}>
      {getIconByName('SEARCH')}
      <TextInput
        style={searchBarStyles.textInputView}
        onChangeText={value => onChangeText(value)}
        placeholder={'Search'}
      />
    </View>
  );
};
