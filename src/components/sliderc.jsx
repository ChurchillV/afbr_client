import SimpleImageSlider from "react-simple-image-slider";
import '../css_files/react_image_slider.css';
import React from "react";
// import { render } from "@testing-library/react";

const galleryImages1 = [
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589672/WhatsApp_Image_2022-09-07_at_19.12.26_3_pfsuw9.jpg'
  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589672/WhatsApp_Image_2022-09-07_at_19.12.26_q7y2jb.jpg'
  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589672/WhatsApp_Image_2022-09-07_at_19.12.26_2_ogxhjl.jpg'
  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589672/WhatsApp_Image_2022-09-07_at_19.12.26_1_kyt9ot.jpg'
  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_21.14.50_2_dmmcyb.jpg'
  },
  // {
  //   url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_19.12.26_4_bynw6u.jpg'
  // },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_19.05.49_ki5gs3.jpg'
  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_21.14.50_1_nrbwgu.jpg'
  },
  {
    url:'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_19.34.28_y8z9rh.jpg'
  },
  {
    url:'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_21.14.50_miezyu.jpg'
  },
  {
    url:'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_19.36.17_aykegx.jpg'
  },
  {
    url:'https://res.cloudinary.com/daurieb51/image/upload/v1654275576/dhwi4ibvq4yfdce5yfmu.jpg'
  },
];



const pedImages = [
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1658103998/a_qgzlg5.jpg'

  },
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1658178851/b_gc101u.jpg'
  }
]

const homeImages = [
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1656539893/klrrqitouybfiyynbmlp.jpg'
  },

  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742937/khaki_mizhr9.jpg' },

];

export class SliderC extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    return (
      <div className="">

        {this.props.galleryImages &&
          <SimpleImageSlider
            width={'100%'}
            height={window.screen.width < 770 ? 350 : 550}
            images={galleryImages1}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
            style={{ position: 'relative' }}
          />}
        {this.props.pedImages &&
          <SimpleImageSlider
            width={'100%'}
            height={window.screen.width < 770 ? 350 : 550}
            images={pedImages}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
            style={{ position: 'relative' }}
          />}

        {this.props.homeImages &&
          <SimpleImageSlider
            width={'100%'}
            height={window.screen.width < 770 ? 350 : 550}
            images={homeImages}
            showBullets={true}
            showNavs={true}
            loop={true}
            autoPlay={true}
            style={{ position: 'relative' }}
          />}


      </div>
    );
  }

}