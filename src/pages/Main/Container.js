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
  position: relative;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border: 1px solid green;
  padding: 2rem;
  /* align-items: space-between; */
`;

export default Container;
