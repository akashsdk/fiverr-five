import React from 'react';
import './TextCart.css';

export default function TextCart({ headerText, bodyText }) {
  return (
    <div className='TextCart-Body'>
      <p className='TextCart-Text1'>{headerText}</p>
      <div className='TextCart-Line' />
      <p className='TextCart-Text2' dangerouslySetInnerHTML={{ __html: bodyText }} />
    </div>
  );
}
