import React from 'react';
import styled from 'styled-components';

const Container = ({ children, ...rest }) => {
  return <Form {...rest}>{children}</Form>;
};

const Form = styled.section`
  position: relative;
  width: 100%;
  top: 4rem;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  padding: 2rem;
  ${({ theme }) => theme.device.fold} {
    width: 320px;
    padding: 2rem;
  }
`;

export default Container;
