import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const AdminNav = () => {
    return <div className='container-fluid'>
        <div className='row align-items-center justify-content-center my-2 bg-secondary
        text-white  font-weight-bold
        text-uppercase'>
            <div className='col-sm-1'>
            <Link class="text-white"  to="/admin/dogs">Dogs</Link>

            </div>
            <div className='col-sm-3'>
            <Link class="text-white"  to="/admin/users">Users</Link>

            </div>
           



        </div>
    </div>
}