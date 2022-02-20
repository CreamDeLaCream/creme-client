import React from 'react';
import styled from 'styled-components';

// components
import { Text } from './';

const NavItems = ({ menu }) => {
  return (
    <Wrapper>
      <Text type="sub_1" color="main">
        {menu.name}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-width: 5rem;
  width: 100%; */
`;

export default NavItems;
