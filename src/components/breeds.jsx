import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'


class Breeds extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_input: '',
            search_dogs: {}




        }
    }


    onChange = (e) => {
        this.setState({ search_input: e.target.value },
            () => {
                axios
                    .get(`http://localhost:8000/api/dogs/search/${this.state.search_input}`)
                    .then((res) => {
                        console.log(res.data)
                        this.setState({ ...this.state, search_dogs: res.data },
                            () => console.log('search dogs', this.state.search_dogs))
                    }


                    )
                    .catch((err) => console.log(err))

            })
    }

    search = (e) => {
        e.preventDefault()
        console.log('searching', this.state.search_input)
        axios
            .get(`${url}api/dogs/search${this.state.search_input}`)
            .then((res) => console.log(res.data))


            .catch((err) => console.log(err))
    }

    render_search_list = () => {



        return Object.values(this.state.search_dogs).map((item) => {
            return <p className='text-info text-capitalize search_results_text'>{item.name}</p>

        })



    }

    test = () => {
        return <p>black SS is king </p>

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
                                <p>Shows items go here</p>
                            </div>

                            <div className='row align-items-center justify-content-center'>
                                <input type='search' name='search_input' value={this.state.search_input} onChange={(e) => this.onChange(e)} placeholder='Search for dog'></input>
                                <button type='submit' className='btn btn-success' onClick={(e) => this.search(e)}>Search</button>


                            </div>



                            <div className='row align-items-center justify-content-center search_results'>
                                {this.render_search_list()}

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }



}



export default Breeds;