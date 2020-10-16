import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser] = useContext(UserContext);



    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link className="navbar-brand" to="/home"><img src="https://i.ibb.co/GPkmCwG/logo.png" alt="logo" style={{ height: '35px' }} /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Our Portfolio </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashBoard">DashBoard</Link>
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