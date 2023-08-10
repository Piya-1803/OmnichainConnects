import React from 'react';
import ReactDOM from 'react-dom';
import aves from './aves.svg';
import modular from './modular.svg';
import BBC from './BBC.svg';
import newman from './newman.svg';
import mvs from './mv.svg';
import seven from './seven.svg';
import shima from './shimacapitol.svg'

function Backers(){
    return<>
     <div className='Creators'>
        <p>
            Backers
        </p>
    </div>
  <div className='gallery'>
     <div className='row'>
     <a href="https://aveslair.com/" target="_blank" rel="noopener noreferrer" >
     <img src={aves}></img>
     </a>
     <a href="https://www.modularcapital.xyz/" target="_blank" rel="noopener noreferrer" >
     <img src={modular}></img>
     </a>
     <a href="https://baincapitalcrypto.com/" target="_blank" rel="noopener noreferrer" >
     <img src={BBC}></img>
     </a>
     <a href="https://www.newmancapital.com/" target="_blank" rel="noopener noreferrer" >
     <img src={newman}></img>
     </a>
     <a href="https://6thman.ventures/" target="_blank" rel="noopener noreferrer" >
     <img src={mvs}></img>
     </a>
     <a href="https://aveslair.com/" target="_blank" rel="noopener noreferrer" >
     <img src={seven}></img>
     </a>
     <a href="https://shima.capital/" target="_blank" rel="noopener noreferrer" >
     <img src={shima}></img>
     </a>
     </div>

  </div>

    
    
    </>
}

export default Backers;