import React, { Component } from 'react';
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
import { SearchNew } from './search_new';

class Breeds extends Component
{

    componentDidMount = () =>
    {
        $('.americanbulldoglink').on('click',
            function ()
            {
                $('#multiCollapseExample1').slideToggle()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideUp()


            })
        $('.americanbullylink').on('click',
            function ()
            {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideToggle()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideUp()


            })
        $('.frenchbullylink').on('click',
            function ()
            {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideToggle()
                $('#multiCollapseExample4').slideUp()


            })
        $('.pitbulllink').on('click',
            function ()
            {
                $('#multiCollapseExample1').slideUp()
                $('#multiCollapseExample2').slideUp()
                $('#multiCollapseExample3').slideUp()
                $('#multiCollapseExample4').slideToggle()


            })
    }

    render()
    {
        return (
            <div className='container-fluid'>
                <div className='row align-items-center justify-content-center '>

                    <Navbar />

                    <div class='container-fluid  mx-3'>
                        <div className='row breed_text align-items-center justify-content-center'>
                            <div class='container-fluid'>
                                <div class="row align-items-center justify-content-center  pt-3">
                                    <div className='col-md-6'>
                                        {/* <Search send_to={true} onSearchClick={this.onSearchClick} /> */}
                                        <SearchNew onSearchClick={this.onSearchClick}/>
                                    </div>
                                </div>
                                <div className='row align-items-start justify-content-center'>

                                    <div className='col-md-3'>

                                        <div className='row align-items-center justify-content-center'>
                                            <div className='w-100 breed_item list-group'>
                                                <p className=''>Click on a breed to read more</p>
                                                <ol className='list-group w-100'>
                                                    <li className='w-100 list-group-item'>

                                                        <button href='/' class="w-100 americanbulldoglink btn btn-default"
                                                        >American BullDog</button>
                                                    </li>
                                                    <li className='list-group-item'><button href='/'
                                                        class="americanbullylink btn btn-default"
                                                    >American Bully</button></li>
                                                    <li className='list-group-item'><button href='/' class="frenchbullylink btn btn-default"
                                                    >French BullDog</button></li>
                                                    <li className='list-group-item'>  <button href='/' class="pitbulllink btn btn-default"
                                                    >Pitbull</button></li>

                                                </ol>


                                                {/* <Link to='/breeds/americanbulldog'><h1 className='list-item'>AmericanBulldog</h1></Link> */}

                                            </div>


                                        </div>
                                    </div>
                                    <div className='col-md-9 box_shadow'>
                                        <div className='container-fluid'>
                                            <div className='row align-items-center justify-content-center'>
                                                <div class="col-lg-12">

                                                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                                                        <div class="card card-body list-group-item">
                                                            <AmericanBulldog />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                            <div className='row'>
                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                                                        <div class="card card-body list-group-item">
                                                            <AmericanBully />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample3">
                                                        <div class="card card-body list-group-item">
                                                            <FrenchBulldog />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>

                                                <div class="col-lg-12">
                                                    <div class="collapse multi-collapse" id="multiCollapseExample4">
                                                        <div class="card card-body list-group-item">
                                                            <Pittbull />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='row align-items-center justify-content-center'>

                                                <div class="col-lg-12 border border-dark-top py-5 my-5">
                                                    <div class="my-5">
                                                        <div class="">
                                                           <p>Click on a Breed to read more</p>
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
