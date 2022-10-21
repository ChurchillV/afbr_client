import React from 'react';
import axios from 'axios'
import Navbar from '../../navbar';
import { Community_Nav } from '../community_nav'
import Footer from '../../footer'
import AdsEffect from './ads_message' 
import NoAdsYet from './noadsyet';




/*const url = 'http://localhost:5000/'

export class Ads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }
*/


function advertisements() {
  return (
      
    <>
      <Navbar/>
      <Community_Nav/>
      <AdsEffect/>
      <NoAdsYet/>
      <Footer/>
    </>  
  )
}

export default advertisements
