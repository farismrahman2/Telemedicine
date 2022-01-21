import './App.css';

import { Article, Brand, Cta, Navbar } from './Components';
import { Footer, Blog, Features, Header, What, Possibility,Ourdoctors } from './containers';

import React from 'react';

const App = () => {
  return (
    <div classname="App">
      <div classname="gradient__bg">
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <What/>
      <Features/>
      <Ourdoctors/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

    </div>

  )
};

export default App;


