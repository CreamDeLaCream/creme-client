import React from 'react';
import styled from 'styled-components';

const Container = ({ children, ...rest }) => {
  return <Form {...rest}>{children}</Form>;
};

const Form = styled.section`
  position: relative;
  width: 64rem;
  /* height: 80vh; */
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  padding: 2rem;
  // flex-wrap: wrap;
`;

export default Container;
