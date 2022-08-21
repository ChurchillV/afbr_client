import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Community_Nav = () => {
    return <div className='container-fluid'>
        <div className='row align-items-center justify-content-center my-2'>
            <div className='col-sm-1'>
            <Link class=""  to="/">Home</Link>

            </div>
            <div className='col-sm-3'>
            <Link class=""  to="/community">Advertissements</Link>

            </div>
            <div className='col-sm-2'>
            <Link class=""  to="/community">Posts</Link>

            </div><div className='col-sm-3'>
            <Link class=""  to="/community">Featured Articles</Link>

            </div><div className='col-sm-3'>
            <Link class=""  to="/newly_registered">Newly Registered</Link>

            </div>



        </div>
    </div>
}