import React from 'react';
import styled from 'styled-components';

export const UserCard = () => {
  return <MyUserCard></MyUserCard>;
};

const MyUserCard = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  margin-top: 10px;

  background-color: var(--bggray);
  border: solid 1px var(--cream);
  border-radius: 15px;
`;
