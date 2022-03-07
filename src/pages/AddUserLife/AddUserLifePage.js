import React from 'react';

// components
import { Container, Header, Navbar } from '../../common/components';
import { AnimatedKeyword } from '../../common/components/AnimatedKeyword';
import { UserKeywordsData } from '../../common/components/UserKeywordsData';

import InputBox from './InputBox';

const AddUserLifePage = (props) => {
  return (
    <Container>
      <Header />
      <Navbar />
      <InputBox />
      <AnimatedKeyword keywordsData={UserKeywordsData} />
    </Container>
  );
};

export default AddUserLifePage;
