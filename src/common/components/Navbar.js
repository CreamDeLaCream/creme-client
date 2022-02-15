import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { NavMenu, Logo } from './';

const Navbar = () => {
  const menus = [
    { name: '서비스 소개', path: '/' },
    { name: '반려견 감정상태', path: '/main' },
    { name: '마이펫', path: '/mypet' },
    { name: '팀소개', path: '/team' },
  ];

  return (
    <Side>
      <Logobox>
        <Logo />
      </Logobox>
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
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px var(--main) solid;
  /* border-right: 1px solid #e0e0e0; */
`;

const Logobox = styled.div`
  display: flex;
  margin: 2rem 0 0 3rem;
  /* margin-left: 3rem; */
`;

const Menu = styled.div`
  /* margin-top: 30px; */
  display: flex;
  flex-direction: column;
  margin: 0 0 2rem 3rem;
`;

export default Navbar;
