import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import Profile_pic from '../images/profile.jpg'
import dog from '../images/dog.jfif'
import '../css_files/profile.css'
import DogCard from './dog_card';
import Card from './card';
import Profile_Card from './profile_card';
import { useParams, useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
import Try from './try';
import { url } from './weburl';


import Profile from './profile';
import Pedigree from './pedigree';
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
const card_style = {
    height: '100px',
    width: '100px,'
}

const { height, width } = card_style

export function withRouter(Child) {
    return (props) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Child {...props} navigate={navigate} params={params} location={location} />;
    }

}

class ProfileDog extends Component {

    constructor(props) {
        super(props)

        // console.log('this.props', this.props.params)
        // console.log(this.props.location.pathname.split('/'))



        this.state = {
            specificdog: {

            },
            edit: false,
            dog_sire_name: null,
            dog_dam_name: null,
            Pedigree: {
                
            }
        }


    }


    componentDidMount() {
        
        this.props.getdogpedigree(this.props.params.dog_id)
        this.getspecificdog()
        console.log(this.props)
 
    };


    // getpedigree = () => {
    //     console.log('calling in getpedgiree')
    //     return this.props.pedigree.maindog
    // }

    getspecificdog = () => {
        axios
        .get(`${url}api/dogs/${this.props.params.dog_id}`)
        .then((res) => {
            console.log(this.props.params.dog_id)
            this.setState({ specificdog: res.data[0] }, () => {
                console.log('finished setting state in profiledog', this.state)
                
            },
            // this.getdogpic()
            )

            
           
        }
    
        )
    
        .catch((err) => {
            console.log("Error couldnt get Dog");
            console.log(err.message);
        });
    }

    
     
    // getdogpic = () => {
    //     let dogpic = ''
    //     console.log(this.props.pedigree.maindog, '......')
    //     this.props.pedigreemaindog.public_id ?  dogpic = this.props.maindog.public_id 
    //     : dogpic = Profile_pic
    //     console.log('dogpic', dogpic, this.state.specificdog, Profile_pic)

    //     return dogpic
    // }

    handleDelete = () => {
        axios
            .delete(`${url}api/dogs/${this.props.params.dog_id}`)


            .catch((err) => {
                console.log("Error couldnt delete Dog");
                console.log(err.message);
            });

    }

   
    render() {
        return (
            <div className='profiledog'>
                <Profile>
                    <div className='row row_edit align-items-center justify-content-center'>
                    
                            <Link to={
                                `/dog_registrations/edit/${this.props.params.dog_id}`
                            }

                            >Edit &nbsp;</Link>

                            <div><Link to='/profile' onClick={this.handleDelete}>Delete</Link></div>

                    </div>

                    <div className='row profil-card align-items-center justify-content-center'>




                        <div className='col-sm-10'>
                            
                    {/* <Try dog={this.state.specificdog} dog_dam={this.state.dog_dam} /> */}
                  
                            {this.props.pedigree ? <Profile_Card image_src={Profile_pic} height={height}
                                width={width}
                               dog={this.props.pedigree.maindog} 
                              
                            
                            />
                            : null }
                        </div>







                    </div>
                
               

                </Profile>
                {this.props.pedigree.maindog.name ? <Pedigree data={this.props.pedigree}
                /> : null}

            </div>

        )
    }

}







export default withRouter(ProfileDog);