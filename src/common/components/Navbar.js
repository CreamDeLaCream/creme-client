import React from 'react';
import styled from 'styled-components';

import { NavLink, useHistory } from 'react-router-dom';

import { NavMenu, Logo } from './';

const Navbar = () => {
  const history = useHistory();

  const menus = [
    { name: '서비스 소개', path: '/' },
    { name: '반려견 감정상태', path: '/main' },
    { name: '마이펫', path: '/mypet' },
    { name: '팀소개', path: '/team' },
  ];

  return (
    <Side>
      <Logobox onClick={() => history.push('/')}>
        <Logo />
      </Logobox>
      <Menu>
        {menus.map((menu, index) => {
          return (
            <LinkWrapper>
              <NavLink
                to={menu.path}
                key={index}
                style={{ color: 'gray', textDecoration: 'none' }}
              >
                <NavMenu menu={menu} />
              </NavLink>
            </LinkWrapper>
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
  ${({ theme }) => theme.device.tablet} {
    min-width: 13rem;
  }
  ${({ theme }) => theme.device.mobile} {
    min-width: 13rem;
  }
`;

const Logobox = styled.div`
  display: flex;
  margin: 2rem 0 0 3rem;
  cursor: pointer;
`;

const LinkWrapper = styled.div`
  :hover :first-child {
    color: var(--main);
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 4rem 3rem;
`;

export default Navbar;
