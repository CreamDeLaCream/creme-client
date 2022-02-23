import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisImageData from './AnalysisData';

// Compo
import { Keyword } from '../../common/components';
import { Button } from '../../common/components';
import { MyPetImages } from './MyPetImages';

export const MyPetInfo = () => {
  let [recordContent, setRecordContent] = useState(AnalysisImageData);

  return (
    <MyPetInfoCard>
      <MyPetContentContainer>
        <MyPetContent>
          <p>MyPet</p>
          <MyPetName>
            레아님의 댕댕이
            <br /> <b style={{ color: 'var(--main)' }}>SUMMER, 6살</b>
          </MyPetName>
          <MyPetKeyword>
            <Keyword />
            {/* <CurrentEmotion>현재의 감정</CurrentEmotion> */}
          </MyPetKeyword>
          <CurrentEmotion>
            오늘의 댕댕이 감정상태는?
            <Button
              width="70px"
              height="23px"
              bg="var(--cream)"
              color="var(--main)"
              radius="10px"
              margin="0 0 0 5px"
            >
              Test Go!
            </Button>
          </CurrentEmotion>
        </MyPetContent>
      </MyPetContentContainer>
      <MyPetImages />
    </MyPetInfoCard>
  );
};

const MyPetInfoCard = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 20px;
`;

const MyPetImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  // positon: absolute;
  // vertical-align: middle;
  margin-right: 50px;
  margin-top: 10px;
`;

const MyPetContentContainer = styled.div`
  width: 500px;

  // background-color: var(--cream);
  color: var(--main);

  p {
    margin-top: 30px;
    font-size: 20px;
    width: 440px;
  }
`;

const MyPetContent = styled.div`
  margin-left: 30px;
`;

const MyPetName = styled.div`
  width: 440px;
  font-size: 30px;
  color: var(--darkcream);
`;

const MyPetKeyword = styled.div`
  width: 440px;
  margin-top: 20px;
`;

const CurrentEmotion = styled.div`
  width: 440px;
  color: var(--main);
  margin-top: 20px;
  cusor: pointer;
`;
