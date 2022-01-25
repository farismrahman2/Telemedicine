import React from 'react';
import './header.css';
import bg from '../../assets/bgphoto.png'

const Header = () => {
  return(


<div className='header_section_padding' id ='home'>
  <div className='header_content'>
    <h1 className='gradient_text'> Best Telemedicine portal with amazing services</h1>
    <p> We believe in giving life to the dream business projects and providing a hassle free experience. We've been successful in offering an extensive online platform for any business genre from starting to running and to reaching new growth parameters.</p>
   
    <div className='header_content_input'>
      <button>Book an Appointment!</button>
    </div>
    
  </div>
  <div className='header-image'>

    <img src={bg} alt="" />
  </div>

</div>

  )



};

export default Header;
