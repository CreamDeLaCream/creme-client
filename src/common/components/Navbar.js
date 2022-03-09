import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// components
import { NavItems } from './';

const Navbar = (props) => {
  const menus = [
    { name: '서비스 소개', path: '/' },
    { name: '반려견 감정상태', path: '/main' },
    { name: '마이펫', path: '/mypet' },
    { name: '팀소개', path: '/team' },
  ];

  return (
    <Container>
      <NavBox>
        {menus.map((menu, index) => {
          return (
            <NavLink
              exact
              to={menu.path}
              key={index}
              style={{
                color: 'var(--blackcream)',
                fontSize: '1.1rem',
                textDecoration: 'none',
              }}
              activeStyle={{ fontWeight: 'bold', color: 'var(--main)' }}
            >
              <NavItems menu={menu} />
            </NavLink>
          );
        })}
      </NavBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 38px;
  // background-color: transparent;
  background-color: var(--white);

  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1.5px solid var(--main);
`;

const NavBox = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
  white-space: nowrap;
  ${({ theme }) => theme.device.fold} {
    white-space: nowrap;
  }
`;

export default Navbar;
