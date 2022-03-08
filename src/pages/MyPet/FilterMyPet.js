import React, { useState } from 'react';
import styled from 'styled-components';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FilterMyPet = ({ clickedMyPet, onClickMyPet }) => {
  return (
    <MyPetSelectWrapper>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 170 }}>
        <InputLabel style={{ color: 'var(--main)' }}>MyPet</InputLabel>
        <Select value={clickedMyPet} onChange={onClickMyPet} label="Age">
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value="lulu">Lulu</MenuItem>
          <MenuItem value="summer">Summer</MenuItem>
        </Select>
      </FormControl>
    </MyPetSelectWrapper>
  );
};

const MyPetSelectWrapper = styled.div`
  // background-color: var(—darkcream);
  margin-right: 30px;
`;
