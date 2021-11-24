import React from 'react';
import {View, FlatList} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import colors from '../constants/colors';
import globalStyles from '../styles/globalStyles';
import myVendorsStyle from '../styles/screenStyles/myVendorsStyle';
import VendorCard from '../components/VendorCard';
import myVendorsList from '../constants/demoData/myVendorsList';


export default MyVendorsListScreen = () => {
  const [query, setQuery] = React.useState('');
  const [queryResult, setQueryResult] = React.useState([]);

  const getQueryResult = value => {
    const formattedQuery = value.toLowerCase();
    setQuery(value);
    let result = myVendorsList.filter(item =>
      JSON.stringify(item).toLowerCase().includes(formattedQuery),
    );
    setQueryResult(result);
  };

  return (
    <View style={globalStyles.rootView}>
      <View style={myVendorsStyle.topView}>
        <Header title={'My Vendors'} />
        <SearchBar onChangeText={getQueryResult} />
      </View>
      <FlatList
        data={query ? queryResult : myVendorsList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <VendorCard data={item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              backgroundColor: colors.frenchGray,
              width: '90%',
              alignSelf: 'center',
            }}
          />
        )}
      />
    </View>
  );
};
