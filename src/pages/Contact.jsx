import React from 'react'
import Emailer from '../componant/Emailer'

export default function Contact() {
  return (
   <> 
   
   <div class="site-section">
      <div class="container">
        <div class="row justify-content-center text-center mb-5">
          <div class="col-md-10">
            <div class="heading-39101 mb-5">
              <span class="backdrop text-center">Contact</span>
              <span class="subtitle-39191">Contact Us</span>
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
       
        <div class="row">
         <Emailer/>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-black mb-4">Contact Info</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                  <span class="d-block text-black">Address:</span>
                  <span>34 Street Name, City Name Here, United States</span></li>
                <li class="d-block mb-3"><span class="d-block text-black">Phone:</span><span>+1 242 4942 290</span></li>
                <li class="d-block mb-3"><span class="d-block text-black">Email:</span><span>info@yourdomain.com</span></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </div> 

    <div class="site-section">

      <div class="container">

        <div class="row justify-content-center text-center">
          <div class="col-md-10">
            <div class="heading-39101 mb-5">
              <span class="backdrop text-center">Testimonials</span>
              <span class="subtitle-39191">Testimony</span>
              <h3>Happy Customers</h3>
            </div>
          </div>
        </div>

        <div class="owl-carousel slide-one-item">
          <div class="row">
            <div class="col-md-6">

              <div class="testimonial-39191 d-flex">
                <div class="mr-4">
                  <img src="images/person_1.jpg" alt="Image" class="img-fluid"/>
                </div>
                <div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?&rdquo;</blockquote>
                <p>&mdash; John Doe</p>
                </div>
              </div>    
              
            </div>

            <div class="col-md-6">

              <div class="testimonial-39191 d-flex">
                <div class="mr-4">
                  <img src="images/person_2.jpg" alt="Image" class="img-fluid"/>
                </div>
                <div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?&rdquo;</blockquote>
                <p>&mdash; John Doe</p>
                </div>
              </div>    
              
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">

              <div class="testimonial-39191 d-flex">
                <div class="mr-4">
                  <img src="images/person_1.jpg" alt="Image" class="img-fluid"/>
                </div>
                <div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?&rdquo;</blockquote>
                <p>&mdash; John Doe</p>
                </div>
              </div>    
              
            </div>

            <div class="col-md-6">

              <div class="testimonial-39191 d-flex">
                <div class="mr-4">
                  <img src="images/person_2.jpg" alt="Image" class="img-fluid"/>
                </div>
                <div>
                <blockquote>&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, accusamus, facilis! Placeat praesentium alias porro aperiam facilis accusantium veniam?&rdquo;</blockquote>
                <p>&mdash; John Doe</p>
                </div>
              </div>    
              
            </div>
          </div>

        </div>

      </div>
    </div>
   
   
   </>
  )
}
