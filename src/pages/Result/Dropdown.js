import React, { useRef } from 'react';
import styled from 'styled-components';

import { Text, Circle } from '../../common/components';
import useDetectOutsideClick from '../../common/utils/useDetectOutsideClick';

const Dropdown = ({ title, desc }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <TriggerButton onClick={onClick}>
        <Circle size="9" border="0.7rem solid var(--cream)" is_flex_center>
          <Text type="subTitle" color="var(--deepcream)">
            {title}
          </Text>
        </Circle>
      </TriggerButton>
      <Nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <MenuList>
          <Item>
            <Text color="var(--gray)">{desc}</Text>
          </Item>
        </MenuList>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: relative;
`;

const TriggerButton = styled.button`
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  border: none;
  border-radius: 8px;
  background: var(--white);
  padding: 4px 6px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
`;

const Nav = styled.nav`
  width: 10rem;
  position: absolute;
  border-radius: 8px;
  background: var(--white);
  top: 100%;
  left: 50%;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transform: translateX(-50%);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  &.menu.active {
    opacity: 1;
    visibility: visible;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: block;
  text-decoration: none;
  border-bottom: 1px solid #dddddd;
  padding: 15px 20px;
`;

export default Dropdown;
