import React from 'react';


export class Profile_Not_Full extends React.Component {
    componentDidMount = () => {

    }

    render() {
        return (
            <div>
                <h1>hello world</h1>
                <div class="modal2 fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Add a Post</h5>
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
                                                    <label className='text-dark ' for="postContent">Add a post</label>
                                                    <textarea class="form-control" id="postContent" placeholder='Feel free!!!' rows="3"></textarea>
                                                </div>
                                                <div class="form-group text-dark  text-left">
                                                    <label className='text-dark' for="sendfile">Post an image</label>
                                                    <input type="file" class="form-control-file" id="sendfile"></input>
                                                </div>
                                                <div class="form-group  text-left ">
                                                    <label className='text-dark' for="exampleFormControlFile1">post a video</label>
                                                    <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-success">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}