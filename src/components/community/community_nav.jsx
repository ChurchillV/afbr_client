import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Community_Nav = () =>
{
    return <div className='container-fluid'>
        <div className='row align-items-center justify-content-center my-2'>
            <div className='col-sm-1'>
                <Link class="" to="/community">Home</Link>

            </div>
            <div className='col-sm-3'>
                <Link class="" to="/community/newly_registered">Newly Registered</Link>

            </div>
            <div className='col-sm-2'>
                <Link class="" to="/community/posts">Posts</Link>

            </div><div className='col-sm-3'>
                <Link class="" to="/community/featured_articles">Featured Articles</Link>

            </div><div className='col-sm-3'>
                <Link class="" to="/community/advertisements">Advertisements</Link>

            </div>



        </div>
    </div>
}