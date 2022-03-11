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
        width="100%"
        height="100%"
      />
    </MyPetImage>
  );
};

const MyPetImage = styled.div`
  flex: 1;
  max-width: 260px;
  max-height: 260px;
  border-radius: 50%;
  border: 13px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  // positon: absolute;
  // vertical-align: middle;
  margin-right: 50px;

  img {
    object-fit: cover;
    background-size: contain;
  }

  ${({ theme }) => theme.device.mobile} {
    position: absolute;
    max-width: 100px;
    max-height: 100px;
    right: 15px;
    top: 50px;
  }
`;
