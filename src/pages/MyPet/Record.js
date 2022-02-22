import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisImageData from './AnalysisImageData';

const Record = () => {
  let [recordImage, setRecordImage] = useState(AnalysisImageData);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  function ImageList({ recordcards }) {
    return (
      <RecordCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/dog0.png`}
          width="315px"
          height="315px"
        />
        <CardContent>
          {recordcards.name} {recordcards.date}
        </CardContent>
      </RecordCard>
    );
  }
  return (
    <>
      {recordImage.map((recordcards, i) => {
        return <ImageList recordcards={recordcards} />;
      })}
    </>
  );
};

const RecordCard = styled.div`
  width: 315px;
  height: 315px;
  overflow: hidden;

  cursor: pointer;
  background-color: var(--main);

  // border: 3px solid var(--main);
  // border-radius: 3px;
  object-fit: cover;
  background-size: contain;

  color: var(--main);
  font-weight: 500;

  margin-top: 7px;
  text-align: center;
  line-height: 310px;

  position: relative;

  img:hover {
    opacity: 0.1;
    transition: all 0.25s linear;
    transform: scale(1.25);
  }
`;

const CardContent = styled.div`
  font-size: 25px;
  margin-top: 75px;
  position: absolute;
  opacity: 0.1;
`;
export default Record;
