import React, { Fragment } from 'react';
import Icon from '../atoms/Icon';

export default function IconWithText({
  name,
  fullWidth,
  margin,
  size,
  color,
  textName,
}) {
  return (
    <Fragment>
      <Icon
        name={name}
        fullWidth={fullWidth}
        margin={margin}
        size={size}
        color={color}
      />
      {textName}
    </Fragment>
  );
}
