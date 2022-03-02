import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import Search  from './search'
import { AmericanBulldog } from './americanbulldog';
import { AmericanBully } from './americanbully';
import { FrenchBulldog } from './frenchbulldog';
import { Pittbull } from './pitbull';
import $ from 'jquery'

class Breeds extends Component {

    constructor(props){
        super(props)
        this.state = {
            image:{

            }
        }
    }
    
    componentDidMount = () => {
       

    }

    
    handleImage = (e) => {
        // console.log('e.')
        console.log(e.target.files[0].name)
        this.setState({ image: e.target.files[0] }
        , ()=>{
             console.log(this.state.image)
            this.image_to_text(this.state.image)
        }
        )
    }

    uploadImage = (callback) => {
        const formData = new FormData()
        formData.append('file', this.state.image)
        // // console.log(this.state.imageSelected)
        formData.append('upload_preset', 'gwxgv5ii')

        axios.post('https://api.cloudinary.com/v1_1/daurieb51/image/upload', formData)
            .then((response) => {
                
                this.setState({
                    
                    
                    public_id: response.data.public_id 
                },
                    () => {
                        console.log(this.state.dog)
                        console.log('responseeeee', response.data.public_id)

                        callback(response.data.public_id)
                        console.log('called the callback')

                    })

                    console.log('image successfuly uploaded thank you jehovah')

            })

            .catch((err) => console.log(err.message))
        // this.uploadImagetodb()

    }


        // this.uploadImagetodb()
    onSearchClick = (e) => {
        e.preventDefault()
    }

 
    render() {
        return (
            <div className='row align-items-center justify-content-center breed_full'>

                <Navbar />

                <div class='container'>
                    <div className='row breed_text align-items-center justify-content-center'>
                        <h1>Breeds</h1>
                        <div class='container-fluid'>
                            <div className='row align-items-center justify-content-center'>
                                <Search send_to={true} onSearchClick={this.onSearchClick}/>

                            </div>
                            <div className='row align-items-center justify-content-center'>
                                <div className='mx-2'>
                                    <Link to='/breeds/americanbulldog'><h1>AmericanBulldog</h1></Link>

                                </div>
                                <div className='mx-2'>
                                    <Link to='/breeds/americanbully'><h1>AmericanBully</h1></Link>

                                </div>
                                <div className='mx-2'>
                                    <Link to='/breeds/frenchbulldog'><h1>FrenchBulldog</h1></Link>

                                </div>
                                <div className='mx-2'>
                                    <Link to='/breeds/pitbull'><h1>Pittbull</h1></Link>

                                </div>



                            </div>

                            <div className='row align-items-center justify-content-center'>
                                <div className='col-lg-'>
                                    {this.props.children}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }



}



export default Breeds;
