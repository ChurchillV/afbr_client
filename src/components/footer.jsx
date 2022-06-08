import React from 'react';
import { Link } from 'react-router-dom'
import '../css_files/App.css'

const Footer = (props) => {
  return (

    <footer class="footer_full text-center text-lg-start">

      <section
        class="d-flex justify-content-center align-items-center p-4 border-bottom"
      >

        <div class="me-5 px-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>

          <div to="" class="smallrem ">
            <i class="fab fa-whatsapp">Whatsapp: + 233 24 233 1674 , +233 20 377 5123</i>
          </div>
          <a href="https://www.facebook.com/groups/1103803533338705/?ref=share/" target='_blank' class="me-4 text-reset smallrem">
            <i class="fab fa-facebook-f">Facebook <br /></i>
          </a>
          {/* <Link to="" class="me-4 text-reset">
                <i class="fab fa-twitter">Twitter</i>
              </Link> */}
          <div to="" class="smallrem me-4 text-reset">
            <i class="fab fa-google "> Gmail :<a className='text-white text-lowercase' href="mailto:africanbullyregistry@gmail.com">africanbullyregistry@gmail.com</a>
                                              
        </i>
      </div>
      {/* <Link to="" class="me-4 text-reset">
                <i class="fab fa-instagram">Instagram: </i>
              </Link> */}
      <div class="smallrem me-4 text-reset">
        <a href="https://www.linkedin.com/company/african-bully-registry" className='smallrem text-white'><i class="fab fa-linkedin">LinkedIn</i></a>
      </div>

    </div>
           
          </section >
         
        
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
               
                
                {/* <div class="col-md-3 mx-auto mb-4">
                 
                  <h6 class="text-uppercase fw-bold mb-4">
                    Products
                  </h6>
                  <p>
                    <a to="#!" class="text-reset">Angular</a>
                  </p>
                  <p>
                    <a to="#!" class="text-reset">React</a>
                  </p>
                  <p>
                    <a to="#!" class="text-reset">Vue</a>
                  </p>
                  <p>
                    <a to="#!" class="text-reset">Laravel</a>
                  </p>
                </div> */}
                 
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
                  {/* <p>
                    <a to="#!" class="text-reset">Orders</a>
                  </p>
                  <p>
                    <a to="#!" class="text-reset">Help</a>
                  </p> */}
                </div>
              
     
                <div class="col-md-3 mb-md-0 mb-4">
              
                  <h6 class="smallrem text-uppercase fw-bold mb-4">
                    Contact Us
                  </h6>
                  <p className='smallrem'><i class=" fas fa-home me-3"></i> Accra, Ghana</p>
                  <p className='tsmallrem text-lowercase'>
                    <i class=" fas fa-envelope me-3"></i>
                    africanbullyregistry@gmail.com
                  </p>
                  <p className='smallrem'><i class=" fas fa-phone me-3"></i> + 233 24 233 1674</p>
                  <p  className='smallrem'><i class=" fas fa-print me-3"></i> + 233 20 377 5123</p>
                </div>
             
              </div>
              
            </div>
          </section>
          
        
         
          <div class="smallrem text-center p-4 " style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
            © 2021 Copyright:
            <a class="smallrem text-reset fw-bold" to="/">The African Bully Registry</a>
            <a class="d-block smallrem text-reset fw-bold" href="https://yawotuo.herokuapp.com/">This website was built by Yaw Otuo</a>
        
          </div>
          
        </footer >
       
    )
}



export default Footer;