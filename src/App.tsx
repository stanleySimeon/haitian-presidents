import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./components/navigation/Nav";
import Home from "./components/pages/Home";
import Bio from "./components/pages/Bio";
import Footer from "./components/footer/Footer";
import './app.css';

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio/:presidentId" element={<Bio />} />
        </Routes>
      </Router>
      <Footer />
    </>
  )
  }
