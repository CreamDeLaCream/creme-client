import React from 'react';
import styled from 'styled-components';

// Data
import AnalysisData from './AnalysisData';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const MyPet = () => {
  const myPetList = [
    { name: 'LuLu' },
    // { name: 'Summer', age: '6살' },
    // { name: 'Lume', age: '3살' },
  ];

  const MyPetCards = ({ cardData }) => {
    return (
      <MyPetCard>
        <span>{cardData.name}</span>
      </MyPetCard>
    );
  };

  return (
    <>
      {myPetList.map((card, index) => {
        return <MyPetCards cardData={card} />;
      })}
    </>
  );
};

const MyPetCard = styled.div`
  width: 170px;
  height: 64px;
  cusor: pointer;

  // box-shadow: 3px 3px 3px 1px var(--lightgray);
  background-color: var(--main);
  color: var(--white);

  span {
    font-size: 30px;
    // font-family: nomal;
  }

  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;
