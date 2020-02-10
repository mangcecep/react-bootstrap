import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark"fixed="top">
        <div className="container bg-dark">

          <a className="navbar-brand text-light" href="#">Z A L O R A</a>
          
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a class="nav-link text-light" href="#">WANITA <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">PRIA</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">ANAK-ANAK</a>
              </li>
            </ul>

            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="cari produk, tren dan merek" aria-label="Search"/>
            </form>

            <span className="text-light"> icon</span>
          </div>

        </div>
      </nav>
  );
}

export default App;
