import React, { useState } from 'react';
import './style.css'
import Menu from '../menuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';

const uniqueList = [
  ...new Set(Menu.map((item, index) =>{
    return item.category;
  })), "All",
]
;

console.log(uniqueList);

const Resturant = () => {

  const[menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {

       if (category === "All") {
        return setMenuData(Menu);;
      }

      const updateList = Menu.filter((item) => {
        return item.category === category;
      });
      setMenuData(updateList);
  }

  return (
    <>
      <NavBar filterItem={filterItem} uniqueList={uniqueList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Resturant;
