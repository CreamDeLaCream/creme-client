import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const MyPet = () => {
  const myPetList = [
    { name: 'LuLu', age: '6살' },
    { name: 'Summer', age: '6살' },
  ];

  const MyPetCards = ({ cardData }) => {
    return (
      <MyPetCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/dog0.png`}
          width="450px"
        />
        {cardData.name}
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
  width: 220px;
  height: 220px;
  cusor: pointer;
  overflow: hidden;
  margin-right: 20px;

  float: left;

  background-color: var(--main);
  border-radius: 50%;
  color: #ffffff;
`;
