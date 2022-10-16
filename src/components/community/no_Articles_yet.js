import React from 'react'
import './css_files/vince_main.css'
//import 'src/css_files/App'

function no_Articles_yet() {
  return (
   <>
    <div>
      <h1 className='No_Articles_Message'>
         No Articles posted Here Yet.<br/>
         Interested in writing one? Reach out to us at <br/>
         <a href="mailto: africanbullyregistry@gmail.com">Africanbullyregistry@gmail.com</a> 
      </h1>
    </div>
   </>
  )
}

export default no_Articles_yet
