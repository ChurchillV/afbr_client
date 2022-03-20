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

          <div className='col-sm-6 text-capitalize font-weight-bold' >
            <HomeMessage />
          </div>
          <div className='col-sm-6 carousel_to_be_hidden'>
            <Carousel image_src1={dog1} image_src2={dog2} image_src3={dog3}
            image_src4={dog4} image_src5={dog5} image_src6={dog6} image_src7={dog7}
            image_src8={mzv}/>
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


        <div className='row mt-md-5 py-md-5 align-items-center justify-content-center'>

          <div class='ml-md-1 mb-md-5 col-sm-1'>
            <div>
              <img src={logo1} className='homelogo'></img>

            </div>
          </div>
          <div className='col-sm-11'>
            <h1 class='text-capitalize text-center px-md-3 py-md-3' >Uniting passionate, dedicated dog lovers and breeders</h1>
            <h5 class='text-capitalize text-center px-md-3'>Right here in Africa</h5>
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


        <div className='row mt-md-5 align-items-center justify-content-center'>
          <div className='col-sm-6'>
            < Card text1="Our Gallery" className='gallery' />
          </div>


          <div className='col-sm-6'>
          <Carousel image_src1={dog1} image_src2={dog2} image_src3={dog3}
            image_src4={dog4} image_src5={dog5} image_src6={dog6} image_src7={dog7}
            image_src8={mzv}/>
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
        <div className='row  mt-5 card_row align-items-center justify-content-center'>
          <div className='container-fluid'>
            <div className='row  card_row align-items-center justify-content-around'>


            <div className='col-sm-1 '>
                <h1>Our Partners</h1>
              </div>
              <div className='col-sm-3'>
    <Carousel image_src1={logo3} image_src2={logo1} image_src3={logo4}
           />
              </div>
             
            </div>



        </div>


     

      </div> */}
      <div className='row  mt-5 text-white w-100 align-items-center justify-content-center'>
        <div className='col-lg-'>
        <Footer />

        </div>

        </div>

      </div>

    );
  }

}

export default Home;
