import React from 'react';
import { url } from '../../weburl';
import axios from 'axios';
import { Community_Nav } from '../community_nav';
import NewlyRegisteredSwiper from './swiper_newly_registered';
import Navbar from '../../navbar';
import NewlyImageGallery from './newly_gallery';


export class NewlyRegistered extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            dog: {
                name: ''
            }
        }
    }

    componentDidMount = () =>
    {
        console.log('nrewly registerd')
        // this.getNewlyRegistered()
        axios
            .get(`${url}api/dogs/747`)
            .then((res) => 
            {
                this.setState({ dog: res.data[0] }, () => console.log(this.state))
            },)
            .catch((err) => console.log(err))
    }

    getNewlyRegistered = () =>
    {

    }
    render()
    {
        return (

            <div className=''>
               <Navbar/>
               <Community_Nav/>
                <div className='row align-items-center justify-content-center '>
                    <div className='col-sm-12'>
                        <NewlyImageGallery/>
                    </div>
                    
                </div>
            </div>
        )
    }
}