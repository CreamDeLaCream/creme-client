import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisImageData from './AnalysisData';

// Compo
import { Keyword } from '../../common/components';
import { Button } from '../../common/components';

export const MyPetInfo = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  let [recordContent, setRecordContent] = useState(AnalysisImageData);

  return (
    <MyPetInfoCard>
      <MyPetContentContainer>
        <MyPetContent>
          <p>MyPet</p>
          <MyPetName>
            레아님의 댕댕이
            <br /> 'SUMMER'
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
              Hyppay
            </Button>
          </CurrentEmotion>
        </MyPetContent>
      </MyPetContentContainer>
      <MyPetImage>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/cat0.png`}
          width="300px"
          height="300px"
        />
      </MyPetImage>
    </MyPetInfoCard>
  );
};

const MyPetInfoCard = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: space-between;
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
  margin-top: 20px;
  margin-right: 30px;
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
  color: var(--gray);
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
