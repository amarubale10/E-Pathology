import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import  logo from "../Images/pathlogo2.jpg"



const Navbar = () => {



  
  return (
   <>

   <nav className="navbar navbar-expand-lg navbar navbar-light bg-dark bg-opacity-20">
  <Link className="navbar-brand" to="/" Style="margin-left:40px " ><img src={logo} alt='logo' width="10%"  /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto" width="10" fc >
      <li className="nav-item active">
      <Link className=" nav-link text-white bg-dark" to="/">Home </Link>
        </li>
        
      <li className="nav-item active">
      <Link className="nav-link text-white bg-dark" to="about">About</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link text-white bg-dark" to="contact">Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white bg-dark" to="login">Login</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link text-white bg-dark" to="signup">SignUp</Link>
      </li>
      
    </ul>
    
  </div>
</nav>
   
   
   </>
  )
}

export default Navbar