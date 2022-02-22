import React from 'react';
import styled from 'styled-components';

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || '';

export const MyPet = () => {
  const myPetList = [
    { name: 'LuLu', age: '6살' },
    { name: 'Summer', age: '6살' },
    { name: 'Lume', age: '3살' },
  ];

  const MyPetCards = ({ cardData }) => {
    return (
      <MyPetCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/dog0.png`}
          width="230px"
          height="230px"
        />
        <span>{cardData.name}</span>
        <span>{cardData.age}</span>
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
  width: 230px;
  height: 320px;
  cusor: pointer;
  overflow: hidden;
  margin-right: 20px;
  box-shadow: 3px 3px 3px 1px var(--lightgray);

  float: left;

  background-color: var(--white);
  // border: 2px solid var(--main);
  border-radius: 5px;
  color: var(--main);

  img {
    object-fit: cover;
    background-size: contain;
  }

  span {
    margin-left: 13px;
    margin-top: 10px;
    font-size: 20px;
    // font-family: nomal;
  }

  div {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--white);
  }
`;
