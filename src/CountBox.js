import React, {Component} from 'react';
import { robots } from './robots';


const CountBox = ({count}) => {
  return (
    <div className='pa4 tc ba h6 w6 dib bg-light-green grow'>
     <h1>robots: {count}</h1>


    </div>

  );
}

export default CountBox;
