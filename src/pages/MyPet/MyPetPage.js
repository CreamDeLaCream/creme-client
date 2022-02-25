import React, { useState } from 'react';
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
import AnalysisData from './AnalysisData';

const IntroPage = () => {
  let [petImage, setPetImage] = useState(AnalysisData);

  const concatImage = () => {
    const temp = petImage.concat(AnalysisData);
    setPetImage(temp);
    // axios.get('api/userlist/${number}').then((res) => {
    //   const temp = card.concat(res.data.users);
    //   setCard(temp);
    // })
  };

  return (
    <Container height="200vh">
      <Header />
      <Navbar />
      <Text type="mainTitle" color="var(--blackcream)">
        나의 사랑스러운 댕댕이를
        <br />
        추가하고 감정기록들을 관리하세요.
      </Text>
      <MyPetWrapper>
        <MyPetInfo />
      </MyPetWrapper>

      <RecordWrapper>
        <Text type="mainTitle" color="var(--main)" padding-top="30px">
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
            cursor
            onClick={concatImage}
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
  border: solid 2px var(--cream);
  border-radius: 15px;
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
  margin-top: 50px;
  margin-bottom: 50px;
`;

export default IntroPage;
