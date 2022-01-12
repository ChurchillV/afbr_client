import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Navbar from './navbar';


const dogcard_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = dogcard_style

class Profile extends Component {



    render() {
        return (

            <div className='container-fluid'>
                <Navbar color='black'/>
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
                            <Link to='/registration'>Register</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/profile/csandps'>Certificates and Pedigrees</Link>
                        </div>
                        <div className='row align-items-center justify-content-center pro_nav'>
                            <Link to='/profile/signout'>Sign Out</Link>
                        </div>
                    </div>
                    <div className='col-sm-10 align-items-center justify-content-center profile_main'>

                        {/* <div className='row' style={{ padding: '1%' }}>
                            <div className='col-sm-6'>
                                <Link to='/my_dogs/dog_name'>
                                    <DogCard image_src={dog} height={height} width={width}
                                        dogname='Scard Bully' />
                                </Link>
                            </div>
                            <div className='col-sm-6 '>
                                <Link to='/my_dogs/dog_name'>
                                    <DogCard image_src={dog} height={height} width={width}
                                        dogname='Scard Bully'
                                        dogage='Age : 12' />
                                </Link>
                            </div>
                            <div className='col-sm-6'>
                                <Link to='/my_dogs/dog_name'>
                                    <DogCard image_src={dog} height={height} width={width}
                                        dogname='Scard Bully' />
                                </Link>
                            </div>
                            <div className='col-sm-6'>
                                <Link to='/my_dogs/dog_name'>
                                    <DogCard image_src={dog} height={height} width={width}
                                        dogname='Scard Bully' />
                                </Link >
                            </div>
                        </div> */}
                        {this.props.children}



                    </div>

                </div>


            </div>
        )
    }



}



export default Profile;