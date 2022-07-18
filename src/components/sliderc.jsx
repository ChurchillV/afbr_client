import SimpleImageSlider from "react-simple-image-slider";
import '../css_files/react_image_slider.css';
import React from "react";
// import { render } from "@testing-library/react";

const galleryImages1 = [
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1656539893/klrrqitouybfiyynbmlp.jpg'
  },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655822290/ymxnslcf1oqpaoxnibk8.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655752381/helen_enp2pv.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742937/khaki_mizhr9.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742936/imperial_kennels_blackspade_q2zshb.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655659705/r2qz4pncsw2ckcs1xvnl.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655286346/tkotyfavqp39hpz8mrpw.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655211916/ib1xkjpx6o4bubzw3jeh.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1654705781/fatality_skullcandy_wvw6ei.jpg' },
  { url : 'https://res.cloudinary.com/daurieb51/image/upload/v1655742937/oneals_chaos_nb3zj2.jpg'},
  { url : 'https://res.cloudinary.com/daurieb51/image/upload/v1654337551/mjpzlz3bfdwh7mfphpon.jpg'},
];

const galleryImages2 = [
  {
    url: 'https://res.cloudinary.com/daurieb51/image/upload/v1656539893/klrrqitouybfiyynbmlp.jpg'
  },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655762033/g0pcgnsccoagglxorgjv.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655752381/helen_enp2pv.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742937/khaki_mizhr9.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742936/imperial_kennels_blackspade_q2zshb.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655659705/r2qz4pncsw2ckcs1xvnl.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655286346/tkotyfavqp39hpz8mrpw.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655211916/ib1xkjpx6o4bubzw3jeh.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1654705781/fatality_skullcandy_wvw6ei.jpg' },

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
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655762033/g0pcgnsccoagglxorgjv.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655752381/helen_enp2pv.jpg' },
  { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742937/khaki_mizhr9.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655742936/imperial_kennels_blackspade_q2zshb.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655659705/r2qz4pncsw2ckcs1xvnl.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655286346/tkotyfavqp39hpz8mrpw.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1655211916/ib1xkjpx6o4bubzw3jeh.jpg' },
  // { url: 'https://res.cloudinary.com/daurieb51/image/upload/v1654705781/fatality_skullcandy_wvw6ei.jpg' },

];

export class SliderC extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }



  // checkWindowSize = () => {
  //   if (window.screen.width < 770) {
  //     this.setState({ images: images1 })
  //   }
  //   else {
  //     this.setState({ images: images2 })
  //   }

  // }
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