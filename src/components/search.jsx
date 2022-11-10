import React, { Component, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import { withRouter } from './pedigree_cards';
import logo from '../images/logo2.jpg'
import { useState } from 'react';

export const Search = (props) =>
{
    
    const [search_input, setSearchInput] = useState('')
    const [search_dogs, setSearchDogs] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios
        .get(`${url}api/dogs/search/${search_input}`)
        .then((res) =>
        {
            setSearchDogs(res.data)
            displayResults()
        }
        )
        .catch((err) => console.log(err))
         }, [search_input] )

    const onInputChange = (e) =>
    {
        setSearchInput(e.target.value)

        
    }

    const buttonClick = (e) => {
        e.preventDefault()
        props.onSearchClick()
    }

    
    const displayResults = () =>
    {
        return Object.keys(search_dogs).map((item) =>
        {
            console.log(console.log(search_dogs[item]['name']))
            return <div>
                <button className='btn btn-warning w-100 mb-1 search_results_text text-white' name={props.name}
                 value={search_dogs[item]['id']}
                 onClick={e => {
                    props.onSearchClick ? props.onSearchClick(e) : navigate(`/my_dogs/${search_dogs[item]['id']}`)
                    setSearchInput(search_dogs[item]['name'])
                    setSearchDogs({})
                    console.log('search input', search_input)
                 }}
                 >{search_dogs[item]['name']}</button>
                 </div>
        })
    }
    return (


        <div>
            <div className='row align-items-center justify-content-center'>
                <input type='search' class='search_input' name={props.name} value={search_input} onChange={(e) => onInputChange(e)} placeholder='Search for dog'></input>
                <button type='submit' className='btn btn-warning' style={{ fontSize: 'small' }} onClick={(e) => this.search(e)}>Search</button>


            </div>
            <div className='row align-items-center justify-content-center search_results'>
                <div className='col-lg-12'>
                    {displayResults()}
                </div>

            </div>

        </div>



    )
}

