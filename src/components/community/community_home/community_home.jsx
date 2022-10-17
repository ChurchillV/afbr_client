import React from 'react';
import Navbar from '../../navbar';
import { Community_Nav } from '../community_nav';


export const CommuniyHome = () =>
{
    return (
        <div className='container-fluid'>
            <Navbar/>
            <Community_Nav/>

            <div class="container-fluid comm_body">
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-6 border border-warning p-5 my-5'>
                        Community Home
                    </div>
                    <div className='col-sm-6 border border-warning p-5 my-5'>
                        Latest Posts: 
                        Read More
                    </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-4 border border-warning p-5 my-5'>
                        Featured Articles
                    </div>
                    <div className='col-sm-4 border border-warning p-5 my-5'>
                        Just in:
                    </div>
                    <div className='col-sm-4 border border-warning p-5 my-5'>
                        Coming Events
                    </div>
                   
                </div>
            </div>
        </div>
    )
}