import React from 'react';
import styled from 'styled-components';

const Avatar = ( {url} ) => {
  const Picture = styled.div({
    height: '48px',
    width: '48px',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    borderRadius: '50%'
  });

  return (
    <Picture />
  );
}

export default Avatar;