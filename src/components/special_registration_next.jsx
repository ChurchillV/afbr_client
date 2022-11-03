import Navbar from "./navbar"
import { Link, NavLink } from 'react-router-dom';


export const RegistrationNextPage = () =>
{
    return (
        <div className="container-fluid bg-dark view_height_100">
            <Navbar color='white'/>
            <div className="row align-items-center justify-content-center my-5 pt-5">
                <div className="col-sm-6  mt-5">
                        <Link to='/profile' className="text-white btn btn-outline-warning w-100 p-3">Go to Profile</Link>
                </div>
                <div className="col-sm-6 w-100 mt-5">
                    <Link to='/dog_registrations_special/1' className="text-white btn btn-outline-warning w-100 p-3">Register New Dog</Link>
                </div>
                <div className="col-sm-6 w-100 mt-5">
                    <Link to='/admin' className="text-white btn btn-outline-warning w-100 p-3">Back to Admin</Link>
                </div>
            </div>
        </div>
    )
}