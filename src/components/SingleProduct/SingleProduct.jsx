import React from 'react';

import './SingleProduct.css';

const SingleProduct = ({name, price, vol}) => (
  <div className='app__singleproduct'>
    <div className='app__singleproduct-head'>
      <div className="app__singleproduct-name">
        <p className='p__cormorant' style={{color: '#dcca87'}}>{name}</p>
      </div>

      <div className='app__singleproduct-dash' />


      <div className="app__singleproduct-price">
        <p className='p__cormorant'>{price}</p>
      </div>
    </div>

    <div className='app__singleproduct-sub'>
      <p className='p__opensans' style={{color: '#AAA'}}>{vol}</p>
    </div>
  </div>
);

export default SingleProduct;
