import React, { Component } from 'react';

import Card from './card';
import Profile from './profile';


const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

class CsAndPs extends Component {



    render() {
        return (
            <Profile class='profile_first'>
            
                

                        <div className='row align-items-center justify-content-center profile_main' style={{ padding: '1%' }}>
                            < Card 
                            text1='Certificates and Pedigrees' 
                            text2='Coming soon'
                            className='title'/>

                        </div>




            
            </Profile>
        )
    }



}



export default CsAndPs;