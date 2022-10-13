import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../weburl';
import { AdminNav } from './admin_nav';

export const AdminUsers = () =>
{
    const [users, setUsers] = useState()

    useEffect(() =>
    {
        getAllUsers()
    }, [])

    const getAllUsers = () =>
    {
        axios
            .get(`${url}api/users`)
            .then((res) =>
            {
                console.log(res)
                setUsers(res.data)
            }
            )
            .catch((err) => console.log(err))
    }

    const displayBody = () =>
    {
        return users && users.map((item) =>
        {

            return <tr>{Object.keys(item).map((key) =>
            {
                console.log(item[key])
                return <td>{item[key]}</td>

            })}</tr>
        })
    }

    return (
        <div className='container-fluid'>
            <div class="row align-items-center justify-content-center">
                <div className='col-sm-6'>
                    <h6>Admin Page</h6>
                </div>
            </div>
            <div class="row">
                <AdminNav />
            </div>
            <div class="row align-items-center justify-content-center">
                <div className='col-sm-6'>
                    <h4 className='text-uppercase'>Users</h4>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div className='col-sm-12'>
                    <table className='table  table-sm table-bordered table-striped '>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope="col">Id</th>

                                <th scope="col">Username</th>
                                <th>Uid</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Contact Address</th>

                                <th>Image Url</th>
                                <th>Public Id</th>



                            </tr>
                        </thead>
                        <tbody className='table table-striped table-hover'>
                            {displayBody()}

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}