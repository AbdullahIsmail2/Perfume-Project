import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Hero, Intro, Laurels, Products} from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <AboutUs />
    <Products/>
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
