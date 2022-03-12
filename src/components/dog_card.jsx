import React from 'react';
import '../css_files/App.css'
import { Link } from 'react-router-dom';
import '../css_files/profile.css'

// const colstyle = {
//     row_style: {
//         margin: '1%',
//         backgroundColor: 'white',
//         border: '1px solid black'
//     },
//     column_style: {
//         padding: '1%',
//         border: '1px solid black',
//         fontSize: '2vw'
//     },
//     p_style: {
//         border: '1px solid black'
//     }
// }

const DogCard = (props) => {

    // console.log(props)

    // const { row_style,column_style, p_style } = colstyle;
    return (
        <div className='row align-items-center justify-content-center dog_card'>
            <div className='col-'>
                {props.dog_public_id ? 
                     <img  src={`https://res.cloudinary.com/daurieb51/image/upload/v1642082142/${props.dog_public_id}.png`}
                    className='render_card_image'></img>
           :      <img  src={props.image_src}
           height={props.height} width={props.width} className='render_card_image'></img>
         
                }
            </div>
            <div className='col-9'>
                <h4 style={{fontWeight: '400'}}> {props.dogname}</h4>
            
            </div>
           
        
        </div>
        
    )
}



export default DogCard;