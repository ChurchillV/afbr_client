import React from 'react';
import axios from 'axios'
import Navbar from '../navbar';
import comment_image from './images/comment.png'
import love_image from './images/love.png'


const url = 'http://localhost:5000/'

export class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }



    render() {
        return (
            <div className='container   text-left bg-white mb-md-5 mb-sm-5'>
                <div className='row align-items-center justify-content-center my-2 pt-2'>
                    <div className='col-sm-10'>
                        <p className='fs-6 font-monospace font-large'>Post by: <span className='text-info font-weight-bold'> 
                         {this.props.username}</span></p>
                    </div>
                    <div className='col-sm-2'>
                        <p className='fs-6 font-monospace font-large'>at <span className='text-muted'> 
                         12:00</span></p>
                    </div>
                </div>
                <div className='row align-items-start justify-content-start my-1'>
                    <div className='col-sm-10 '>
                        <p className='fs-1'>{this.props.post_content}</p>
                    </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-12'>
                        <img src={this.props.post_image} alt="" width={'100%'} />
                    </div>
                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-12'>
                        <div className='row align-items-center justify-content-between mx-2'>

                            <img src={comment_image} alt="" width={'50px'} />
                            <span> <img src={love_image} alt="" width={'30px'} className='mx-1' />
                                10 likes</span>
                            <span> 
                                10 comments</span>
                        </div>

                    </div>
                </div>
            </div>
        )

    }


}
