import React from 'react';
import axios from 'axios'
import Navbar from '../navbar';
import { PostCard } from './post_card';
import { PostProfile } from './post_profile';
import postpng from './images/post.png'

const url = 'http://localhost:5000/'

export class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: {},
            posts_loaded: false
        }
    }

    componentDidMount = () => {
        this.getPosts()
    }

    getPosts = () => {
        axios
            .get(`${url}/posts`)
            .then((res) => {
                console.log('getting all posts', res.data.success)

                this.setState({ posts: res.data.posts }, () => {

                    this.setState({ posts_loaded: true })
                })

            })
            .catch((err) => console.log(err))
    }

    displayPosts = () => {
        return Object.keys(this.state.posts).map((key) => {
            // console.log(key)
            return <div>
                <p key={this.state.posts[key]['id']} className='text-capitalize font-weight-bold  
                py-4 bg-dark text-white'>
                    {'Post'}: {this.state.posts[key]['content']}</p>
                {this.displayComments(this.state.posts[key]["comments"])}
            </div>

        })
    }

    displayComments = (array) => {
        return array.map((item) => {

            console.log(item)
            return <div>
                <p className='text-capitalize font-weight-bold pl-5 ml-5'>
                    {'comments'}: {item['content']}</p>

            </div>

        })
    }


    render() {
        return (
            <div className='container-fluid '>
                <Navbar />
                <div className='row justify-content-center align-items-start comm_body'>
                    <div className='col-sm-2 mt-5'>
                        {/* <p className='text-uppercase  py-3 font-weight-bold'> Profile</p> */}
                        {this.state.posts_loaded && this.displayPosts()}
                        <PostProfile />

                    </div>
                    <div className='col-sm-7'>
                        <p className='text-uppercase font-weight-bold mt-2'>Latest Posts</p>
                        {this.state.posts_loaded && this.displayPosts()}
                        <PostCard username='Corporate Love Pets' post_content='
                        Have you seen these really cute dogs' post_image='https://res.cloudinary.com/daurieb51/image/upload/v1655788535/tffvxybvnhjrhq4otzmd.jpg'
                        />
                        <PostCard username='Takyi Otou' post_content='
                        These puppies are the best' post_image='https://res.cloudinary.com/daurieb51/image/upload/v1654276166/u8yrvlfplyj99pgszp2t.jpg'
                        /><PostCard username='Corporate Love Pets' post_content='
                         Sad neews today' post_image='https://res.cloudinary.com/daurieb51/image/upload/v1655659705/r2qz4pncsw2ckcs1xvnl.jpg'
                        /><PostCard username='Bravewealth Kennels' post_content='
                          HOld them their hand' post_image='https://res.cloudinary.com/daurieb51/image/upload/v1655742937/khaki_mizhr9.jpg'
                        />
                    </div>
                    <div className='col-sm-2 mt-5'>
                        {/* <p className='text-uppercase  py-3 font-weight-bold'> Profile</p> */}
                        {this.state.posts_loaded && this.displayPosts()}
                        {/* <PostProfile /> */}
                        <img src={postpng} alt="" width={'50px'}/>
                        <p className='font-italic font-weight-light'>Share your thoughts with the community!!</p>
                    </div>

                </div>
                <div className='row align-items-center justify-content-center'>
                    <div className='col-sm-'>
                        <button className='btn btn-success'>See more posts &gt;&gt;</button>
                    </div>
                </div>
            </div>
        )

    }


}
