import React from 'react';
import './BeerCard.css';
import './logo.png';

const BeerCard = () => {

  return (
    <div className='tc hashir tc dib br3 pa2 ma4 grow bw2 shadow-5'>
      <img alt='beers' className='br3 bw2 shadow-5' 
        style={{ width: '300px', height: '300px' }}
        src = {require('./logo.png')} />
      <div>
        <dl className="lh-title pt3 ph1 mt0">
          <dt className="f6 b">Name</dt>
          <dd className="ml0">Sieze the Means of Production</dd>
          <dt className="f6 b mt2">Type</dt>
          <dd className="ml0">Russian Imperial Stout</dd>
          <dt className="f6 b mt2">ABV</dt>
          <dd className="ml0">11%</dd>
        </dl>
      </div>
    </div>
  );
}
export default BeerCard;