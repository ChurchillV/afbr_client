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
import logo1 from '../images/logo1.png'
import logo4 from '../images/logo4.jfif'
import logo3 from '../images/logo3.png'
import mzv from '../images/mzv2.jpg'
import Navbar from './navbar';
import Footer from './footer';





class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        sign_up_modal: false, 
        login_modal: false,
      }
    }


    toggle_sign_up = () => {
      this.setState({ sign_up_modal: !this.state.sign_up_modal });
      console.log('state changed')
      console.log('sign_up_modal',this.state.sign_up_modal)
    };

    toggle_login = () => {
      this.setState({ login_modal: !this.state.login_modal });
      console.log('state changed')
      console.log('login_modal',this.state.login_modal)
    };
      
    

    render(){
        return (
          

            <div className="App container-fluid align-items-center justify-content-center" style={{ backgroundColor: 'white' }}>
              
               <div className='row justify-content-center'>
               <Navbar toggle_sign_up={this.toggle_sign_up} toggle_login={this.toggle_login}/>
               {}
               
              </div>
              <div className='row  align-items-center justify-content-start homerow'>
              {/* <Navbar toggle_sign_up={this.toggle_sign_up} toggle_login={this.toggle_login}/> */}

                  <div className='col-md-4 text-capitalize' >
                         <HomeMessage />
                  </div>
                  {/* <div className='col-sm-9'>
                    <img src={mzv} width='100%' height='100%'></img>
                  </div> */}
              </div>
        
              <div className='row  home_full align-items-center justify-content-center'>
                <div className='col-sm-'>
                  < Card text1="The African Bully Registry:" text2="Africa's Premier Bully Registry" className='title'/>
                </div>
                <div className='col-sm-'>
                  < Card text1='Dedicated to connecting dogs across Africa and around the globe' className='globe'/>
                </div>
              </div>
              {/* {this.state.sign_up_modal ? <SignUp toggle={this.toggle_sign_up}/> : null }
              {this.state.login_modal ? <Login toggle={this.toggle_login}/> : null } */}
              <div className='row card_row align-items-center justify-content-center'>
                <div className='col-sm-6'>
                  < Card text1='Register with us today'  className='register1'/>
                </div>
                <div className='col-sm-6'>
                  < Card text1='Get access to pedigrees' className='pedigree'/>
                </div>
              </div>
        
        
        
              <div className='row home_full align-items-center justify-content-center'>
                <div className='col-sm-6'>
                < Card text1="Our Gallery" className='gallery'/>
                </div>
               
        
                <div className='col-sm-6'>
                  < Carousel image_src1={dog1} image_src2={dog2} image_src3={dog3}/>
                </div>
              </div>
        
              {/* <div className='row card_row align-items-center justify-content-center'>
               
              </div> */}
        
              <div className='row card_row align-items-center justify-content-center'>
                <div className='container-fluid'>
                <div className='row card_row align-items-center justify-content-center'>
                < Card text1="Our Partners"className='partners' />
                </div>
                <div className='row  card_row align-items-center justify-content-center'>
                    
                <div className='col-4'>
                <Card image_src={logo1}  image_class='partners_image'/>

                </div>
                <div className='col-4'>
                <Card image_src={logo4}  image_class='partners_image'/>
                </div>
                <div className='col-4'>
                <Card image_src={logo3}  image_class='partners_image'/>
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
