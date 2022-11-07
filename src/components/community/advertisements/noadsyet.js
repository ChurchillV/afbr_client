import React from 'react'
import '../css_files/adverts.css'

function NoAdsYet() {
  return (
    <div className="Disappointment">
      <h6>No advertisements to display yet😢</h6>
      <p className='text-dark'>Want to advertise your dog? Reach out to us at</p>
      <p><a href="mailto: africanbullyregistry@gmail.com" className='text-warning'>africanbullyregistry@gmail</a></p>
    </div>
  )
}

export default NoAdsYet
