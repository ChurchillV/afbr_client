import React, { Component } from 'react';
import { Link, Navigate } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import { withRouter } from './pedigree_cards';


class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search_input: '',
            search_dogs: {}




        }
    }
    onChange = (e) => {
        this.setState({ search_dogs: e.target.value },
            () => {
                axios
                    .get(`${url}api/dogs/search/${this.state.search_dogs}`)
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

    reset = (dog) => {
        this.setState({search_dogs: {} }, ()=> console.log(this.state))
        this.setState({search_dogs: dog }, ()=> console.log(this.state))

        console.log('dog in reset', dog)
        console.log('reset')
    }

    onClickFunc=(e, item)=>{
        if(this.props.send_to){
           this.props.navigate(`/my_dogs/${item.id}`)
            console.log('send to ')
        }
        else{
            this.props.onSearchClick(e)
            this.reset(item)
        }
        
    }

    render_search_list = () => {

        if (Object.keys(this.state.search_dogs)[0] != 'id'){
            
            console.log('this,state,search_Dogs[0]',)
            return Object.values(this.state.search_dogs).map((item) => {

                let item_to_number = Number(item.id)
                console.log('item', item)
                if (typeof(item) != 'string'){
                    console.log(typeof(item))
                    return <div className='row align-items-center justify-content-center'>
                    <button name={this.props.name} value={item_to_number}
                        onClick={(e) => {
                           this.onClickFunc(e, item)
                        }
                        } value={item.id}
                        className='btn btn-info text-capitalize search_results_text fade-in w-100'>
                            {item.name}</button>
    
                </div>
                }
                
    
            })
    
    
        }

        

    }

    test = () => {
        return <p>black SS is king </p>

    }
    render() {
        return (

            <div>
                <div className='row align-items-center justify-content-center'>
                    <input type='search' class='search_input' name={this.props.name} value={this.state.search_dogs.name} onChange={(e) => this.onChange(e)} placeholder='Search for dog'></input>
                    <button type='submit' className='btn btn-warning' style={{fontSize:'small'}} onClick={(e) => this.search(e)}>Search</button>


                </div>
                <div className='row align-items-center justify-content-center search_results'>
                    <div className='col-lg-12'>
                            {this.render_search_list()}

                    </div>

                </div>

            </div>

        )
    }
}

export default withRouter(Search)