import React, { Fragment } from 'react';
import PersonName from '../atoms/PersonName';
import Image from '../atoms/Image';

export default function AvatarWithName({
  src,
  width,
  alt,
  displayPosition,
  container,
  textColor,
  personName,
}) {
  return (
    <Fragment>
      <Image src={src} width={width} alt={alt} />
      <PersonName
        displayPosition={displayPosition}
        container={container}
        textColor={textColor}
        personName={personName}
      />
    </Fragment>
  );
}
