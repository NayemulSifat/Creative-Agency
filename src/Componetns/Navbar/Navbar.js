import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);



    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="/home"><img src="https://i.ibb.co/GPkmCwG/logo.png" alt="logo" style={{ height: '35px' }} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/home">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Our Portfolio </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/team">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact"> </a>
                    </li>
                    <li>
                    <Link to="/login"><button className="btn btn-dark">  {loggedInUser.name ? `${loggedInUser.name}` : 'Login'} </button> </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;