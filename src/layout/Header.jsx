import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
     <header class="site-navbar site-navbar-target" role="banner">
        <div class="container">
          <div class="row align-items-center position-relative">
            <div class="col-3 ">
              <div class="site-logo">
                <Link to="/" class="font-weight-bold">
                  <img src="images/logo.png" alt="Image" class="img-fluid" />
                </Link>
              </div>
            </div>
            <div class="col-9  text-right">
              <span class="d-inline-block d-lg-none"><a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span class="icon-menu h3 text-white"></span></a></span>
              <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                <ul class="site-menu main-menu js-clone-nav ml-auto ">
                  <li class="active"> 
                  <Link to="/" class="nav-link">Home</Link></li>
                  <li><Link to="/about-us" class="nav-link">About</Link></li>
                  <li><Link to ="/plan-trip-now" class="nav-link">Trips</Link></li>
                  <li><Link to="/blog" class="nav-link">Blog</Link></li>
                  <li><Link to="/contact-us" class="nav-link">Contact</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
