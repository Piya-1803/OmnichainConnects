import React from 'react';
import ReactDOM from 'react-dom';
import block from './block.svg'
import blockw from './blockworks.svg';
import coindesk from './coindesk.svg'

function Featured(){
     return<>
 <div className='Creators'>
        <p>
            Featured in
        </p>
    </div>
     <div className='featured-1'>
        <img src={coindesk}>
            
        </img>
        <img src={blockw}></img>
        </div>
        <div className='autom'>
        <div className='featured-2'>
        <img src={block}></img>
        </div>
        </div>
   
    


    </>
}
export default Featured;