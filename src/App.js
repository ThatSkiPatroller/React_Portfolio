import React from "react";
import { HashRouter, Route} from  "react-router-dom";
import NavTabs from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './App.css';

function App() {
  return (
    <HashRouter>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Resume" component={Resume} />
        <Footer />
    </HashRouter>
  );
}

export default App;
