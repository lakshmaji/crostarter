import React from 'react';
import './banana.scss';

const Banana = () => {
  return (
    <ul className='card'>
      <li>
        <p></p>
        <h3>53</h3>
        <i className='fa fa-arrow-up clr-up' />
        <p />
        <span>Websites Added</span>
      </li>
      <li>
        <p></p>
        <h3>18</h3>
        <i className='fa fa-arrow-down clr-down' />
        <p />
        <span>Websites Dropped</span>
      </li>
      <li>
        <p></p>
        <h3>9,526</h3>
        <i className='fa fa-arrow-top' />
        <p />
        <span>Current Websites</span>
      </li>
      <li>
        <p></p>
        <h3>6.90%</h3>
        <i className='fa fa-arrow-top' />
        <p />
        <span>Market Share</span>
      </li>
    </ul>
  );
};

export default Banana;
