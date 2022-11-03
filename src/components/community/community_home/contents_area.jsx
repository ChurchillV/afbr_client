import React from 'react'
import AdsPreview from './ads_preview'
import '../css_files/community_homepage.css';
import PostsPreview from './posts_preview'
import NewlyRegistered from './newly_registered_preview'
import FeaturedArticles from './featured_articles'
import Events from './events'
import { Swiper, SwiperSlide }  from 'swiper/react'
import 'swiper/css'
import { Navigation, EffectFade } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import '../css_files/community_homepage.css'

const images = [
   {image : require('../images/bully1.jpg')},
   {image : require('../images/bully2.jpg')}
];

export default function contents_area() {
  return (
    /*<div className='wrapper container-fluid'>
      <div className='ads-preview'>
         <a href='community/advertisements'><AdsPreview/></a>
      </div>
      <div className='posts-preview'>
         <a href='community/posts'><h1>Show off your dogs on our Posts section📸</h1></a>
         <PostsPreview/>
      </div>

      <div className='featured-articles-preview'>
      <a href='community/featured_articles'><h1>Featured Articles</h1></a>
         <h4>For the readers and writers🧾</h4>
      </div>

      <div className='newly-registered-preview'>
      <a href='community/newly_registered'><h1>Take a look at the new dogs on the block🥳</h1></a>
         <NewlyRegistered/>
      </div>

      <div className='events-preview'>
         <h1>No upcoming events😓</h1>
         <h3>Want to book one? Reach out to us at <br/>
         <span className='text-warning'>  
         <a href="mailto: africanbullyregistry@gmail.com" className='text-warning'>africanbullyregistry@gmail.com</a> 
         </span></h3>
      </div>
    </div>*/
   <div className='container-fluid bg-dark ovr-bg'>
      <div className='row fluid'>
         <div className='col-sm-6 mt-2'>
            <div className='row  text-light m-3 ads-preview'>
               <a href='community/advertisements'> <a href='community/advertisements'><h1 className='ads-title'> Advertisements </h1><br/></a>
               <h4>See what adorable doggies are on sale😍</h4></a>
            </div>

            <div className='row text-dark-justify m-3 featured-preview'>
               <FeaturedArticles/>
            </div>

            <div className='row text-light bg-light m-3 newly-preview'>
               <a href='community/newly_registered'>
               <NewlyRegistered/>
               </a>
            </div>
         </div>

         <div className='col-sm-6'>
            <div className='row text-dark m-3 bg-light posts-preview'>
               <a href='community/posts'><PostsPreview/></a>
            </div>

            <div className='row text-secondary p-4 m-3 events-preview'>
               <Events/>
            </div>
         </div>
      </div>
    </div>
  )
}
