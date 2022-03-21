import React from 'react';
import styled from 'styled-components';

// components
import { Dropdown } from '../../common/components';

const FilterMyPet = ({ clickedMyPet, onClickMyPet }) => {
  return (
    <MyPetSelectWrapper>
      <Dropdown
        clickedValue={clickedMyPet}
        onClickValue={onClickMyPet}
        menuList={['All', '옥자', '지노']}
      />
    </MyPetSelectWrapper>
  );
};

const MyPetSelectWrapper = styled.div`
  margin-right: 30px;
`;

export default FilterMyPet;
