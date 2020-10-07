import React from 'react';
import spinner from './img/spinner.gif';



const Spinner = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img src={spinner} alt="loader" />
    </div>)
};
export default Spinner;