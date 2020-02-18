import React, { Component } from 'react';
import { icons } from 'react-icons/lib/cjs';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                <div className="container bg-dark">

                    <a className="navbar-brand text-light" href="#">A L F A L I A</a>
            
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a class="nav-link text-light" href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">PRODUK</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">ABOUT US</a>
                        </li>
                        </ul>

                        <form className="form-inline my-1 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="cari produk" aria-label="Search"/>
                        </form>

                        <span className="text-light"> <icons /> </span>
                        <span className="text-light"> <button className="btn btn-sm btn-danger">Login</button></span>
                    </div>
                </div>

            </nav>
        )
    }
}

export default Header
