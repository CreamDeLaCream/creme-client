import React from 'react';
import styled from 'styled-components';

export const MyPetImages = ({ imgUrl }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';
  return (
    <MyPetImage>
      <img
        alt=""
        src={process.env.PUBLIC_URL + `${imgUrl}`}
        width="250px"
        height="250px"
      />
    </MyPetImage>
  );
};

const MyPetImage = styled.div`
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 13px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  // positon: absolute;
  // vertical-align: middle;
  margin-right: 50px;
`;
