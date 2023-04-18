import React from 'react'

const NavBar = ({uniqueList, filterItem}) => {
  return (
    <nav className='navBar'>
        <div className='btn-group'>
          {
            uniqueList.map((item) => {
              return <button className='btn-group__item' onClick={() => filterItem(item)}>{item}</button>
            })
          }
          {/* <button className='btn-group__item' onClick={() => filterItem('breakfast')}> Breakfast</button>
          <button className='btn-group__item' onClick={() => filterItem('lunch')}> Lunch</button>
          <button className='btn-group__item' onClick={() => filterItem('evening')}> Evening</button>
          <button className='btn-group__item' onClick={() => filterItem('dinner')}> Dinner</button>
          <button className='btn-group__item' onClick={() => setMenuData(Menu)}> All</button> */}
        </div>
      </nav>
  )
}

export default NavBar
