import React from 'react';

// components
import { Text } from './';

const NavMenu = ({ menu }) => {
  return (
    <div>
      <Text type="sub_1" color="gray">
        {menu.name}
      </Text>
    </div>
  );
};

export default NavMenu;
