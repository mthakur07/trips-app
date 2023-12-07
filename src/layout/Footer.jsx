import React from 'react'
import WhatApp from '../componant/WhatApp'

export default function Footer() {
  return (
    
    <>
      <footer className="site-footer bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <h2 className="footer-heading mb-3">Instagram</h2>
            <div className="row">
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_1.jpg" alt="Image" className="img-fluid"/></a>
              </div>
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_2.jpg" alt="Image" className="img-fluid"/></a>
              </div>
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_3.jpg" alt="Image" className="img-fluid"/></a>
              </div>
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_4.jpg" alt="Image" className="img-fluid"/></a>
              </div>
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_5.jpg" alt="Image" className="img-fluid"/></a>
              </div>
              <div className="col-4 gal_col">
                <a href="#"><img src="images/insta_6.jpg" alt="Image" className="img-fluid"/></a>
              </div>
            </div>
          </div>
          <div className="col-lg-8 ml-auto">
            <div className="row">
              <div className="col-lg-6 ml-auto">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <h2 className="footer-heading mb-4">Newsletter</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt odio iure animi ullam quam, deleniti rem!</p>
                <form action="#" className="d-flex" class="subscribe">
                  <input type="text" className="form-control mr-3" placeholder="Email"/>
                  <input type="submit" value="Send" className="btn btn-primary"/>
                </form>
              </div>
              
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by 
            </p>
            </div>
          </div>
        </div>
         <WhatApp/>
      </div>
    </footer>
    
    </>
  )
}
