import React from 'react'
import AdsPreview from './ads_preview'
import '../css_files/community_homepage.css';
import PostsPreview from './posts_preview'
import NewlyRegistered from './newly_registered_preview'

export default function contents_area() {
  return (
    <div className='wrapper container-fluid'>
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
    </div>
  )
}
