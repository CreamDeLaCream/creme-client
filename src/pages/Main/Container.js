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
  width: 64rem;
`;

const Form = styled.section`
  position: relative;
  height: 80vh;
  display: flex;
  flex-direction: column;
  border: 1px solid green;
  padding: 2rem;
`;

export default Container;
