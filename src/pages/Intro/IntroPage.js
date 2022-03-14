import React from 'react';

// redux
import { history } from '../../common/redux/configureStore';

// components
import { Header, Navbar, Container } from '../../common/components';
import Intro1st from './Intro1st';
import { Intro2nd } from './Intro2nd';
import { Intro3rd } from './Intro3rd';

const IntroPage = (props) => {
  return (
    <Container>
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />

      <Intro1st />
      <Intro2nd history={history} />
      <Intro3rd history={history} />
    </Container>
  );
};

export default IntroPage;
