import React from 'react';
import axios from 'axios'

import { url } from '../../weburl';

import CountryContext from '../../country_context';

export class PostProfile extends React.Component
{
    static contextType = CountryContext
    constructor(props)
    {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }



    render()
    {
        return (
            <div className='container   text-left bg-white rounded box_shadow position-sticky animate__animated animate__fadeInLeft animate__slow'>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-12 text-center'>
                        <img
                            className='rounded-circle image_fluid'
                            src="https://res.cloudinary.com/daurieb51/image/upload/v1654329095/ipxfxfjkl8pueakmptkf.jpg" alt="" width={'50%'} />
                    </div>
                </div>
                <div className='row align-items-start justify-content-start my-1'>
                    <div className='col-sm-10 '>
                        <p className='text-dark'>Name: {this.context.user && this.context.user_sql_details && this.context.user_sql_details.username}
                        </p>
                        <p className='text-dark'>Posts:7 </p>
                        <p className='text-dark'>Following: 10</p>
                        <p className='text-dark'>Followers: 12</p>
                        <p className='text-dark'>Community Name: Corporate Love Pets</p>

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
