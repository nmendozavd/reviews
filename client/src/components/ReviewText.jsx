import React from 'react';
import styled from 'styled-components';

const ReviewText = ( {text} ) => {
  const Text = styled.div`
    overflow-wrap: break-word;
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.375em;
    color: #484848;
  `;

  return (
    <Text>{text}</Text>
  );
}

export default ReviewText;