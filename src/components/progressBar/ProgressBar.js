import React from 'react';

import './Styles.scss';

const ProgressBar = (props) => {
  return(
    <div className='progressBar'>
      <div className='progressBar--container'>
        <div className='progressBar--fillColor'></div>
      </div>
    </div>
  )
}

export default ProgressBar;