import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dogpic from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile from './profile';
import axios from 'axios';
import { set } from 'mongoose';
import { setState } from "react";


// const colstyle = {
//     row_style: {
//         margin: '1%',
//         backgroundColor: 'black',
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





// export default DogCard;
// const card_style = {
//     height: '100px',
//     width: '100px,'
// }

// const { height, width } = card_style

class ProfileMain extends Component {

    constructor(props){
        super(props);
        this.state = {
            dogs : [],
        };
    }

    componentDidMount = () =>{
        this.refreshList()
    }
    
    refreshList = () => {
        axios
        .get("http://localhost:8000/api/dogs")
        .then((res) => {
            this.setState({ dogs: res.data }, () => (console.log(this.state)))
        }
                )
            
        .catch((err) => {
            console.log("Error couldnt get Dog");
            console.log(err.message);
        }); 
        


        
    };

    render_dog_list = () => {

        return this.state.dogs.map((dog)=> ( 
        <div className='col-sm-6 text-capitalize render_card'>
                                <Link to={`/my_dogs/${dog.id}`}>
                                    <DogCard image_src={dogpic}
                                        dogname={dog.name} />
                                </Link>
        </div>
        ))
    }




    
    
    render() {
        return (
            
            <Profile>
                
                
            <div className='row' style={{ padding: '1%' }}>
                 {this.render_dog_list()}
                 {console.log('hey')}
                        </div>
                            
            </Profile>
        )
        
    }



}



export default ProfileMain;