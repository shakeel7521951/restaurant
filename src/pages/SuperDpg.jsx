import React from 'react'
import Hero from '../components/ProdctDetail/SuperDel/Hero';
import DetailSuper from '../components/ProdctDetail/SuperDel/DetailSuper';
import SuperDeals from '../components/menu/SuperDeals';
import Descripton from '../components/ProdctDetail/SuperDel/Descripton';

const SuperDpg = () => {
  return (
    <div>
        <Hero/>
        <DetailSuper/>
        <Descripton/>
        <SuperDeals/>
    </div>
  )
}

export default SuperDpg;