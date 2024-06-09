import React from 'react';

export default function Footer() {
  return (
    <footer className='w3-container w3-teal w3-center w3-margin-top'>
      <p>Find me on social media.</p>
      <i className='w3-margin-right fa fa-facebook-official w3-hover-opacity' />
      <i className=' w3-margin-right fa fa-instagram w3-hover-opacity' />
      <i className='w3-margin-right fa fa-snapchat w3-hover-opacity' />
      <i className='w3-margin-right fa fa-pinterest-p w3-hover-opacity' />
      <i className='w3-margin-right fa fa-twitter w3-hover-opacity' />
      <i className='w3-margin-right fa fa-linkedin w3-hover-opacity' />
      <p>
        Powered by{' '}
        <a href='https://www.w3schools.com/w3css/default.asp' target='_blank'>
          w3.css
        </a>
      </p>
    </footer>
  );
}
