import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import NavMenu from './NavMenu';

const Navbar = () => {
  const menus = [
    { name: '서비스 소개', path: '/' },
    { name: '반려견 감정상태', path: '/main' },
    { name: '마이펫', path: '/mypet' },
    { name: '팀소개', path: '/team' },
  ];

  return (
    <Side>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <NavLink to={menu.path} key={index}>
              <NavMenu menu={menu} />
            </NavLink>
          );
        })}
      </Menu>
    </Side>
  );
};

const Side = styled.nav`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px var(--main) solid;
  /* border-right: 1px solid #e0e0e0; */
`;

const Menu = styled.div`
  /* margin-top: 30px; */
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export default Navbar;
