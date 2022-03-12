import React from 'react';
import styled from 'styled-components';
import Dropdown from '../../common/components/Dropdown';

export const FilterMyPet = ({ clickedMyPet, onClickMyPet }) => {
  return (
    <MyPetSelectWrapper>
      <Dropdown
        clickedValue={clickedMyPet}
        onClickValue={onClickMyPet}
        menuList={['All', '옥자', 'lulu']}
      />
    </MyPetSelectWrapper>
  );
};

const MyPetSelectWrapper = styled.div`
  // background-color: var(—darkcream);
  margin-right: 30px;
`;
