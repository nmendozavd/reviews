import React from 'react';
import styled from 'styled-components';

const Avatar = ({ url }) => {
  const AvatarPicture = styled.img.attrs({
    src: url
  })`
    height: 48px;
    width: 48px;
    background-size: cover;
    border-radius: 50%;
  `;

  return (
    <AvatarPicture />
  );
}

export default Avatar;