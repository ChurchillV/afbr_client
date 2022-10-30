import React from 'react';
import axios from 'axios'
import Navbar from '../../navbar';
import ads_image from '../images/ads.png'
import { Community_Nav } from '../community_nav'
import Footer from '../../footer'
import Ads_Effect from './ads_message' 
import No_Ads_Yet from './noadsyet';



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
