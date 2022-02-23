import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisData from './AnalysisData';

const Record = ({ recordcards }) => {
  let [recordImage, setRecordImage] = useState(AnalysisData);
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  function ImageList({ recordcards }) {
    return (
      <RecordCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/cat0.png`}
          width="315px"
          height="315px"
        />
        {/* <CardContent>
          고양이
          {recordcards.name} {recordcards.date}
        </CardContent> */}
        고양이
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

  object-fit: cover;
  background-size: contain;

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
  color: var(--cream);
`;
export default Record;
