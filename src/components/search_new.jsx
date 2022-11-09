import React, { Component, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import Navbar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import '../css_files/breed.css';
import { url } from "./weburl";
import axios from 'axios'
import { withRouter } from './pedigree_cards';
import logo from '../images/logo2.jpg'
import { useState } from 'react';

export const SearchNew = (props) =>
{
    
    const [search_input, setSearchInput] = useState('')
    const [search_dogs, setSearchDogs] = useState({})

    useEffect(() => {
        axios
        .get(`${url}api/dogs/search/${search_input}`)
        .then((res) =>
        {
            setSearchDogs(res.data)
            // console.log(search_dogs)
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
                <button className='btn btn-warning w-100 mb-1' name='sire'
                 value={search_dogs[item]['id']}
                 onClick={e => {
                    props.onSearchClick && props.onSearchClick(e) 
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

