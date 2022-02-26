import React, { useRef } from 'react';
import styled from 'styled-components';

import { Text } from '../../common/components';
import useDetectOutsideClick from '../../common/utils/useDetectOutsideClick';

const Dropdown = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <MenuContainer>
      <TriggerButton onClick={onClick}>
        <Image
          src="https://mblogthumb-phinf.pstatic.net/20141020_84/ribbonchick_1413740254883HpC05_JPEG/01.jpg?type=w420"
          alt="arrow"
        />
      </TriggerButton>
      <Nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <MenuList>
          <Item>
            <Text color="var(--gray)">
              이것은 병아리다. 알에서 태어난 병아리는 곧 닭이 된다. 닭은 곧 알을
              낳고, 그 알은 또 부화한다.
            </Text>
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
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3); */
  padding: 4px 6px;
  transition: box-shadow 0.4s ease;
  cursor: pointer;
  /* :hover { 
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
  } */
`;

const Image = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 90px;
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
    /* transform: translateY(0); */
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
