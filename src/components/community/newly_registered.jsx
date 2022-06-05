import React from 'react';
import { url } from '../weburl';
import axios from 'axios';
import { Community_Nav } from './community_nav';

export class Newly extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            dog:{
                name:''
            }
        }
    }

    componentDidMount = () => {
        console.log('nrewly registerd')
        // this.getNewlyRegistered()
        axios
        .get(`${url}api/dogs/747`)
        .then((res)=> 
        {
            this.setState({dog: res.data[0]}, ()=> console.log(this.state))
        }, )
        .catch((err)=> console.log(err))
    }

    getNewlyRegistered = () => {
       
    }
    render() {
        return (
            <div className='container py-3'>
                <div className='row mt-3 mb-5 align-items-center justify-content-center'>
            <div className='col-sm-10'>
                <Community_Nav />
            </div>
        </div>
                <div className='row align-items-center justify-content-center newly_full'>
                    <div className='col-sm-7'>
                <img 
                    height='50%' width='100%' src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${this.state.dog.public_id}.png`}
/>
                    </div>
                    <div className='col-sm-5 '>
                    <h1 className='text-uppercase py-md-5'>{this.state.dog.name}</h1>

                    </div>
                </div>
            </div>
        )
    }
}