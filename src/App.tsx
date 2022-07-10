import * as React from "react"
import Nav from "./components/navigation/Nav";
import Home from "./components/pages/Home";
import Footer from "./components/footer/Footer";
import './app.css';

export const App: React.FC = () => {
  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  )
}
