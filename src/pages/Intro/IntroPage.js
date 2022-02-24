import React from 'react';

// components
import { Header, Navbar, Text, Container } from '../../common/components';

// bg
import { Intro1st } from './Intro1st';
import { Intro2nd } from './Intro2nd';
import { Intro3rd } from './Intro3rd';

const IntroPage = (props) => {
  const { history } = props;
  return (
    <Container height="200vh">
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />
      <Text type="mainTitle" color="var(--main)"></Text>
      <Intro1st history={history} />
      <Intro2nd />
      <Intro3rd />
    </Container>
  );
};

export default IntroPage;
