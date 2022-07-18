import React from 'react';
import { Link } from 'react-router-dom'
import '../css_files/App.css';
import $ from 'jquery'


class Carousel extends React.Component {
  // constructor(props){
  //     super(props)
  // }

  componentDidMount = () => {
    $(document).ready(function () {
        $('.carousel').carousel()
    });

  }
  render() {
    return (
        <div id="carouselExampleIndicators"  class="carousel slide" data-ride="carousel" data-interval='3500'>
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className={`carousel-inner ${this.props.class}`}>
          <div class="carousel-item active">
            <img class="d-block img-fluid w-100" src={this.props.image_src1} alt="First slide"></img>
          </div>


          { this.props.image_src2 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src2} alt="imagesrc4"></img>
         </div> : null}
          { this.props.image_src3 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src3} alt="imagesrc4"></img>
         </div> : null}

          { this.props.image_src4 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src4} alt="imagesrc4"></img>
         </div> : null}

         { this.props.image_src5 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src5} alt="imagesrc5"></img>
         </div> : null}

         { this.props.image_src6 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src6} alt="Second slide"></img>
         </div> : null}

        { this.props.image_src7 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src7} alt="Second slide"></img>
         </div> : null}

         { this.props.image_src8 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src8} alt="Second slide"></img>
         </div> : null}

         { this.props.image_src9 ? 
           <div class="carousel-item">
           <img class="d-block img-fluid w-100" src={this.props.image_src9} alt="Second slide"></img>
         </div> : null}
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