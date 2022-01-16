import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



export const Progress = (props) => {
    return (
        <div class="progress" style={{width: '90%'}}>
            <div class="progress-bar" role="progressbar" style={{width: props.valuenow}}
             aria-valuenow={props.valuenow} aria-valuemin="0" aria-valuemax="100">{props.valuenow}</div>
        </div>
    )
}