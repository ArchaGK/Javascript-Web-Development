import React from 'react';


const Card = (props) => {
  var url = 'https://robohash.org/' + props.name+ '?200x200';

  return (

    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>

     <img alt='robots' src={url}/>
      <div>
       <h2>{props.name}</h2>
       <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
