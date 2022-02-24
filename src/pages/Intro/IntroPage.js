import React from 'react';

// components
import { Header, Navbar, Text, Container } from '../../common/components';

// bg
import { Intro1st } from './Intro1st';

const IntroPage = () => {
  return (
    <Container height="200vh">
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />
      <Text type="mainTitle" color="var(--main)"></Text>
      <Intro1st />
    </Container>
  );
};

export default IntroPage;
