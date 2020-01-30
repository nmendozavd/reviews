import React from 'react';
import styled from 'styled-components';

const FirstName = ( {firstName} ) => {
  const FirstNameText = styled.div`
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.375em;
    color: #484848;
  `;

  return (
    <FirstNameText>{firstName}</FirstNameText>
  );
}

export default FirstName;