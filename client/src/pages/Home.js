import React from "react";
import Loading from '../Components/Loading'
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Hero from '../Components/Hero';
import Services from "../Components/Services";
import Portfolio from '../Components/Portfolio';
import Resume from '../Components/Resume';
import Contact from '../Components/Contact'
import Footer from "../Components/Footer";


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