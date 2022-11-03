import React from 'react';
import axios from 'axios'
import Navbar from '../../navbar';
import { Community_Nav } from '../community_nav'
import Footer from '../../footer'
import AdsEffect from './ads_message' 
import NoAdsYet from './noadsyet';




function advertisements() {
  return (
      
    <>
      <Navbar/>
      <Community_Nav/>

      {/* <Ads_Effect/> */}
      <No_Ads_Yet/>
      <Footer/>
    </>  
  )
}

export default advertisements
