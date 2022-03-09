import React from 'react';
import styled from 'styled-components';

const MyPetSelectBox = () => {
  return (
    <MyPetSelect>
      <select>
        <option key="lulu" value="lulu">
          lulu
        </option>
        <option key="summer" value="summer">
          lulu
        </option>
      </select>
    </MyPetSelect>
  );
};

const MyPetSelect = styled.div``;

export default MyPetSelectBox;
