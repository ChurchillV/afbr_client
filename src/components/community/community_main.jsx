import React from 'react';
import Navbar from '../navbar';
import { Community_Nav } from './community_nav';
import 'bootstrap/dist/css/bootstrap.css';
import './community.css'

export class Community_Main extends React.Component{
    render(){
        return <div className='container-fluid py-3 community_full'>
        
        <div className='row mt-3 mb-5 align-items-center justify-content-center'>
            <div className='col-sm-10'>
                <Community_Nav />
            </div>
        </div>

        <div className='row my-5 py-5 align-items-center justify-content-center community_text'>
            <div className='col-sm-'>
                <h1 className='text-uppercase my-3'>Coming soon!!!</h1>
                <p>Join the African Bully Community today</p>
                <ul>
                    <li>Advertise your dogs to the general public with our wide reaching
                        platform
                    </li>
                    <li>Read about the latest posts</li>
                    <li>     Benefit from the well written featured articles
                    </li>
                </ul>


            </div>
        </div>
    </div>
    }
    
}