import React from 'react'
import AdsPreview from './ads_preview'
import '../css_files/community_homepage.css';
import PostsPreview from './posts_preview'
import NewlyRegistered from './newly_registered_preview'
import FeaturedArticles from './featured_articles'
import Events from './events'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../css_files/community_homepage.css'

const images = [
   { image: require('../images/bully1.jpg') },
   { image: require('../images/bully2.jpg') }
];

export default function contents_area()
{
   return (

      < div className='container-fluid d9d9d9' >

         <div className='row align-items-center justify-content-center '>
            <div className='col-sm-6 mt-2'>



               <div className='row  align-items-center justify-content-center  text-dark newly-preview w-100'>

                  <p className=' text-center mt-3 px-5 px-sm-0 mb-5 mb-sm-0
               pt-5 pt-sm-0'>Welcome to the <span className='font-weight-bold text-dark'>African Bully Registry Community</span></p>

                  <div className='col-sm-12 mt-2 box_shadow   pb-0 pb-sm-5 pt-5 '>
                     <a href='community/newly_registered' className='w-100'>
                        <NewlyRegistered />
                     </a>
                  </div>
               </div>

               <div className='row  align-items-center justify-content-center  text-light m-3 ads-preview w-100'>

                  <div className='col-sm-12 mt-2  p-5 box_shadow'>
                     <a href='community/advertisements'>
                        <h6 className='ads-title'> Advertisements
                        </h6>
                     </a>
                     <p className='text-dark'>See what adorable doggies are on sale😍</p>
                  </div>
               </div>

               <div className='row  align-items-center justify-content-center  text-dark-justify m-3 featured-preview w-100'>
                  <div className='col-sm-12  p-5 mt-1 box_shadow'><FeaturedArticles /></div>
               </div>


            </div>

            <div className='col-sm-6'>

               <div className='row align-items-center justify-content-center  text-dark posts-preview w-100 box_shadow'>

                  <div className='col-sm-12 mt-2  pb-0 pb-sm-5 pt-5'><a href='community/posts'><PostsPreview /></a></div>
               </div>

               <div className='row  align-items-center justify-content-center  text-secondary p-4 m-3 events-preview w-100'>

                  <div className='col-sm-12  p-5 box_shadow'> <Events /></div>
               </div>
            </div>
         </div>
      </div >
      //  </div >
   )
}
