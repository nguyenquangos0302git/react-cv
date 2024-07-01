import React from 'react';
import clsx from 'clsx';

export default function PersonName({
  displayPosition,
  container,
  textColor,
  personName,
}) {
  return (
    <div
      className={clsx(
        displayPosition && `w3-display-${displayPosition}`,
        container && `w3-container`,
        textColor && `w3-text-${textColor}`
      )}
    >
      <h2>{personName}</h2>
    </div>
  );
}
