import React from 'react';
import './Header.css'
import Navbar from '../../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
    return (
        <main className="header">
            <Navbar />
            <HeaderMain />
        </main>
    );
};

export default Header;