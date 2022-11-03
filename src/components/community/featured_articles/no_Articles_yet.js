import React from 'react'
import '../css_files/vince_main.css'
//import 'src/css_files/App'

function no_Articles_yet() {
  
  return (
   
   <div className='container-fluid'>
     <div className='row align-items-center justify-content-center view_height_100 comm_body'>
        <div className='col-sm-6'>
          <p className=' text-dark'>
             No articles posted here yet.<br/>
             interested in writing one? Reach out to us at <br/>
           <span className='text-warning'>  <a href="mailto: africanbullyregistry@gmail.com" className='text-warning'>africanbullyregistry@gmail.com</a> </span>
          </p>
        </div>
     </div>
   </div>
   
  )
}

export default no_Articles_yet
