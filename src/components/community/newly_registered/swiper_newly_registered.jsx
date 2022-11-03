// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y, Autoplay } from 'swiper'
import '../css_files/community.css'

// Import Swiper styles
// import 'swiper/swiper.min.css'
import 'swiper/css'
import "swiper/css/navigation"
// import 'swiper/modules/navigation/navigation.min.css'
SwiperCore.use([Navigation, A11y, Autoplay])


let image1 = 'https://res.cloudinary.com/daurieb51/image/upload/v1665644645/d7ud40nk8qzkpkqt90c4.png'
let image2 = 'https://res.cloudinary.com/daurieb51/image/upload/v1662589673/WhatsApp_Image_2022-09-07_at_19.34.28_y8z9rh.jpg'
let image3 = 'https://res.cloudinary.com/daurieb51/image/upload/v1662589672/WhatsApp_Image_2022-09-07_at_19.12.26_1_kyt9ot.jpg'


const NewlyRegisteredSwiper = () =>
{
    return (
        <Swiper
            navigation={true}
            grabCursor={true}
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{
                delay: 500,
                disableOnInteraction: false
            }}
            className='swiper'

        >
            <SwiperSlide><div className='border border-dark '>
                <img src={image1} className='w-100 swiper_images' alt='Newly Registered Dog' /></div></SwiperSlide>
            <SwiperSlide><div className='border border-dark '><img src={image2} alt='Newly Registered Dog' className='w-100 swiper_images' /></div></SwiperSlide>
            <SwiperSlide><div className='border border-dark swiper_images '><img src={image3} alt='Newly Registered Dog' className='w-100' /></div></SwiperSlide>
            <SwiperSlide><div className='border border-dark swiper_images'><img src={image1} alt='Newly Registered Dog' className='w-100' /></div></SwiperSlide>
            ...
        </Swiper>
    );
};
export default NewlyRegisteredSwiper;