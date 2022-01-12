import React from 'react';
import '../css_files/App.css'

const Card = (props) => {
    return (
        <div className={props.className}>
            

            <img src={props.image_src} height={props.height} width={props.width} className={props.image_class}></img>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
            <p>{props.text7}</p>
            <p>{props.text8}</p>
            <p>{props.text9}</p>
            
           
        
        </div>
        
    )
}



export default Card;