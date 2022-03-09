import React from 'react';
import styled from 'styled-components';

// components
import { Text } from './';

const NavItems = ({ menu }) => {
  return (
    <Wrapper>
      <Text type="menu">{menu.name}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  line-height: 1rem;
  margin-right: 1.25rem;
  ${({ theme }) => theme.device.mobile} {
    margin-right: 0.8rem;
  }
  ${({ theme }) => theme.device.fold} {
    margin-right: 0.5rem;
  }
`;

export default NavItems;
