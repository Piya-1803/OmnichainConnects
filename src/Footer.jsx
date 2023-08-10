import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import line from './footer line.svg';

function Footer() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    // Your logic for button click
  };

  return (
    <>
      <div className='footerline'>
        <img src={line} alt="Footer Line" />
      </div>
      <div className='footerhead'>
        <p>Stay up to date with our latest announcements</p>
      </div>
      <div className='input-button-container'>
        <input
          type="text"
          className="input-area"
          placeholder="Enter your Email"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="button" onClick={handleButtonClick}>Submit</button>
      </div>
   <div className='socialcontainer'>
      <div className='socials'>
        <ul>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F0xOrbLabs" target="_blank" rel="noopener noreferrer" >

            <li>
                Twitter
            </li>
            </a>
        <a href="https://drive.google.com/drive/u/0/folders/1UqB9TdVM3X6DI5ENdZEyXgCa6yMLJOoy" target="_blank" rel="noopener noreferrer" >

            <li>
                MediaKit
            </li>
            </a>
        <a href="https://www.linkedin.com/company/0xorbllabs/" target="_blank" rel="noopener noreferrer" >
            
            <li>
                Linkedin
            </li>
            </a>
        </ul>
      </div>
      </div>
      <div className='mediainquiries'>
        <p>Media inquires for Omnichain Connect - Contact:</p>
        <a href='mailto:media@orblabs.xyz'>media@orblabs.xyz</a>
       
      </div>
      <div className='rights'>
        <p> 2023 Orb Labs. All right reserved. </p>
      </div>
    </>
  );
}

export default Footer;
