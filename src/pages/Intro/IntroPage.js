import React from 'react';

// components
import { Header, Navbar, Container } from '../../common/components';
import { Intro1st, Intro2nd, Intro3rd } from '.';

const IntroPage = () => {
  return (
    <Container>
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />
      <Intro1st />
      <Intro2nd />
      <Intro3rd />
    </Container>
  );
};

export default IntroPage;
