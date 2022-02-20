import React from 'react';
import styled from 'styled-components';

// components
import Container from './Container';
import { Header, Navbar, Text, Grid } from '../../common/components';

const IntroPage = () => {
  return (
    <div>
      <Header page="headermenu" />
      <Navbar page="navbarmenu" />
    </div>
  );
};

export default IntroPage;
