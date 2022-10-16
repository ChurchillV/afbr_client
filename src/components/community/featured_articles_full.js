import React from 'react'
// import Header from './Components/header'
// import Main from './Components/main'
//import FeaturedArticlesHeader from './featured_articles_header'
//import FeaturedArticlesMain from './featured_articles_main'
import { Community_Nav } from './community_nav'
import Navbar from '../navbar'
import Footer from '../footer'
import No_Articles from './no_Articles_yet'
//import '../css_files/App.css'
function FeaturedArticlesFull() {
  return (
    <>
      <Navbar/>
      <Community_Nav/>
      <No_Articles/>
      <Footer/>
    </>
  )
}

export default FeaturedArticlesFull
