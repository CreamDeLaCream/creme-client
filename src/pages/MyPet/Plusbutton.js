import React from 'react';
import styled from 'styled-components';

const Plusbutton = () => {
  return <MyPetPlusButton>마이펫 추가</MyPetPlusButton>;
};

const MyPetPlusButton = styled.div`
  width: 230px;
  height: 320px;
  cursor: pointer;
  overflow: hidden;

  background-color: var(--white);
  border: 1px solid var(--main);
  border-radius: 5px;

  color: var(--main);
  text-align: center;
  line-height: 310px;

  font-size: 30px;
`;

export default Plusbutton;
