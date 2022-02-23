import React from 'react';
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
          src={process.env.PUBLIC_URL + `/Image/dog0.png`}
          width="350px"
          height="350px"
        />
      </MyPetImage>
      <MyPetContent></MyPetContent>
    </MyPetInfoCard>
  );
};

const MyPetInfoCard = styled.div`
  width: 830px;
  height: 320px;
`;

const MyPetImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 2px solid var(--main);
  background-color: var(--main);
  overflow: hidden;
  // positon: absolute;
  // vertical-align: middle;
  margin-top: 20px;
  margin-left: 20px;
`;

const MyPetContent = styled.div``;
