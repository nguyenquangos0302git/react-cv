import React from 'react';

export default function Image({ src, width, alt }) {
  return <img src={src} style={width ? { width: width } : {}} alt={alt} />;
}
