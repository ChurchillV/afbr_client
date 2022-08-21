import React from 'react';
import { Link } from 'react-router-dom'
import '../css_files/App.css'

const Footer = (props) => {
  return (

    <div class=" container">
      <div className='row my-5 mt-0 align-items-center justify-content-center'>


        <div class="col-sm-3">
          <span className='smallrem'>Get connected with us on social networks:</span>
        </div>

      </div>
      <div
        class="row justify-content-center align-items-center py-1 border-bottom"
      >




        <div class="smallrem col-sm-2">
          <p class=""><span className='fa fa-whatsapp'></span>+ 233 24 233 1674 , +233 20 377 5123</p>
        </div>

        <div className='col-sm-2 smallrem'>
          <a href="https://www.facebook.com/groups/1103803533338705/?ref=share/" target='_blank' class="me-4 text-reset smallrem">
            <p class="fa fa-facebook">
             </p>
          </a>
         
        </div>

        <div class="smallrem  col-sm-2">
          <a href="" className='smallrem text-white'><span className='fa fa-twitter'></span> </a>
        </div>

        <div class="smallrem  col-sm-2">
          <a href="https://www.linkedin.com/company/african-bully-registry" className='smallrem text-white'><span className='fa fa-linkedin'></span> </a>
        </div>
        <div class="smallrem  col-sm-2">
          <a href="" className='smallrem text-white'><span className='fa fa-instagram'></span> </a>
        </div>


      </div >


      <section class="">
        <div class="container text-center text-md-start mt-5">

          <div class="row mt-3">

            <div class="col-md-3  mx-auto mb-1">

              <h6 class="smallrem text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>AFRICAN BULLY REGISTRY
              </h6>
              <p className='smallrem'>
                Making the bully community well respected
              </p>
            </div>



            <div class="smallremcol-md-3 mx-auto mb-4">

              <h6 class="smallrem text-uppercase fw-bold mb-4">
                Useful links
              </h6>
              <p>
                <a href="/terms" class=" smallrem text-reset">Terms and Conditions</a>
              </p>
              <p>
                <a href="/registration" class=" smallrem text-reset">Register</a>
              </p>

            </div>


            <div class="col-md-3 mb-md-0 mb-4">

              <h6 class="smallrem text-uppercase fw-bold mb-4">
                Contact Us
              </h6>
              <p className='smallrem'><i class=" fas fa-home me-3"></i> Accra, Ghana</p>
              <p className='tsmallrem text-lowercase'>
                <i class=" fas fa-envelope me-3"></i>
                <span className='smallrem'> africanbullyregistry@gmail.com</span>
              </p>
              <p className='smallrem'><i class=" fas fa-phone me-3"></i> + 233 24 233 1674</p>
              <p className='smallrem'><i class=" fas fa-print me-3"></i> + 233 20 377 5123</p>
            </div>

          </div>

        </div>
      </section>



      <div class="smallrem text-center " >
        © 2021 Copyright:
        <a class="smallrem text-reset fw-bold" to="/">The African Bully Registry</a>
        <a class="d-block smallrem text-reset fw-bold" href="https://yawotuo.herokuapp.com/">This website was built by Yaw Otuo</a>

      </div>

    </div >

  )
}



export default Footer;