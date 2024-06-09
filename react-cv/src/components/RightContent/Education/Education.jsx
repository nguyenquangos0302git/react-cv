import React, { Fragment } from 'react';

export default function Education() {
  return (
    <Fragment>
      <h2 className='w3-text-grey w3-padding-16'>
        <i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal' />
        Education
      </h2>
      <div className='w3-container'>
        <h5 className='w3-opacity'>
          <b>W3Schools.com</b>
        </h5>
        <h6 className='w3-text-teal'>
          <i className='fa fa-calendar fa-fw w3-margin-right' />
          Forever
        </h6>
        <p>Web Development! All I need to know in one place</p>
        <hr />
      </div>
      <div className='w3-container'>
        <h5 className='w3-opacity'>
          <b>London Business School</b>
        </h5>
        <h6 className='w3-text-teal'>
          <i className='fa fa-calendar fa-fw w3-margin-right' />
          2013 - 2015
        </h6>
        <p>Master Degree</p>
        <hr />
      </div>
      <div className='w3-container'>
        <h5 className='w3-opacity'>
          <b>School of Coding</b>
        </h5>
        <h6 className='w3-text-teal'>
          <i className='fa fa-calendar fa-fw w3-margin-right' />
          2010 - 2013
        </h6>
        <p>Bachelor Degree</p>
        <br />
      </div>
    </Fragment>
  );
}
