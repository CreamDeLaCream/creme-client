import React from 'react';
import styled from 'styled-components';

export const MyPetImages = () => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  return (
    <MyPetImage>
      <img
        alt=""
        src={process.env.PUBLIC_URL + `/Image/cat0.png`}
        width="300px"
        height="300px"
      />
    </MyPetImage>
  );
};

const MyPetImage = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  border: 13px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  // positon: absolute;
  // vertical-align: middle;
  margin-right: 50px;
  margin-top: 10px;
`;
