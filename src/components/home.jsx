import React, { Component } from 'react';

import HomeMessage from './homeMessage'
import '../css_files/App.css';
import '../css_files/App2.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card'
import Carousel from './carousel'
// import dog1 from '../images/dog1.jpg'
// import dog2 from '../images/dog2.jpg'
// import dog3 from '../images/dog8.jpg'
// import dog4 from '../images/dog9.jpg'
// import dog5 from '../images/dog10.jpg'
// import dog6 from '../images/dog9a.jpg'
import dispdog1 from '../images/dispdog1.jpeg'
import organogram from '../images/organogram1.jfif'

import mzv from '../images/mzv2.jpg'
import ped1 from '../images/pedexample.jpeg'
import tick from '../images/tick.png'
import 'animate.css'



import logo4 from '../images/logo4.jfif'
import logo3 from '../images/logo3.png'
import Navbar from './navbar';
import Footer from './footer';

import crowd from '../images/crowd2-removebg-preview.png';
import logo1 from '../images/logo2.jpg';
import tree from '../images/tree-removebg-preview.png'
import { CarouselW3, SliderC } from './sliderc';
import About from './about';

let dog5 = 'https://res.cloudinary.com/daurieb51/image/upload/v1655742936/imperial_kennels_blackspade_q2zshb.jpg'



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
        <div className='row  align-items-center justify-content-center homerow'>

          <div className=' font-weight-bold homeMessaggehome' >
            <HomeMessage />

          </div>
          <div className='col-sm-12 carousel_to_be_hidden'>
            <Carousel image_src1={mzv} />
          </div>


        </div>

        <div className='row home_full align-items-center justify-content-center '>
          <div className='col-sm-'>
            < Card text1="The African Bully Registry:" text2="Africa's Premier Bully Registry"
              className='title animate__animated animate__pulse animate__repeat animate_slower' />
          </div>

        </div>
        <div className='row align-items-center justify-content-center '>
          <div className='col-sm-'>
            < Card text1='Dedicated to connecting dogs across Africa and around the globe' className='globe' />
          </div>
        </div>

        <div >

        </div>
        <div className='row  mt-5 pt-5 card_row align-items-center justify-content-center'>
          <div className='col-sm-6 '>
            <h1 class='text-capitalize  animate__animated animate__fadeInRight animate__slow'
              style={{ color: 'white' }}>Join the community of bull dog owners today</h1>
            <h5 class='text-capitalize animate__animated animate__fadeInRight animate__slow'
              style={{ color: 'white' }}>Connect with dog owners across Africa and the globe</h5>
          </div>
          <div className='col-sm-6 '>
            <div>
              <img src={crowd} className='crowd'></img>

            </div>


          </div>
        </div>

        <div className='row py-5 my-5 align-items-center justify-content-center '>


          <div className='col-sm-4 text-md-left'>
            <img src={dispdog1} className='img-responsive img-fluid to_be_hidden_mobile' ></img>
            {/* <img src={graphic_dog} className=''></img> */}

          </div>
          <div className='col-sm-5  mt-5 text-md-left'>
            {/* <img src={logo1} className='homelogo'></img> */}
            <h3 class='text-uppercase font-weight-normal' >
              <span className=' font-weight-bold text-uppercase'> Register
              </span> your bull dog with us today</h3>
            <p class='text-capitalize mt-5' >
              <img src={tick} alt="" width={'5%'} /> American Bull Dogs</p>
            <p class='text-capitalize'>
              <img src={tick} alt="" width={'5%'} />Frenchiebulls</p>

            <p class='text-capitalize mb-5'>
              <img src={tick} alt="" width={'5%'} />American Bully </p>


          </div>
        </div>

        <div className='row my-5  yellow_row align-items-center justify-content-center'>

          <div className='col-sm-2 '>
            <img src={organogram} alt="" />

          </div>
          <div className='col-sm-4 py-5'>
            <h4 class='text-capitalize text-md-left px-md-3 py-md-3 animate__animated 
          animate__fadeInDown animate__slow py-xs-5 py-0' >Get access to:</h4>

            <p class='text-capitalize text-md-left px-md-3 animate__animated
             animate__fadeInDown animate__slow '>
              Well documented pedigrees</p>
            <p class='text-capitalize text-md-left px-md-3 animate__animated
             animate__fadeInDown animate__slow '>A tight-knit community of passionate
              dog lovers</p>
          </div>
          <div className='col-sm-3 to_be_hidden_mobile   '>
            <SliderC pedImages={true} />

          </div>


        </div>

        <div className='row   align-items-center justify-content-center'>
          <div className='col-lg-12 '>
            <About />
          </div>
        </div>


        <div className='row  gallery_row align-items-center justify-content-center'>
          <div className='col-lg-12 '>
            < h3 className='text-capitalize py-5 my-5'>Our gallery</h3>
          </div>
        </div>

        <div className='row  gallery_row align-items-center justify-content-center'>


          <div className='col-sm-8  py-5 '>
            <SliderC galleryImages={true} />

          </div>
        </div>




        <div className='row  bg-dark text-white align-items-center justify-content-center'>
          <div className='col-lg-12'>
            <Footer />


          </div>

        </div>

      </div>

    );
  }

}

export default Home;
