import React, { Fragment } from 'react';

export default function PersonAvatar() {
  return (
    <Fragment>
      <img
        src='https://images.unsplash.com/photo-1717684566059-4d16b456c72a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8'
        style={{ width: '100%' }}
        alt='Avatar'
      />
      <div className='w3-display-bottomleft w3-container w3-text-black'>
        <h2>Jane Doe</h2>
      </div>
    </Fragment>
  );
}
