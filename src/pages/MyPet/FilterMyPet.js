import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FilterMyPet = () => {
  const [myPetName, setMyPetName] = useState('');
  const handleChange = (e) => {
    setMyPetName(e.target.value);
  };

  return (
    <MyPetSelectWrapper>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
        <InputLabel style={{ color: 'var(--main)' }}>MyPet</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={myPetName}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={10}>Lulu</MenuItem>
          <MenuItem value={20}>Summer</MenuItem>
        </Select>
      </FormControl>
    </MyPetSelectWrapper>
  );
};

const MyPetSelectWrapper = styled.div`
  // background-color: var(--darkcream);
  margin-right: 30px;
`;
