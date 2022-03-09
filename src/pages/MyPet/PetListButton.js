import React from 'react';
import styled from 'styled-components';

// components
import { Button } from '../../common/components';

const PetListButton = ({ cardNum, onClickAnotherCard }) => {
  return (
    <PetListButtonWrapper>
      <Button
        onClick={() => {
          console.log('hi');
          onClickAnotherCard(0);
        }}
        width="13px"
        height="13px"
        radius="50%"
        cursor
        bg={cardNum === 0 ? 'var(--main)' : 'var(--darkcream)'}
      />
      <Button
        onClick={() => {
          onClickAnotherCard(1);
        }}
        width="13px"
        height="13px"
        radius="50%"
        cursor
        bg={cardNum === 1 ? 'var(--main)' : 'var(--darkcream)'}
      />
    </PetListButtonWrapper>
  );
};

const PetListButtonWrapper = styled.div`
  position: absolute;

  top: 115px;
  right: 70px;

  width: 30px;
  height: 12px;

  display: flex;
  justify-content: space-between;

  z-index: 10;

  // background-color: var(--main);
`;

export default PetListButton;
