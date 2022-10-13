import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './admin.css'

export const AdminMain = () =>
{
    return (
        <div className='container-fluid bg-dark'>
            <div class="row align-items-center justify-content-center">
                <h2 className='text-uppercase text-warning pt-5'>AFBR Admin Page</h2>
            </div>
            <div className='row align-items-center justify-content-center view_height_100 pb-5  mb-5'>
                <div className='col-sm-6 font-weight-bold'>
                    <button className='btn btn-outline-warning w-100 py-5 '>Add</button>
                </div>
                <div className='col-sm-6'>
                    <Link class="btn btn-outline-warning w-100 py-5 " to="/admin/users">View All Users</Link>
                </div>
                <div className='col-sm-6'>
                    <Link class="btn btn-outline-warning w-100 py-5 " to="/admin/dogs">View All Dogs</Link>
                </div>
                <div className='col-sm-6'>
                    <button className='btn btn-outline-warning w-100 py-5 '>N/A</button>
                </div>

            </div>
        </div>
    )
}