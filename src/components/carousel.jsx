import React from 'react';
import {Link} from 'react-router-dom'
import '../css_files/App.css';


class Carousel extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel" data-ride="carousel" data-interval='2000'>
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={this.props.image_src1} alt="First slide"></img>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={this.props.image_src2} alt="Second slide"></img>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={this.props.image_src3} alt="Second slide"></img>
              </div>
            </div>
            <Link class="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </Link>
            <Link class="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </Link>
          </div>
        )
    }



}



export default Carousel;