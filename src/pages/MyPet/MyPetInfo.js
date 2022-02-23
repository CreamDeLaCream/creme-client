import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisImageData from './AnalysisData';

export const MyPetInfo = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  let [recordContent, setRecordContent] = useState(AnalysisImageData);

  return (
    <MyPetInfoCard>
      <MyPetImage>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/cat0.png`}
          width="300px"
          height="300px"
        />
      </MyPetImage>
      <MyPetContent>
        <p>MyPet</p>
        <MyPetName>
          레아님의 <br />
          댕댕이 LULU
        </MyPetName>
      </MyPetContent>
    </MyPetInfoCard>
  );
};

const MyPetInfoCard = styled.div`
  width: 830px;
  height: 320px;
  display: flex;
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
  margin-left: 20px;
`;

const MyPetContent = styled.div`
  margin-left: 20px;
  width: 500px;

  // background-color: var(--cream);
  color: var(--main);

  p {
    margin-top: 30px;
    margin-left: 30px;
    width: 440px;
  }
`;

const MyPetName = styled.div`
  width: 440px;
  margin-left: 30px;
  font-size: 30px;
  color: var(--gray);
`;
