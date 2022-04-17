import React from "react";
import { Link, Outlet } from "react-router-dom";

import Button from "./Button";

const NavBar = ({ web3Handler, account, balance }) => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            NFT Marketplace
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/home" style={{ textDecoration: "none", margin: 0 }}>
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">
                  Marketplace
                </a>
              </li>
            </ul>

            <div className="nav-item dropdown">
              <a
                className="nav-link"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://picsum.photos/50"
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  {account ? (
                    <Link to="/user" style={{ textDecoration: "none" }}>
                      <span
                        href={`https://etherscan.io/address/${account}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                      >
                        {" "}
                        Account:{" "}
                        {account.slice(0, 5) + "..." + account.slice(38, 42)}
                      </span>
                    </Link>
                  ) : (
                    <span onClick={web3Handler} className="dropdown-item">
                      <button
                        className="btn btn-primary"
                        style={{ margin: 0, width: "100%" }}
                      >
                        Connect Wallet
                      </button>
                    </span>
                  )}
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Balance: {balance}
                  </a>
                </li>
                <li>
                  <Link to="/admin" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item" href="#">
                      <span>Uploaded NFT's</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/upload" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item" href="#">
                      <span>Upload</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <a className="dropdown-item" href="#">
                      <span>Log Out</span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
