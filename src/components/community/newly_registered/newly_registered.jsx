import React from 'react';
import { url } from '../../weburl';
import axios from 'axios';
import { Community_Nav } from '../community_nav';
import NewlyRegisteredSwiper from './swiper_newly_registered';
import Navbar from '../../navbar';


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
                    <div className='col-sm-10'>
                        <NewlyRegisteredSwiper />
                    </div>
                    {/* <div className='col-sm-5 '>
                    <h1 className='text-uppercase py-md-5'>{this.state.dog.name}</h1>

                    </div> */}
                </div>
            </div>
        )
    }
}