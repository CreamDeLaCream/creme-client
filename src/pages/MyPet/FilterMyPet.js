import React, { useState } from 'react';
import styled from 'styled-components';
import SelectSearch, { fuzzySearch } from 'react-select-search';

export const FilterMyPet = () => {
  const [myPet, setMyPet] = useState([]);
  const options = ['All', 'lulu', 'summer'];
  return (
    <MyPetSelectWrapper>
      <SelectSearch
        options={options}
        onChange={setMyPet}
        search
        filterOptions={fuzzySearch}
        placeholder="Search something"
      />
    </MyPetSelectWrapper>
  );
};

const MyPetSelectWrapper = styled.div`
  width: 300px;
  position: relative;
  box-sizing: border-box;
`;
