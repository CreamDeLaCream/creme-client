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
  background-color: rgba(245, 234, 214, 0.3);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  min-width: var(--size);
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  ${({ theme }) => theme.device.mobile} {
    ${(props) =>
      props.mobileSize
        ? `--size: 8rem;
        width: var(--size); height: var(--size);
        border-radius: var(--size);  min-width: var(--size);`
        : ''};
  }
  ${({ theme }) => theme.device.fold} {
    ${(props) =>
      props.foldSize
        ? `--size: 7rem;
        width: var(--size); height: var(--size);
        border-radius: var(--size);  min-width: var(--size);`
        : ''};
  }
`;

export default Circle;
