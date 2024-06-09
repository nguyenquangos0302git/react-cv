import React, { Fragment } from 'react';

export default function PersonalLanguage() {
  return (
    <Fragment>
      <p className='w3-large w3-text-theme'>
        <b>
          <i className='fa fa-globe fa-fw w3-margin-right w3-text-teal' />
          Languages
        </b>
      </p>
      <p>English</p>
      <div className='w3-light-grey w3-round-xlarge'>
        <div
          className='w3-round-xlarge w3-teal'
          style={{ height: 24, width: '100%' }}
        />
      </div>
      <p>Spanish</p>
      <div className='w3-light-grey w3-round-xlarge'>
        <div
          className='w3-round-xlarge w3-teal'
          style={{ height: 24, width: '55%' }}
        />
      </div>
      <p>German</p>
      <div className='w3-light-grey w3-round-xlarge'>
        <div
          className='w3-round-xlarge w3-teal'
          style={{ height: 24, width: '25%' }}
        />
      </div>
    </Fragment>
  );
}
