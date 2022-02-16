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
  border: 1px solid yellow;
`;

const Form = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid green;
`;

export default Container;
