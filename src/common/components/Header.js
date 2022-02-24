import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// components
import { Logo, Modal, Text, Image, Grid, Button, Input } from './';

const Header = (props) => {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
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
                  <Item
                    onClick={() => {
                      setModalOpen(true);
                    }}
                  >
                    로그인
                  </Item>
                </List>
              </Nav>
            ) : null}
          </RightSide>
        </InsideBox>
      </Container>
      {modalOpen && (
        <Modal width="31rem" height="31rem" setOpenModal={setModalOpen}>
          <Grid display="flex" justifyContent="center" margin="1rem 0 3rem 0">
            <Image shape="bigcircle" size="14" />
          </Grid>

          <Wrapper>
            <Button
              width="25rem"
              padding="0.5rem"
              bg="var(--main)"
              color="var(--white)"
              radius="5px"
              cursor
            >
              <Text type="button" color="white">
                카카오톡으로 시작하기
              </Text>
            </Button>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};

const Container = styled.header`
  position: fixed;
  top: 2rem;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 5rem;
  background-color: transparent;
  // background-color: white;
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

const Wrapper = styled.div`
  ${({ theme }) => theme.device.mobile} {
    display: flex;
    justify-content: center;
  }
`;

export default Header;
