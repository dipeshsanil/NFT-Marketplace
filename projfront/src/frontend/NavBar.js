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
      
      <div className="nav-item dropdown">
          <a className="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://picsum.photos/50" style={{borderRadius:"50%",width:"50px",height:"50px"}}/>
          </a>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Account: 0x414832a119be063C809eaABAb153b52A469C3Af2</a></li>
            <li><a className="dropdown-item" href="#">Balance: 0 ETH</a></li>
            <li><a className="dropdown-item" href="#">Upload: Add New NFT</a></li>
          </ul>
       </div>
    </div>
  </div>
</nav>
<Outlet/>
      </>
    );
}

export default NavBar;