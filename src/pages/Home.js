import React from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import News from '../components/News';
import Review from '../components/Review';
import Learn from '../components/Learn';
import About from '../components/About';
import Value from '../components/Value';
import Universe from '../components/Universe';
import Clutter from '../components/Clutter';
import Ground from '../components/Ground';
import Packages from '../components/Packages';
import Receive from '../components/Receive';
import Who from '../components/Who';
import How from '../components/How';
import Academy from '../components/Academy';

const Home = () => {

	document.title = `Welcome to ${process.env.REACT_APP_NAME_STANDARD} - Let us Help You Invest`;

    return (
        <>
            <Hero/>
            <Universe/>
            <Clutter/>
            <Value/>
            {/* <About/> */}
            <Learn />
            <How />
            <Who />
            <Receive />
            <Packages />
            <Ground />
            <Academy />
            <Review/>
            <News/>
            <Footer/>
            
        </>
    )
}

export default Home
