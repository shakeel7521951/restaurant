import React from 'react'
import CommonHeader from '../components/common/CommonHeader'
import SuperDeals from '../components/menu/SuperDeals'
import Breakfast from '../components/menu/Breakfast'
import Lunch from '../components/menu/Lunch'
import Dinner from '../components/menu/Dinner'

const Menu = () => {
  return (
    <div>
        <CommonHeader />
        <SuperDeals />
        <Breakfast />
        <Lunch />
        <Dinner />
    </div>
  )
}

export default Menu