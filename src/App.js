import React from "react";
import { BrowserRouter as Router, Route} from  "react-router-dom";
import NavTabs from "./components/Navbar/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/React_Portfolio/Home" component={Home} />
        <Route exact path="/React_Portfolio/Projects" component={Projects} />
        <Route exact path="/React_Portfolio/Contact" component={Contact} />
        <Route exact path="/React_Portfolio/Resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
