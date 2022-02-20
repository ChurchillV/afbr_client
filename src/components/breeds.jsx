import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import { Search } from './search'
import { AmericanBulldog } from './americanbulldog';
import { AmericanBully } from './americanbully';
import { FrenchBulldog } from './frenchbulldog';
import { Pittbull } from './pitbull';


class Breeds extends Component {





    render() {
        return (
            <div className='row align-items-center justify-content-center breed_full'>

                <Navbar />

                <div class='container'>
                    <div className='row breed_text align-items-center justify-content-center'>
                        <h1>Breeds</h1>
                        <div class='container-fluid'>
                            <div className='row align-items-center justify-content-center'>
                            <Search />

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
