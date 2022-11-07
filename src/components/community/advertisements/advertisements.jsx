import React from 'react';
import axios from 'axios'
import Navbar from '../../navbar';
import { Community_Nav } from '../community_nav'
import Footer from '../../footer'

import Ads_Effect from './ads_message' 
import NoAdsYet from './noadsyet';




function Advertisements() {
  return (
      
    <>
      <Navbar/>
      <Community_Nav/>

      {/* <Ads_Effect/> */}
      <NoAdsYet/>
      <Footer/>
    </>  
  )
}

export default Advertisements
