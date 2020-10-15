import React from 'react';
import Footer from '../../Footer/Footer';
import FeedBack from '../FeedBack/FeedBack';
import Header from '../Header/Header';
import Links from '../links/Links';
import OurWorks from '../OurWorks/OurWorks';
import Service from '../Services/Service';

const Home = () => {
    return (
        <main>
            <Header />
            <Links />
            <Service />
            <OurWorks />
            <FeedBack />
            <Footer />
        </main>
    );
};

export default Home;