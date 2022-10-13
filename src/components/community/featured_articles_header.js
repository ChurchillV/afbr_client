import React from 'react'
import './css_files/vince_header.css'

function FeaturedArticlesHeader() {
  return (
    <>
      <nav className="nav-items">
         <ul className='nav-list'>
            <h1 className="navigation-button">Header</h1>
            <li className="navigation-button"><a href="#">Home</a></li>
            <li className="navigation-button"><a href="#">Gallery</a></li>
            <li className="navigation-button"><a href="#">Sign Up</a></li>
            <li className="navigation-button"><a href="#">About</a></li>
         </ul>
      </nav>
    </>
  )
  }

export default FeaturedArticlesHeader
