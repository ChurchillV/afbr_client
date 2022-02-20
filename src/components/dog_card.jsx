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


    // const { row_style,column_style, p_style } = colstyle;
    return (
        <div className='row align-items-center justify-content-start dog_card'>
            <div className='col-sm-'>
                <img src={props.image_src} height={props.height} width={props.width} className='render_card_image'></img>
            </div>
            <div className='col-sm-5'>
                <h4>{props.dogname}</h4>
                <p>{props.dogbreed}</p>
                <p>{props.dogsire}</p>
                <p>{props.dogmaam}</p>
                <p>{props.dogdate}</p>
                <p>{props.dogage}</p>
                <p>{props.dogdateRegisteredi}</p>
            </div>
           
        
        </div>
        
    )
}



export default DogCard;