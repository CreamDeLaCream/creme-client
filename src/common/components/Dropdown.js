import React, { useRef } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// components
import { Text } from '../../common/components';
import useDetectOutsideClick from '../../common/utils/useDetectOutsideClick';

// icons
import { BsCaretDownFill } from 'react-icons/bs';

const Dropdown = ({ clickedValue, onClickValue, menuList }) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <TriggerButton onClick={onClick}>
        <MenuTitle style={{ color: 'var(--main)' }}>
          <sapn style={{ fontSize: '1.1rem' }}>{clickedValue}</sapn>
        </MenuTitle>
      </TriggerButton>
      <Nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <MenuList>
          {menuList.map((menu) => (
            <Item
              onClick={() => {
                onClickValue(menu);
                setIsActive(!isActive);
              }}
            >
              <Text color="var(--main)">{menu}</Text>
            </Item>
          ))}
        </MenuList>
      </Nav>
    </MenuContainer>
  );
};

const MenuContainer = styled.div`
  position: relative;
  margin-top: 28px;
`;

const TriggerButton = styled.button`
  width: 150px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 2px var(--darkcream);

  background: var(--white);
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
  padding: 4px 6px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  :hover {
    border-bottom: solid 2px var(--main);
  }
`;

const MenuTitle = styled.span`
  font-size: 14px;
  font-weight: 700;
  vertical-align: middle;
  margin: 0 10px;
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
  z-index: 29;
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
  /* color: #333333; */
  border-bottom: 1px solid #dddddd;
  padding: 15px 20px;
  cursor: pointer;
`;

export default Dropdown;
