import React from 'react';
import styled from 'styled-components';

// components
import { Header, Navbar, Text, Container } from '../../common/components';
import { MyPet } from './MyPet';
import { Plusbutton } from './Plusbutton';
import Record from './Record';
import { RecordPlusbutton } from './RecordPlusbutton';

const IntroPage = () => {
  return (
    <Container height="200vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        나의 사랑스러운 댕댕이를 추가하세요.
      </Text>
      <MyPetWrapper>
        <MyPet />
        <Plusbutton />
      </MyPetWrapper>

      <RecordWrapper>
        <Text type="mainTitle" color="main" padding-top="30px">
          마이펫 감정 기록
        </Text>
        {/* <hr /> */}
        <RecordCardWrapper>
          <Record />
          <RecordPlusbutton />
        </RecordCardWrapper>
      </RecordWrapper>
    </Container>
  );
};

const MyPetWrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const RecordWrapper = styled.div`
  margin-top: 50px;
`;

const RecordCardWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 1000px;
  margin-top: 30px;

  background-color: var(--gray);
`;

export default IntroPage;
