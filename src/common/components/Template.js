import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
  return (
    <Container>
      <MainForm>{children}</MainForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const MainForm = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  max-width: 1440px;
  border: 2px solid purple;
`;

export default Template;
