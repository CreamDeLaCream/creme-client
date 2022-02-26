import React from 'react';
import styled from 'styled-components';
import { Button } from '../../common/components';

export default function PetListButton({ cardNum, onClickAnotherCard }) {
  return (
    <PetListButtonWrapper>
      <Button
        _onClick={() => {
          console.log('hi');
          onClickAnotherCard(0);
        }}
        width="13px"
        height="13px"
        radius="50%"
        bg={cardNum === 0 ? 'var(--deepcream)' : 'var(--darkcream)'}
      />
      <Button
        _onClick={() => {
          onClickAnotherCard(1);
        }}
        width="13px"
        height="13px"
        radius="50%"
        bg={cardNum === 1 ? 'var(--deepcream)' : 'var(--darkcream)'}
      />
    </PetListButtonWrapper>
  );
}

const PetListButtonWrapper = styled.div`
  position: absolute;

  top: 110px;
  right: 55px;

  width: 30px;
  height: 12px;

  display: flex;
  justify-content: space-between;

  // background-color: var(--main);
`;
