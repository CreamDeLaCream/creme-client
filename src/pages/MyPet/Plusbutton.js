import React from 'react';
import styled from 'styled-components';

export const Plusbutton = () => {
  return <MyPetPlusButton>추가</MyPetPlusButton>;
};

const MyPetPlusButton = styled.div`
  width: 220px;
  height: 220px;
  cusor: pointer;
  overflow: hidden;

  background-color: var(--main);
  // border: 4px solid var(--main);
  border-radius: 50%;

  color: #ffffff;
  text-align: center;
  line-height: 140px;
`;
