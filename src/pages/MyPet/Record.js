import React from 'react';
import styled from 'styled-components';

const Record = () => {
  return (
    <RecordCard>
      <div></div>
    </RecordCard>
  );
};

const RecordCard = styled.div`
  width: 310px;
  height: 310px;

  border: 2px solid var(--main);
  background-color: var(--main);

  margin-top: 10px;
  margin-right: 10px;

  div {
    width: 220px;
    height: 200px;
    background-color: var(--withe);
  }
`;

export default Record;
