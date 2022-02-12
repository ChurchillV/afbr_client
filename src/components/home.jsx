import React, { Component } from 'react';

import HomeMessage from './homeMessage'
import '../css_files/App.css';
import '../css_files/App2.css';
import 'bootstrap/dist/css/bootstrap.css';
import Card from './card'
import Carousel from './carousel'
import dog1 from '../images/dog1.jpg'
import dog2 from '../images/dog2.jpg'
import dog3 from '../images/dog3.jpg'
import logo4 from '../images/logo4.jfif'
import logo3 from '../images/logo3.png'
import mzv from '../images/mzv2.jpg'
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

        <div className='row justify-content-center'>
          <Navbar toggle_sign_up={this.toggle_sign_up} toggle_login={this.toggle_login} />
          { }

        </div>
        <div className='row  align-items-center justify-content-start homerow'>
          {/* <Navbar toggle_sign_up={this.toggle_sign_up} toggle_login={this.toggle_login}/> */}

          <div className='col-md-4 text-capitalize' >
            <HomeMessage />
          </div>

        </div>

        <div className='row  home_full align-items-center justify-content-center'>
          <div className='col-sm-'>
            < Card text1="The African Bully Registry:" text2="Africa's Premier Bully Registry" className='title' />
          </div>
          <div className='col-sm-'>
            < Card text1='Dedicated to connecting dogs across Africa and around the globe' className='globe' />
          </div>
        </div>


        <div >

        </div>
        <div className='row card_row align-items-center justify-content-center'>
          <div className='col-sm-6'>
            <h1 class='text-capitalize' style={{ color: 'white' }}>Join the community of bull dog owners today</h1>
            <h5 class='text-capitalize' style={{ color: 'white' }}>Connect with dog owners acros Africa and the globe</h5>
          </div>
          <div className='col-sm-6'>
            <div>
              <img src={crowd}></img>

            </div>


          </div>
        </div>


        <div className='row align-items-center justify-content-center'>

          <div class='col-sm-1'>
            <div>
              <img src={logo1} className='homelogo'></img>

            </div>
          </div>
          <div className='col-sm-11'>
            <h1 class='text-capitalize' >Uniting passionate, dedicated dog lovers and breeders</h1>
            <h5 class='text-capitalize'>Right here in Africa</h5>
          </div>
        </div>

        <div className='row register1 align-items-center justify-content-center'>


          <div className='col-sm- '>
            <h1 class='text-capitalize' style={{ color: 'white' }}>Register your bull dog with us today</h1>
            <h5 class='text-capitalize' style={{ color: 'white' }}>American Bull Dogs, Frenchiebuls</h5>
          </div>
        </div>


        <div className='row home_full align-items-center justify-content-center'>
          <div className='col-sm-6'>
            < Card text1="Our Gallery" className='gallery' />
          </div>


          <div className='col-sm-6'>
            < Carousel image_src1={dog1} image_src2={dog2} image_src3={dog3} />
          </div>
        </div>

        <div className='row  align-items-center justify-content-center'>
          <div className='col-sm-6'>
            <h1>Well documented pedigrees</h1>
            <h1>Global certification</h1>
            <h1>African Identity</h1>

          </div>


          <div className='col-sm-6'>
            <div>
                <img src={tree}></img> 
                </div>
            </div>         
        </div>

        {/* <div className='row card_row align-items-center justify-content-center'>
               
              </div> */}

        <div className='row card_row align-items-center justify-content-center'>
          <div className='container-fluid'>
            <div className='row card_row align-items-center justify-content-center'>
              < Card text1="Our Partners" className='partners' />
            </div>
            <div className='row  card_row align-items-center justify-content-center'>

              <div className='col-4'>
                <Card image_src={logo1} image_class='partners_image' />

              </div>
              <div className='col-4'>
                <Card image_src={logo4} image_class='partners_image' />
              </div>
              <div className='col-4'>
                <Card image_src={logo3} image_class='partners_image' />
              </div>
            </div>
          </div>



        </div>



        <Footer />

      </div>

    );
  }

}

export default Home;
