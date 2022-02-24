import React from 'react';
import styled from 'styled-components';

// components
import { Text } from './';

const NavItems = ({ menu }) => {
  return (
    <Wrapper>
      <Text type="sub_1" color="var(--blackcream)">
        {menu.name}
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  line-height: 1rem;
`;

export default NavItems;
