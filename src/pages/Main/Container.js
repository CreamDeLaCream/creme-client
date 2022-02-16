import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return (
    <Wrapper>
      <Form>{children}</Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 72%;
  border: 1px solid blue;
`;

const Form = styled.main`
  display: flex;
  position: relative;
  justify-content: flex-start;
  border: 1px solid green;
`;

export default Container;
