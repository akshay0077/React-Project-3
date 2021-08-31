import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () =>{
    return(
    <>
    <div className="nav-bg">
        <div className="row">
            <div className="mx-auto">


                <nav className=" navbar navbar-expand-lg navbar-light bg-light  navbar-fixed-top">
                    <Link className="navbar-brand"   to="home">Kher Web Solution</Link>
                    <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="home" smooth={true} duration={1000}  className="nav-link" exact activeClassName="menu_active" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="service" smooth={true} duration={1000}  className="nav-link" exact activeClassName="menu_active" href="/">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about" smooth={true} duration={1000}   className="nav-link" exact activeClassName="menu_active" href="/">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact" smooth={true} duration={1000}  className="nav-link" exact activeClassName="menu_active" href="/">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </>
    )
}

export default Navbar;