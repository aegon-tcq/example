import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import getIconByName from '../constants/getIconByName';
import colors from '../constants/colors';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Setting from '../screens/Setting';
import Notifications from '../screens/Notifications';

const BottomTab = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  const [route, setRoute] = React.useState('home');

  return (
    <NavigationContainer>
      <BottomTab.Navigator >
        <BottomTab.Screen
          listeners={() => setRoute('Home')}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => getIconByName('Home'),
            tabBarLabelStyle:
              route === 'Home'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="Home"
          component={Home}
        />
        <BottomTab.Screen
          listeners={() => setRoute('Notifications')}
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: () => getIconByName('Notifications'),
            tabBarLabelStyle:
              route === 'Notifications'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="Notifications"
          component={Notifications}
        />
        <BottomTab.Screen
          listeners={() => setRoute('Profile')}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => getIconByName('Profile'),
            tabBarLabelStyle:
              route === 'Profile'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="Profile"
          component={Profile}
        />
        <BottomTab.Screen
          listeners={() => setRoute('Setting')}
          options={{
            tabBarLabel: 'Setting',
            tabBarIcon: () => getIconByName('Setting'),
            tabBarLabelStyle:
              route === 'Setting'
                ? {color: colors.primary}
                : {color: colors.black},
          }}
          name="Setting"
          component={Setting}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};
