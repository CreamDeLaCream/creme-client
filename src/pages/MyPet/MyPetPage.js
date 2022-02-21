import React from 'react';

// components
import { Header, Navbar, Text, Container } from '../../common/components';

const IntroPage = () => {
  return (
    <Container height="100vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        IntroPage
      </Text>
    </Container>
  );
};

export default IntroPage;
