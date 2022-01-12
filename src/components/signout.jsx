import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile from './profile';

const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

class SignOut extends Component {



    render() {
        return (
            <Profile>

                        <div className='row lign-items-center justify-content-center' style={{ padding: '1%' }}>
                            < Card 
                            text1='Sign Out'
                            text2='This should be a modal' />

                        </div>
            </Profile>
        )
    }



}



export default SignOut;