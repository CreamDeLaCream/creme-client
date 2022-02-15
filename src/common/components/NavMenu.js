import React from 'react';
import styled from 'styled-components';

const NavMenu = ({ menu }) => {
  return (
    <div>
      <Text>{menu.name}</Text>
    </div>
  );
};

const Text = styled.p`
  line-height: 10px;
`;

export default NavMenu;
