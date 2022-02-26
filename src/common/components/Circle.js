import React from 'react';
import styled from 'styled-components';

const Circle = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  min-width: var(--size);
  border: 1rem solid var(--cream);
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  ${({ theme }) => theme.device.mobile} {
    --size: ${(props) => props.size}rem;
  }
`;

export default Circle;
