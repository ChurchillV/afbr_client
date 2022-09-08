import React from 'react';
import { Link } from 'react-router-dom'
import '../css_files/App.css'

const Footer = (props) => {
  return (

    <div class=" container mt-5">
      <div className='row mt-5 align-items-center justify-content-center'>


        <div class="col-sm-">
          <span className='smallrem text-warning'>Get connected with us on social networks:</span>
        </div>

      </div>
      <div
        class="row justify-content-center align-items-center py-1 border-bottom"
      >




       

        <div className='col-2 smallrem'>
          <a href="https://www.facebook.com/groups/1103803533338705/?ref=share/" target='_blank' 
          class="text-reset smallrem text-warning">
            <p class="fa fa-facebook smallrem text-warning">
             </p>
          </a>
         
        </div>

        <div class="smallrem  col-2">
          <a href="" className='smallrem text-warning'><span className='fa fa-twitter smallrem'></span> </a>
        </div>

        <div class="smallrem  col-2">
          <a href="https://www.linkedin.com/company/african-bully-registry" className='smallrem text-warning'><span className='fa fa-linkedin smallrem'></span> </a>
        </div>
        <div class="smallrem  col-2">
          <a href="" className='smallrem text-warning'><span className='fa fa-instagram smallrem'></span> </a>
        </div>
        <div class="smallrem col-sm-2">
          <p class=""><span className='fa fa-whatsapp smallrem text-warning'></span><span className='smallrem text-warning'>+ 233 24 233 1674 , +233 20 377 5123</span></p>
        </div>

      </div >


      <section class="">
        <div class="container text-center text-sm-start mt-5 mt-sm-5">

          <div class="row mt-0 mt-sm-3">

            <div class="col-md-3  mx-auto mb-1">

              <h6 class="smallrem text-uppercase fw-bold mb-1 mb-sm-4">
                <i class="fas fa-gem me-3"></i>AFRICAN BULLY REGISTRY
              </h6>
              <p className='smallrem'>
                Making the bully community well respected
              </p>
            </div>



            <div class="smallremcol-md-3 mx-auto mt-4 mt-sm-0">

              <h6 class="smallrem text-uppercase fw-bold mb-3 mb-sm-4">
                Useful links
              </h6>
              <p>
                <a href="/terms" class=" smallrem text-reset">Terms and Conditions</a>
              </p>
              <p>
                <a href="/registration" class=" smallrem text-reset">Register</a>
              </p>

            </div>


            <div class="col-md-3 mb-md-0 ">

              <h6 class="smallrem text-uppercase fw-bold mb-4">
                Contact Us
              </h6>
              <p className='smallrem'><i class=" fas fa-home me-3"></i> Accra, Ghana</p>
              <p className='tsmallrem text-lowercase'>
                <i class=" fas fa-envelope me-3"></i>
                <span className='smallrem'> africanbullyregistry@gmail.com</span>
              </p>

            </div>

          </div>

        </div>
      </section>



      <div class="smallrem text-center my-5" >
        © 2021 Copyright:
        <a class="smallrem text-reset fw-bold" to="/">The African Bully Registry</a>
        <a class="d-block smallrem text-reset fw-bold" href="https://yawotuo.herokuapp.com/">This website was built by Yaw Otuo</a>

      </div>

    </div >

  )
}



export default Footer;