import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const MyPet = () => {
  return (
    <MyPetCard>
      <img
        alt=""
        src={process.env.PUBLIC_URL + `/Image/dog0.png`}
        width="450px"
      />
      LuLu
    </MyPetCard>
  );
};

const MyPetCard = styled.div`
  width: 220px;
  height: 220px;
  cusor: pointer;
  overflow: hidden;

  float: left;
  background-color: var(--main);
  border-radius: 50%;
  color: #ffffff;
`;
