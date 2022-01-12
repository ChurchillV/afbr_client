import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';


const dogcard_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = dogcard_style

class ProfileNav extends Component {



    render() {
        return (

            <div className='container-fluid'>
                <div className='row profile align-items-center justify-content-center'>
                    <div className='col-sm-2 align-self-start pro_nav_col'>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <img src={Profile_pic} height={'100px'} width={'100px'}></img>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/Home'>Home</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/my_dogs'>My dogs</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/csandps'>Certificates and Pedigrees</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/signout'>Sign Out</Link>
                        </div>
                    </div>
                    



                    </div>

                </div>


            
        )
    }



}



export default ProfileNav;