import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'


export class Search extends Component {

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
                    .get(`${url}api/dogs/search/${this.state.search_input}`)
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

            let item_to_number = Number(item.id)
            console.log('item id to number', item_to_number, item.id)
            return <button name={this.props.name} name={this.props.name} value={item_to_number}
            onClick={(e) => this.props.onSearchClick(e)}  value={item.id} className='text-info text-capitalize search_results_text'>{item.name}</button>

        })
        


    }

    test = () => {
        return <p>black SS is king </p>

    }
    render() {
        return (

            <div>
                <div className='row align-items-center justify-content-center'>
                    <input type='search' name='search_input' value={this.state.search_input} onChange={(e) => this.onChange(e)} placeholder='Search for dog'></input>
                    <button type='submit' className='btn btn-success' onClick={(e) => this.search(e)}>Search</button>


                </div>
                <div className='row align-items-center justify-content-center search_results'>
                    {this.render_search_list()}

                </div>

            </div>

        )
    }
}
