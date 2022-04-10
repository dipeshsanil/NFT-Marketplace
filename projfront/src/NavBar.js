import React from 'react';
import { Link,Outlet } from 'react-router-dom';

import Button from "./Button";

const NavBar = () => {
    return(
      <>
                <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">NFT Marketplace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mx-auto mb-2 mb-md-0">
        <li className="nav-item">
        <Link to="/home" style={{textDecoration:"none"}}> <a className="nav-link active" aria-current="page" href="#">Home</a></Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#marketplace">Marketplace</a>
        </li>
        
      </ul>
      <Button name="Login"/>
    </div>
  </div>
</nav>
<Outlet/>
      </>
    );
}

export default NavBar;