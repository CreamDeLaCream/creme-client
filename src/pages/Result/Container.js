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
  width: 65rem;
`;

const Form = styled.section`
  height: 200vh;
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  padding: 2rem;
`;

export default Container;
