import React from 'react';
import styled from 'styled-components';

import { Grid } from './';

const Input = (props) => {
  const {
    placeholder,
    onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
    disabled,
  } = props;

  if (multiLine) {
    return (
      <Grid>
        <TextareaForm
          type={type}
          rows={3}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
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
          onChange={onChange}
          value={value}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e);
            }
          }}
        />
      ) : (
        <InputForm
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </Grid>
  );
};

const TextareaForm = styled.textarea`
  width: 100%;
  font-size: 1.1rem;
  color: gray;
  padding: 5px 0px 0px 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid var(--cream);

  background-color: transparent;
  font-family: IBM Plex Sans KR;

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
  :hover {
    border-bottom: 2px solid var(--main);
  }
`;

const InputForm = styled.input`
  width: 100%;
  height: 2.4rem;
  // border: 2px solid var(--cream);
  background-color: transparent;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid var(--cream);
  padding: 0px 0px 0px 5px;
  font-size: 1.1rem;
  font-family: IBM Plex Sans KR;
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

  :hover {
    border-bottom: 2px solid var(--main);
  }

  /* ${({ theme }) => theme.device.mobile} {
    min-width: 20rem;
  } */
`;

export default Input;
