import React from "react";

const Image = (props) => {
    return(
        <div style={{ backgroundColor: 'blue' }}>
            <img src={props.image_src} alt={props.image_alt} height={props.height} width={props.width}></img>

        </div>
    )
}

export default Image;