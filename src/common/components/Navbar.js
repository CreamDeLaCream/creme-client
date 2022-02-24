import React from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';

// components
import { NavItems } from './';

const Navbar = (props) => {
  const history = useHistory();
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
                // color: 'gray',
                fontSize: '1.1rem',
                textDecoration: 'none',
                margin: '0 20px 0 0',
              }}
              activeStyle={{ fontWeight: 'bold' }}
            >
              <NavItems menu={menu} />
            </NavLink>
          );
        })}
      </NavBox>
      <RightSide>
        {/* {props.page === 'navbarmenu' ? (
          <Nav>
            <List>
              <Item onClick={() => history.push('/team')}>팀소개</Item>
            </List>
          </Nav>
        ) : null} */}
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 8rem;
  left: 0;
  z-index: 20;
  width: 100%;
  background-color: transparent;
  // background-color: white;
  ${({ theme }) => theme.device.mobile} {
    /* min-width: 20rem; */
    flex-wrap: nowrap;
  }
`;

const NavBox = styled.div`
  display: flex;
  justify-content: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
  min-width: 25rem;
  ${({ theme }) => theme.device.mobile} {
    min-width: 27rem;
  }
`;

const RightSide = styled.section``;

export default Navbar;
