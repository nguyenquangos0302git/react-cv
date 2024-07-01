import React from 'react';
import clsx from 'clsx';

export default function Icon({ name, fullWidth, margin, size, color, hover }) {
  return (
    <i
      className={clsx(
        'fa',
        name && `fa-${name}`,
        fullWidth && 'fa-fw',
        margin && `w3-margin-${margin}`,
        size && `w3-${size}`,
        color && `w3-text-${color}`,
        hover && `w3-hover-opacity`
      )}
    />
  );
}
