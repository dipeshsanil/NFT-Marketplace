import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ethers } from "ethers";
const Card = ({item,buy}) => {
  return (
    <div className="col-12 col-md-3 gy-4">
      <div className="card shadow-sm" style={{ borderRadius: 20 }}>
        <img
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            minHeight: "200px",
          }}
          src= {item.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body ">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{item.title}</h5>
            <a
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <svg
                width="25"
                height="11"
                viewBox="0 0 57 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5.5" cy="5.5" r="5.5" fill="black" />
                <circle cx="28.5" cy="5.5" r="5.5" fill="black" />
                <circle cx="51.5" cy="5.5" r="5.5" fill="black" />
              </svg> */}
            </a>
            
                
            
          </div>
          <p className="card-text text-muted">{item.seller}</p>
          <Link to="/details" state={{item, buy}} style={{ textDecoration: "none" }}>
                  <button className="btn btn-primary btn-rounded"  href="#">
                  {ethers.utils.formatEther(item.totalPrice)} ETH
                  </button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
