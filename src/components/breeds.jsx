import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import Search from './search'
import { AmericanBulldog } from './americanbulldog';
import { AmericanBully } from './americanbully';
import { FrenchBulldog } from './frenchbulldog';
import { Pittbull } from './pitbull';
import $ from 'jquery'

class Breeds extends Component {

    componentDidMount = () => {
        $('.americanbulldoglink').on('click',
            function () {
                $('#multiCollapseExample1').slideToggle()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideUp()


            })
        $('.americanbullylink').on('click',
            function () {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideToggle()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideUp()


            })
        $('.frenchbullylink').on('click',
            function () {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideToggle()
                $('#multiCollapseExample4').slideUp()


            })
        $('.pitbulllink').on('click',
            function () {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideToggle()


            })
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
                                <Search send_to={true} onSearchClick={this.onSearchClick} />

                            </div>
                            <div className='row align-items-start justify-content-center'>
                                <div className='col-sm-2'>

                                    <div className='row align-items-center justify-content-center text-capitalize'>
                                        <div className='w-100 breed_item list-group'>
                                            <ol className='list-group w-100'>
                                                <li className='w-100 list-group-item'>

                                                    <a class="w-100 americanbulldoglink"
                                                    >American BullDog</a>
                                                </li>
                                                <li className='list-group-item'><a class="americanbullylink"
                                                >American Bully</a></li>
                                                <li className='list-group-item'><a class="frenchbullylink"
                                                >French BullDog</a></li>
                                                <li className='list-group-item'>  <a class="pitbulllink"
                                                >Pitbull</a></li>

                                            </ol>


                                            {/* <Link to='/breeds/americanbulldog'><h1 className='list-item'>AmericanBulldog</h1></Link> */}

                                        </div>


                                    </div>
                                </div>
                                <div className='col-sm-10'>
                                    <div className='container-fluid'>
                                        <div className='row align-items-center justify-content-center'>
                                            <div class="row align-items-center justify-content-center">
                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                                                        <div class="card card-body">
                                                            <AmericanBulldog />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className='row'>
                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                                                        <div class="card card-body">
                                                            <AmericanBully />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample3">
                                                        <div class="card card-body">
                                                            <FrenchBulldog />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>

                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample4">
                                                        <div class="card card-body">
                                                            <Pittbull />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>


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
