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
        {recordcards.name} {recordcards.date}
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

  // border: 3px solid var(--main);
  background-color: var(--main);
  // border-radius: 3px;

  margin-top: 7px;
  text-align: center;
  line-height: 310px;

  color: var(--white);

  // div {
  //   width: 220px;
  //   height: 200px;
  //   background-color: var(--withe);
  // }
`;
export default Record;
