import React, { useState } from 'react';
import styled from 'styled-components';

// components
import { Grid } from '../../common/components';

const SelectPetName = () => {
  return (
    <Grid margin="2rem auto">
      <Grid
        display="flex"
        justifyContent="space-around"
        // margin="0 0 3rem 0"
        flexWrap="wrap"
      >
        {['옥자', '지노'].map((item) => (
          <Radio key={item}>
            <input type="radio" name="feeling" value={item} />
            <span>{item}</span>
          </Radio>
        ))}
      </Grid>
    </Grid>
  );
};

const Radio = styled.label`
  width: auto;
  height: auto;
  position: relative;
  ${({ theme }) => theme.device.mobile} {
    margin-bottom: 3rem;
  }
  ${({ theme }) => theme.device.fold} {
    margin-bottom: 1rem;
  }
  & > span {
    width: 15rem;
    height: 15rem;
    border-radius: 15rem;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    color: var(--darkcream);
    background-color: var(--cream);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    ${({ theme }) => theme.device.fold} {
      width: 10rem;
      height: 10rem;
      border-radius: 10rem;
    }
  }

  & > input {
    width: 0%;
    height: 0%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  & > input:checked + span {
    background-color: var(--main);
    color: var(--white);
  }
`;

export default SelectPetName;
