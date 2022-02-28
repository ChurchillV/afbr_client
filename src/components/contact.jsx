import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/contact.css';





class Contact extends Component {

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
                                            <input name='kennel_name' 
                                                type="text" class="form-control" id="inputName" placeholder="Name"></input>
                                        </div>
                                        
                                    </div>
                                    <div className='form-row align-items-center justify-content-center'>
                                    <div class="form-group col-md-">
                                            <label for="inputName">Email</label>
                                            <input name='current_owner' 
                                                type="email" class="form-control" id="inputName" placeholder="Email"></input>
                                        </div>
                                    </div>
                                    <div className='form-row align-items-center justify-content-center'>
                                        <div class="form-group col-md-">
                                            <label for="inputName">Message</label>
                                            <textarea name='kennel_name' 
                                                type="textArea" class="form-control" id="inputName" rows='4' 
                                                cols='25'
                                                 placeholder="Message"></textarea>
                                        </div>
                                        
                                    </div>
                                    <input type='submit' value='Send' className='btn btn-success'></input>
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