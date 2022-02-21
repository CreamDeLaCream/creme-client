import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { Logo } from './';

const Header = (props) => {
  const history = useHistory();
  return (
    <Container>
      <InsideBox>
        <LeftSide>
          <LogoBox onClick={() => history.push('/')}>
            <Logo />
          </LogoBox>
        </LeftSide>
        <RightSide>
          {props.page === 'headermenu' ? (
            <Nav>
              <List>
                <Item onClick={() => history.push('/login')}>로그인</Item>
              </List>
            </Nav>
          ) : null}
        </RightSide>
      </InsideBox>
    </Container>
  );
};

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 5rem;
  background-color: white;
  /* border: 1px solid black; */
  ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
  }
`;

const InsideBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const LeftSide = styled.section`
  flex-shrink: 0;
`;

const RightSide = styled.section`
  margin-right: -1rem;
`;

const LogoBox = styled.div`
  cursor: pointer;
`;

const Nav = styled.nav`
  margin-top: 1.6rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0.3rem 2rem;
  color: var(--main);
  cursor: pointer;
`;

export default Header;
