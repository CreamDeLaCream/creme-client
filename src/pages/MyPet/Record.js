import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisImageData from './AnalysisImageData';

const Record = () => {
  let [recordImage, setRecordImage] = useState(AnalysisImageData);

  function ImageList({ recordcards }) {
    return (
      <RecordCard>
        <div>
          {recordcards.name} {recordcards.date}
        </div>
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
  width: 310px;
  height: 310px;
  position: absolute;

  cursor: pointer;

  // border: 2px solid var(--main);
  background-color: var(--main);

  margin-right: 10px;

  div {
    width: 220px;
    height: 200px;
    background-color: var(--withe);
  }
`;

export default Record;
