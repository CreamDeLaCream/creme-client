import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Icon

// components
import { Text, Grid } from '../../common/components';
import HighlightText from '../../common/styles/HighlightText';
import api from '../../common/utils/API';

const DogDataSet = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  const [weekData, setWeekData] = useState(null);
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const header = {
      Authorization: `Bearer ${token}`,
    };
    api.get('analysis/week', { headers: header }).then((res) => {
      setWeekData(res.data);
    });
  }, [token]);

  if (weekData === null) {
    return <></>;
  }

  return (
    <>
      <Grid flexDirection="column">
        <Grid>
          <Text type="mainTitle" color="var(--blackcream)" margin="0 0 10px 0">
            이번 주 댕댕이{' '}
            <HighlightText color="var(--lightcream)">
              평균 감정기록
            </HighlightText>
            은?
          </Text>
          <img
            alt=""
            src={process.env.PUBLIC_URL + `/Image/bgdog1.png`}
            width="300px"
            height="300px"
          />
          <DogDataSeciton>
            {DogDatas.map((dogData) => {
              return (
                <DogDataInfo>
                  <DataQues>{dogData.ques}</DataQues>
                  <DataAns>{weekData[dogData.key]}</DataAns>
                </DogDataInfo>
              );
            })}
          </DogDataSeciton>
        </Grid>
      </Grid>
    </>
  );
};

const DogDataInfo = styled.div`
  width: 8rem;
  height: 8rem;
  // margin-right: 1rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border: 2px dashed var(--cream);
  border-radius: 10px;
  color: var(--darkcream);
  font-size: 2rem;
`;

const DataQues = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  background-color: var(--darkcream);
  font-size: 1rem;
  color: var(--white);
`;

const DataAns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 6rem;
  // background-color: var(--main);
`;

const ImageItems = styled.div`
  img {
    overflow: hidden;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-size: contain;
  }
`;

const DogDataSeciton = styled.div`
  display: flex;
  justify-content: space-between;
`;

//감정, 홀로보낸시간, 산책횟수, 간식횟수
const DogDatas = [
  {
    ques: '제일 많이 느낀 감정',
    key: 'emotion',
  },
  {
    ques: '홀로 보낸시간',
    key: 'waiting',
  },
  {
    ques: '산책 횟수',
    key: 'walking',
  },
  {
    ques: '간식횟수',
    key: 'num_snack',
  },
];

export default DogDataSet;
