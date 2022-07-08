import React from 'react';
import axios from 'axios'
import Navbar from '../navbar';

const url = 'http://localhost:5000/'

export class PostProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }



    render() {
        return (
            <div className='container   text-left bg-white position-sticky'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-12 text-center'>
                        <img 
                        className='rounded-circle image_fluid'
                        src="https://res.cloudinary.com/daurieb51/image/upload/v1654329095/ipxfxfjkl8pueakmptkf.jpg" alt="" width={'50%'} />
                    </div>
                </div>
                <div className='row align-items-start justify-content-start my-1'>
                    <div className='col-sm-10 '>
                        <p className='fs-1'>Name: Takyi Otuo</p>
                        <p className='fs-1'>Posts:7 </p>
                        <p className='fs-1'>Following: 10</p>
                        <p className='fs-1'>Followers: 12</p>
                        <p className='fs-1'>Community Name: Corporate Love Pets</p>

                    </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                    {/* <div className='col-sm-12'>
                        <img src="https://res.cloudinary.com/daurieb51/image/upload/v1654705781/fatality_skullcandy_wvw6ei.jpg" alt="" width={'100%'} />
                    </div> */}
                </div>
            </div>
        )

    }


}
