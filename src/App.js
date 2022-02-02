import './App.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {  Brand, Cta, Navbar } from './Components';
import { Footer, Blog, Header, What, Possibility,Ourdoctors } from './containers';

import React from 'react';

const App = () => {
  return (
    <div className="App">
      <div className="gradientbg">
        <Navbar/>
        <Header/>

      </div>
      <Brand/>
      <What/>
      
      <Ourdoctors/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

      <MessengerCustomerChat pageId="103214868939799"appId="477258803868285"/>

    </div>
    

  )
};

export default App;


