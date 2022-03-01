import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisData from './AnalysisData';

//Icons

import { BsHeartFill } from 'react-icons/bs';

const Record = ({ petImages }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  function ImageList({ recordcards }) {
    return (
      <RecordWrapper>
        <ILikePetBt>
          <BsHeartFill color="var(--cream)" size="30px" />
        </ILikePetBt>
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
          <RecordContent>
            LuLu <br />
            2022/03/01
          </RecordContent>
        </RecordCard>
      </RecordWrapper>
    );
  }
  return (
    <>
      {petImages.map((recordcards, i) => {
        return <ImageList recordcards={recordcards} />;
      })}
    </>
  );
};

const RecordWrapper = styled.div`
  positon: relative;
`;

const ILikePetBt = styled.div`
  left: 300px;
  margin-top: 280px;
  cursor: pointer;

  position: absolute;
`;

const RecordCard = styled.div`
  width: 315px;
  height: 315px;
  overflow: hidden;

  cursor: pointer;
  background-color: var(--cream);

  object-fit: cover;
  background-size: contain;

  margin-top: 7px;

  position: relative;

  p {
    text-align: center;
    font-size: 30px;
    color: var(--white);
    margin-top: 110px;
  }

  img {
    object-fit: cover;
    background-size: contain;
    position: absolute;
  }

  img:hover {
    opacity: 0.7;
    transition: all 0.25s linear;
    transform: scale(1.25);
  }
`;

const RecordContent = styled.div`
  width: 100%;
  text-align: center;
  font-size: 30px;
  color: var(--white);
`;

export default Record;
