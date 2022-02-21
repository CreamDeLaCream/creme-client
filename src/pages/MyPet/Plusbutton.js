import React from 'react';
import styled from 'styled-components';

export const Plusbutton = () => {
  return <MyPetPlusButton>마이펫 추가</MyPetPlusButton>;
};

const MyPetPlusButton = styled.div`
  width: 220px;
  height: 320px;
  cusor: pointer;
  overflow: hidden;

  background-color: var(--white);
  border: 2px solid var(--main);
  border-radius: 20px;

  color: var(--main);
  text-align: center;
  line-height: 310px;

  font-size: 30px;
`;
