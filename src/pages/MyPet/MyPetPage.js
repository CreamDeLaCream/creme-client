import React from 'react';
import styled from 'styled-components';

// components
import {
  Header,
  Navbar,
  Text,
  Container,
  Button,
} from '../../common/components';
import { MyPet } from './MyPet';
import { Plusbutton } from './Plusbutton';
import Record from './Record';
import { MyPetList } from './MyPetList';
import { MyPetInfo } from './MyPetInfo';

const IntroPage = () => {
  return (
    <Container height="200vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="main">
        나의 사랑스러운 댕댕이를
        <br />
        추가하고 감정기록들을 관리하세요.
      </Text>
      <MyPetWrapper>
        <MyPetInfo />
      </MyPetWrapper>

      <RecordWrapper>
        <Text type="mainTitle" color="main" padding-top="30px">
          마이펫 감정 기록
        </Text>
        <RecordCardWrapper>
          <Record />
        </RecordCardWrapper>
        <ButtonWrapper>
          <Button
            width="80px"
            height="80px"
            bg="var(--main)"
            radius="50%"
            size="20px"
            color="var(--white)"
          >
            더보기
          </Button>
        </ButtonWrapper>
      </RecordWrapper>
    </Container>
  );
};

const MyPetWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: row;
  background-color: var(--lightcream);
  border: solid 1px var(--lightcream);
  border-radius: 15px;

  position: relative;
`;
const RecordWrapper = styled.div`
  margin-top: 50px;
`;
const RecordCardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export default IntroPage;
