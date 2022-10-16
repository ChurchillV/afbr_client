import React from 'react';
import axios from 'axios'
import Navbar from '../navbar';
import ads_image from './images/ads.png'
import { Community_Nav } from './community_nav'
import Footer from '../footer'
import Ads_Effect from './Ads_message' 
import No_Ads_Yet from './No_Ads_Yet';



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
      <Ads_Effect/>
      <No_Ads_Yet/>
      <Footer/>
    </>  
  )
}

export default advertisements
