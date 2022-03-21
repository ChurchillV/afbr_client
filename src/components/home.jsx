import React, { Component } from 'react';

import HomeMessage from './homeMessage'
import '../css_files/App.css';
import '../css_files/App2.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card'
import Carousel from './carousel'
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog8.jpg'
import dog4 from '../images/dog9.jpg'
import dog5 from '../images/dog10.jpg'
import dog6 from '../images/dog11.jpeg'
import dog7 from '../images/doga1.jpg'
import mzv from '../images/mzv2.jpg'


import sendgrid from '../images/sendgrid-removebg-preview.png'
import holden from '../images/holden-removebg-preview.png'
import jumeirah from '../images/jumeirah-removebg-preview.png'
import athletics from '../images/athletics-removebg-preview.png'
import cubico from '../images/cubico-removebg-preview.png'
import mates from '../images/mates-removebg-preview.png'

import logo4 from '../images/logo4.jfif'
import logo3 from '../images/logo3.png'
import Navbar from './navbar';
import Footer from './footer';

import crowd from '../images/crowd2-removebg-preview.png';
import logo1 from '../images/logo2.jpg';
import tree from '../images/tree-removebg-preview.png'






class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sign_up_modal: false,
      login_modal: false,
    }
  }


  toggle_sign_up = () => {
    this.setState({ sign_up_modal: !this.state.sign_up_modal });
    console.log('state changed')
    console.log('sign_up_modal', this.state.sign_up_modal)
  };

  toggle_login = () => {
    this.setState({ login_modal: !this.state.login_modal });
    console.log('state changed')
    console.log('login_modal', this.state.login_modal)
  };



  render() {
    return (


      <div className="App container-fluid align-items-center justify-content-center" style={{ backgroundColor: 'white' }}>

        <div className='row  justify-content-center'>
          <Navbar toggle_sign_up={this.toggle_sign_up} toggle_login={this.toggle_login} />
          { }

        </div>
        <div className='row  align-items-center justify-content-start homerow'>

          <div className=' font-weight-bold homeMessaggehome' >
            <HomeMessage />

          </div>
          <div className='col-sm-12 carousel_to_be_hidden'>
            <Carousel image_src1={mzv} image_src2={dog7} />
          </div>
          

        </div>

        <div className='row home_full align-items-center justify-content-center'>
          <div className='col-sm-'>
            < Card text1="The African Bully Registry:" text2="Africa's Premier Bully Registry" className='title' />
          </div>
          <div className='col-sm-'>
            < Card text1='Dedicated to connecting dogs across Africa and around the globe' className='globe' />
          </div>
        </div>


        <div >

        </div>
        <div className='row  mt-5 pt-5 card_row align-items-center justify-content-center'>
          <div className='col-sm-6 '>
            <h1 class='text-capitalize' style={{ color: 'white' }}>Join the community of bull dog owners today</h1>
            <h5 class='text-capitalize' style={{ color: 'white' }}>Connect with dog owners acros Africa and the globe</h5>
          </div>
          <div className='col-sm-6 '>
            <div>
              <img src={crowd} className='crowd'></img>

            </div>


          </div>
        </div>

        <div className='row py-5 align-items-center justify-content center '>
          <div className='col-sm-6'>
          <div className=''>
              <img src={logo1} className='homelogo'></img>

            </div>
          </div>
          <div className='col-sm-6'>
          <h2 class='text-capitalize text-center px-md-3 py-md-3' >Uniting passionate, dedicated dog lovers and breeders</h2>
            <p class='text-capitalize text-center px-md-3'>Right here in Africa</p>
       
          </div>
        </div>



        <div className='row  mt-md-5 register1 align-items-center justify-content-center'>


          <div className='col-sm-6 '>
            <h1 class='text-capitalize' style={{ color: 'white' }}>Register your bull dog with us today</h1>
            <h5 class='text-capitalize' style={{ color: 'white' }}>American Bull Dogs</h5>
            <h5 class='text-capitalize' style={{ color: 'white' }}>Frenchiebuls</h5>

            <h5 class='text-capitalize' style={{ color: 'white' }}>American Bully </h5>

          </div>
        </div>

        <div className='row  align-items-center justify-content-center' style={{display: 'none'}}>
        <div className='col-lg-12'>
            < Card text1="Our Gallery" className='gallery' />
          </div>
        </div>
        <div className='row mt-md-5 card_row align-items-center justify-content-center'>
        <div className='col-sm-3'>
          <Carousel class='carousel-inner2' image_src1={dog5} image_src2={dog6}
             />
          </div>

          <div className='col-sm-3'>
          <Carousel class='carousel-inner2' image_src1={dog7} image_src2={mzv}
             />
          </div>
          <div className='col-sm-3'>
          <Carousel class='carousel-inner2' image_src1={dog1} image_src2={dog2}
             />
          </div>
          <div className='col-sm-3'>
          <Carousel class='carousel-inner2'   image_src1={dog3} image_src2={dog4}
             />
          </div>
        </div>

        <div className='row  mt-md-5 align-items-center justify-content-center'>
          <div className='col-sm-6 documented' style={{textAlign: 'center'}}>
            <p className='text-warning'>Well documented pedigrees</p>
            <p className='text-info'>Global certification</p>
            <p className='text-dark'>African Identity</p>

          </div>


          <div className='col-sm-6'>
            <div>
                <img src={tree} className='tree'></img> 
                </div>
            </div>         
        </div>

{/* 
      <div className='row mt-5 py-5 card_row align-items-center justify-content-center'>
      <div className='col-lg-12 '>
                <h1 className='text-white'>Our Partners</h1>
              </div>
      </div>
      

        <div className='row  mt-5 px-5 partners_row align-items-center justify-content-center'>
              <div className='col-sm-2 px-sm-5'>
          <img src={holden}  className='partners_image'></img>
              </div>
              <div className='col-sm-2 px-sm-5'>
          <img src={jumeirah} className='partners_image'></img>
              </div>
              <div className='col-sm-2'>
          <img src={sendgrid} className='partners_image'></img>
              </div>
              <div className='col-sm-2'>
          <img src={athletics} className='partners_image'></img>
              </div>
              <div className='col-sm-2'>
          <img src={cubico} className='partners_image'></img>
              </div>
              <div className='col-sm-2'>
          <img src={mates} className='partners_image'></img>
              </div>

             





     

      </div> */}
      <div className='row  bg-dark mt-5 text-white align-items-center justify-content-center'>
        <div className='col-lg-12'>
        <Footer />

        </div>

        </div>

      </div>

    );
  }

}

export default Home;
