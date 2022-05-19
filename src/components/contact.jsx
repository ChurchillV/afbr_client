import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/contact.css';

import { send } from 'emailjs-com';
import axios from 'axios';
import { url } from './weburl';


class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            from_name: '',
            from_message: '',
            from_email: ''
        }

    }

    componentDidMount = () => {

    }

    handleChange = (e) => {
        const { name, value } = e.target


        this.setState({
            ...this.state,
            [name]: value
        }, () => {
            console.log(this.state)
        })
    }

    sendemail = (e) => {
        e.preventDefault()
        axios
            .post(`${url}api/email/contact`, {
                from_email: this.state.from_email,
                from_name: this.state.from_name,
                message: this.state.from_message
            })
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
            
    }

    render() {
        return (

            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center'>

                    <Navbar />

                </div>

                <div>
                    <div className='row align-items-center justify-content-center py-5 contact_text' >
                        <div className='col-lg- text-white w-100'>
                            <h1 className='mb-5 w-100'>Contact The African Bully Registry</h1>
                            <div className='row align-items-center justify-content-center'>
                                <form action="" className='align-items-center justify-content-center w-100'
                                >

                                    <div className='form-row align-items-center justify-content-center'>
                                        <div class="form-group col-md-">
                                            <label for="inputName">Name</label>
                                            <input name='from_name'
                                                onChange={this.handleChange} type="text" class="form-control" id="inputName" placeholder="Name"></input>
                                        </div>

                                    </div>
                                    <div className='form-row align-items-center justify-content-center'>
                                        <div class="form-group col-md-">
                                            <label for="inputName">Email Address</label>
                                            <input name='from_email'
                                                onChange={this.handleChange} type="email" class="form-control" id="inputName" placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className='form-row align-items-center justify-content-center'>
                                        <div class="form-group col-md-">
                                            <label for="inputName">Message</label>
                                            <textarea name='from_message'
                                                onChange={this.handleChange}
                                                type="textArea" class="form-control" id="inputName" rows='4'
                                                cols='25'
                                                placeholder="Message"></textarea>
                                        </div>
                                        <p><a href="mailto:africanbullyregistry@gmail.com">Send email</a></p>                                    </div>
                                    <input type='submit' onClick={(e) => this.sendemail(e)} value='Send' className='btn btn-success'></input>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }



}



export default Contact;