import React from 'react';
import styled from 'styled-components';

import { Grid } from './';

const Input = (props) => {
  const {
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        <TextareaForm
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></TextareaForm>
      </Grid>
    );
  }
  return (
    <Grid>
      {is_submit ? (
        <InputForm
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          value={value}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e);
            }
          }}
        />
      ) : (
        <InputForm type={type} placeholder={placeholder} onChange={_onChange} />
      )}
    </Grid>
  );
};

const TextareaForm = styled.textarea`
  border: 2px solid var(--cream);
  width: 100%;
  font-size: 1.1rem;
  color: gray;
  padding: 5px 0px 0px 5px;
  border-radius: 5px;
  :focus {
    outline: none;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    color: var(--deepcream);
    text-align: center;
    padding: 1rem 0 0 0;
  }
  ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
  }
`;

const InputForm = styled.input`
  width: 100%;
  height: 2.4rem;
  border: 2px solid var(--cream);
  border-radius: 5px;
  padding: 0px 0px 0px 5px;
  font-size: 1.1rem;
  color: gray;
  :focus {
    outline: none;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
  ::placeholder {
    color: var(--blackcream);
  }
  /* ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
  } */
`;

export default Input;
