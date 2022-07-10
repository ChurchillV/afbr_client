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
            posts_loaded: false,
            comment_modal: false,
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
                    <div className='col-sm-'>
                        <img src={this.props.post_image} alt="" width={'100%'} />
                    </div>
                </div>

                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-12'>
                        <div className='row align-items-center justify-content-between mx-2'>

                            <button className='btn btn-default'
                                onClick={() => this.setState({ comment_modal: !this.state.comment_modal })}
                                data-toggle="modal" data-target="#commentAdder"><img src={comment_image} alt="" width={'50px'} /></button>


                            <span> <img src={love_image} alt="" width={'30px'} className='mx-1' />
                                10 likes</span>

                            <div>
                                <a class="btn btn-default" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    10 comments
                                </a>

                            </div>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body px-5 py-4 font-weight-normal">
                                    <p>Comment by: <span className='font-weight-bold text-success text-capitalize'>Yaw Otuo</span> </p>
                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                        cred nesciunt sapiente ea proident.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {this.state.comment_modal ?


                    <div class="modal fade" id="commentAdder" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Add a Comment</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div className='container-fluid'>
                                        <div className='row align-items-center justify-content-start'>
                                            <div className='col-sm-10'>
                                                <form className='text-dark' action="
                            ">
                                                    <div class="form-group text-left" >
                                                        <textarea class="form-control" id="postContent" placeholder='Feel free!!!' rows="3"></textarea>
                                                    </div>
                                                    {/* <div class="form-group text-dark  text-left">
                                                        <label className='text-dark' for="sendfile"><img src={image_svg} alt="" width={'5%'} /> Post an image</label>
                                                        <input type="file" class="form-control-file" id="sendfile"></input>
                                                    </div>
                                                    <div class="form-group  text-left ">
                                                        <label className='text-dark' for="exampleFormControlFile1"><img src={video_svg} alt="" width={'5%'} />  post a video</label>
                                                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                                                    </div> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-success">Comment   </button>
                                </div>
                            </div>
                        </div>
                    </div> : null}
            </div>
        )

    }


}
