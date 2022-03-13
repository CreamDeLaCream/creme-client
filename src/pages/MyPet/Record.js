import React from 'react';
import styled from 'styled-components';

// components
import { Button } from '../../common/components';
import { myPetEmotion } from './MyPetPage';

// icons
import { BsHeartFill } from 'react-icons/bs';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Record = ({ petRecords, pageMaxNum, clickedMyPet, clickedEmotion }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  const history = useHistory();
  const slugList = useSelector((state) => state.petimage.list);

  const ImageList = ({ petRecord }) => {
    return (
      <RecordWrapper
        onClick={() => {
          // history.push(`/result/${petRecord.slug}`)
          history.push(`/result/${slugList[slugList.length - 1]?.slug}`); // 임시 코드
        }}
      >
        {petRecord.is_favorite && (
          <ILikePetBt>
            <BsHeartFill color="var(--main)" size="30px" />
          </ILikePetBt>
        )}
        <MyPetInfo>
          <Button
            height="23px"
            radius="10px"
            bg="rgba(245, 234, 214, 0.46)"
            border="solid var(--lightcream) 1px"
            color="var(--lightcream)"
            margin="0 10px 0 10px"
          >
            {petRecord.dog_name}
          </Button>
          <Button
            height="23px"
            radius="10px"
            bg="rgba(245, 234, 214, 0.46)"
            border="solid var(--lightcream) 1px"
            color="var(--lightcream)"
            margin="0 10px 0 0"
          >
            {petRecord.created_at?.slice(0, 10)}
          </Button>
          <Button
            height="23px"
            radius="10px"
            bg="rgba(245, 234, 214, 0.46)"
            border="solid var(--lightcream) 1px"
            color="var(--lightcream)"
            margin="0 10px 0 0"
          >
            {petRecord.dog_emotion}
          </Button>
        </MyPetInfo>
        <RecordCard>
          <img alt="" src={petRecord.image} width="315px" height="315px" />
        </RecordCard>
      </RecordWrapper>
    );
  };
  const emotionObj = {
    angry: '화남',
    fear: '두려움',
    happy: '행복',
    sad: '슬픔',
  };
  if (petRecords == null) {
    return <></>;
  }

  return (
    <>
      {petRecords.slice(0, pageMaxNum).map((petRecord, i) => {
        if (clickedEmotion.length === myPetEmotion.length) {
          if (clickedMyPet === 'all') {
            return <ImageList petRecord={petRecord} />;
          }
          if (clickedMyPet === petRecord.dog_name) {
            return <ImageList petRecord={petRecord} />;
          }
        } else {
          if (
            clickedEmotion
              .map((ele) => emotionObj[ele])
              .indexOf(petRecord.dog_emotion) !== -1
          ) {
            if (clickedMyPet === 'all') {
              return <ImageList petRecord={petRecord} />;
            }
            if (clickedMyPet === petRecord.dog_name) {
              return <ImageList petRecord={petRecord} />;
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
  top: 275px;
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

  margin-bottom: 5px;

  position: relative;

  p {
    text-align: center;
    font-size: 30px;
    color: var(—white);
    margin-top: 110px;
  }

  img {
    object-fit: cover;
    background-size: contain;
    position: absolute;
  }

  img:hover {
    // opacity: 0.7;
    transition: all 0.25s linear;
    transform: scale(1.25);
  }
`;

const MyPetInfo = styled.div`
  z-index: 2;
  top: 280px;
  position: absolute;
`;

export default Record;
