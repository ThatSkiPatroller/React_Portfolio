import React from "react";
import Loading from '../component/Loading'
import Navbar from "../component/Navbar";
import Header from "../component/Header";
import Hero from '../component/Hero';
import Services from "../component/Services";
import Portfolio from '../component/Portfolio';
import Resume from '../component/Resume';
import Contact from '../component/Contact'
import Footer from "../component/Footer";


function Home () {
    
    return (
        
        <div>
            <Loading />
            <Navbar />
            <Header />
            <Hero />
            <Services />
            <Portfolio />
            <Resume />
            <Contact />
            <Footer />
        </div>
        
    )
}

export default Home;