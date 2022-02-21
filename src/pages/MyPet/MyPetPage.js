import React from 'react';
import styled from 'styled-components';

// components
import { Header, Navbar, Text, Container } from '../../common/components';
import { MyPet } from './MyPet';
import { Plusbutton } from './Plusbutton';

const IntroPage = () => {
  return (
    <Container height="100vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        나의 사랑스러운 댕댕이를 추가해보세요.
      </Text>
      <MyPetWrapper>
        <MyPet />
        <Plusbutton />
      </MyPetWrapper>
    </Container>
  );
};

const MyPetWrapper = styled.div`
  display: flex;
  flexdirection: row;
`;

export default IntroPage;
