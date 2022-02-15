import React from 'react';
import styled from 'styled-components';

// components
import { logo } from '../styles/textStyle';

const Logo = () => {
  return (
    <div>
      <Title>
        Cream
        <br />
        de la
        <br />
        Cream
      </Title>
    </div>
  );
};

const Title = styled.h1`
  ${logo}
  color: var(--main);
`;

export default Logo;
