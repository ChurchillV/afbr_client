import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { url } from '../weburl';
import { AdminNav } from './admin_nav';
import './admin.css'

export const AdminDogs = () =>
{
    const [dogs, setDogs] = useState()

    useEffect(() =>
    {
        getAllDogs()
    }, [])

    const getAllDogs = () =>
    {
        axios
            .get(`${url}api/dogs`)
            .then((res) =>
            {
                // console.log(res)
                setDogs(res.data)
            }
            )
            .catch((err) => console.log(err))
    }

    const displayBody = () =>
    {
        return dogs && dogs.map((item) =>
        {

            return <tr>{Object.keys(item).map((key) =>
            {
                // console.log(item[key])
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
            <div class="row align-items-center justify-content-center">
                <AdminNav />
            </div>
            <div class="row align-items-center justify-content-center">
                <div className='col-sm-6'>
                    <h4 className='text-uppercase'>Dogs</h4>
                </div>
            </div>
            
            <div class="row align-items-center justify-content-center position-fixed controls-admin">
                <div className='col-sm-6'>
                    <button className='btn btn-outline-success'>Add Dog</button>

                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div className='col-sm-12'>
                    <table className='table table-sm table-bordered table-striped'>
                        <thead className='thead-dark'>
                            <tr>
                                <th scope="col">Id</th>

                                <th scope="col">Name</th>
                                <th>Age</th>
                                <th>Image_url</th>
                                <th>Breed</th>
                                <th>Sire</th>

                                <th>Dam</th>
                                <th>Sex</th>
                                <th>Date Of Birth</th>
                                <th>Public Id</th>
                                <th>Id</th>

                                <th>User</th>
                                <th>Current Owner</th>
                                <th>Place Of Birth</th>
                                <th>Kennel Name</th>
                                <th>Land OF Standing</th>
                                <th>AFBR NO</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>Num of Progeny</th>
                                <th>Image Format</th>
                                <th>Date Registered</th>
                                <th>hasBeenPaidFor</th>
                                <th>expresspaytoken</th>
                                <th>expresspay_order_id</th>


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