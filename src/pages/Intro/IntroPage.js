import React from 'react';

// components
import { Header, Navbar, Text, Container } from '../../common/components';

const IntroPage = () => {
  return (
    <Container height="100vh">
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />
      <Text type="mainTitle" color="var(--main)"></Text>
    </Container>
  );
};

export default IntroPage;
