import React from 'react';
import styled from 'styled-components';

const Date = ( {date} ) => {
  const DateText = styled.div`
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.28571em;
    color: #484848;
  `;

  return (
    <DateText>{date}</DateText>
  );
}

export default Date;