import React from 'react';
import Profile from '../assets/icons/Profile'
import Notification from '../assets/icons/Notification'
import Setting from '../assets/icons/Setting'
import Home from '../assets/icons/Home'


export default getIconByName = (name = 'SHOP') => {
  switch (name) {
    case 'Home':
      return <Home   />;
    case 'MENU':
      return <Menu />;
    case 'Notifications':
      return <Notification />;
    case 'Setting':
      return <Setting  height={30} width={30} />;
    case 'Profile':
      return <Profile />;
    default:
      return null;
  }
};
