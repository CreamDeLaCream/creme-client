import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <div>
      <InputForm />
    </div>
  );
};

const InputForm = styled.input`
  width: 15rem;
  height: 2.4rem;
  border: 2px solid var(--lightgray);
  border-radius: 5px;
  padding: 0px 0px 0px 5px;
  font-size: 1.3rem;
  margin: 0 0 0 1.5rem;
  color: gray;
  :focus {
    outline: none;
  }
`;

export default Input;
