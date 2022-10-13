import React from 'react';
import axios from 'axios'
import Navbar from '../navbar';
import ads_image from './images/ads.png'



const url = 'http://localhost:5000/'

export class Ads extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }



    render() {
        return (
            <div className='container-fluid   text-center bg-white mb-5'>
            <Navbar/>
                <div className='row align-items-center justify-content-center my-5'>
                    <div className='col-sm-12'>
                        <p>Advertissements</p>
gjhfcxzZ                    </div>
                </div>
              
                
            </div>
        )

    }


}
