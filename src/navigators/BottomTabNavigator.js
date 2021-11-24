import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyVendorsListScreen from '../screens/MyVendorsListScreen';
import ShowRoomScreen from '../screens/ShowRoomScreen';
import getIconByName from '../constants/getIconByName';
import colors from '../constants/colors';


const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  const [route, setRoute] = React.useState('home');

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          listeners={() => setRoute('Vendors')}
          options={{
            tabBarLabel: 'Vendors',
            tabBarIcon: () => getIconByName('VENDOR'),
            tabBarLabelStyle:
              route === 'Vendors'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="MyVendorsListScreen"
          component={MyVendorsListScreen}
        />
        <BottomTab.Screen
          listeners={() => setRoute('Showroom')}
          options={{
            tabBarLabel: 'Showroom',
            tabBarIcon: () => getIconByName('SHOP'),
            tabBarLabelStyle:
              route === 'Showroom'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="Settings"
          component={ShowRoomScreen}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
