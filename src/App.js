import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Work";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden '>
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
      <div className='h-full'></div>
    </div>
  );
}

export default App;
