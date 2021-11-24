import React from 'react';
import Menu from '../assets/icons/Menu.svg';
import Search from '../assets/icons/Search.svg';
import Shop from '../assets/icons/Shop.svg';
import Add from '../assets/icons/Add.svg';
import Vendor from '../assets/icons/Vendor.svg';

export default getIconByName = (name = 'SHOP') => {
  switch (name) {
    case 'ADD':
      return <Add   />;
    case 'MENU':
      return <Menu />;
    case 'SEARCH':
      return <Search />;
    case 'VENDOR':
      return <Vendor height={30} width={30} color={"#FFF"} />;
    case 'SHOP':
      return <Shop />;
    default:
      return null;
  }
};
