import React, { useState } from 'react';
import styled from 'styled-components';

// Data
import AnalysisData from './AnalysisData';

// Icons
import { BsHeartFill } from 'react-icons/bs';
import { myPetEmotion } from './MyPetPage';

const Record = ({ petImages, clickedMyPet, clickedEmotion }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  function ImageList({ recordcards }) {
    return (
      <RecordWrapper>
        {recordcards.isLiked && (
          <ILikePetBt>
            <BsHeartFill color="var(--main)" size="30px" />
          </ILikePetBt>
        )}
        <RecordCard>
          <img
            alt=""
            src={process.env.PUBLIC_URL + `/Image/cat0.png`}
            width="315px"
            height="315px"
          />
          {recordcards.name} {recordcards.date} {recordcards.emotion}
        </RecordCard>
      </RecordWrapper>
    );
  }
  return (
    <>
      {petImages.map((recordcards, i) => {
        if (clickedEmotion.length === myPetEmotion.length) {
          if (clickedMyPet === 'all') {
            return <ImageList recordcards={recordcards} />;
          }
          if (clickedMyPet === recordcards.name) {
            return <ImageList recordcards={recordcards} />;
          }
        } else {
          if (clickedEmotion.indexOf(recordcards.emotion) !== -1) {
            if (clickedMyPet === 'all') {
              return <ImageList recordcards={recordcards} />;
            }
            if (clickedMyPet === recordcards.name) {
              return <ImageList recordcards={recordcards} />;
            }
          }
        }
      })}
    </>
  );
};

const RecordWrapper = styled.div`
  position: relative;
  margin-right: 5px;
`;

const ILikePetBt = styled.div`
  left: 270px;
  top: 280px;
  cursor: pointer;
  z-index: 2;

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

  // margin-top: 4px;

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

export default Record;
