import React from 'react';
import '../css_files/App.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../css_files/profile.css'
import axios from 'axios';
import { url } from './weburl';



const DogCard = (props) => {

    let navigate = useNavigate()
    const handleDelete = (e) => {
        e.preventDefault()
        axios
            .delete(`${url}api/dogs/${props.dog_id}`)
            console.log('deleting')
            navigate('/home')

            .catch((err) => {
                console.log("Error couldnt delete Dog");
                console.log(err.message);
            });

    }
    // console.log(props)

    // const { row_style,column_style, p_style } = colstyle;
    return (
        <div className='row align-items-center justify-content-center dog_card'>
            <div className='col-2'>

               

                {props.dog_public_id ?
                    <img src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${props.dog_public_id}.png`}
                        className='render_card_image'></img>
                    : <img src={props.image_src}
                        height={props.height} width={props.width} className='render_card_image'></img>

                }
            </div>
            <div className='col-8'>
                <h4 style={{ fontWeight: '400' }} className='smallrem'> {props.dogname}</h4>

            </div>
            <div className='col-2 px-2 dropdown'>
                    <button className='dropbtn smallrem'>Actions</button>
                    <div className='dropdown-content smallrem'>
                        <Link to={
                            `/dog_registrations/edit/${props.dog_id}`
                        }
                            className='smallrem'
                        >Edit &nbsp;</Link>

                            <div><button className='btn btn-danger smallrem ' onClick={(e) => handleDelete(e)}>Delete </button></div>

                        
                    </div>

                </div>


        </div>

    )
}



export default DogCard;