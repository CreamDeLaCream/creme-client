import React from 'react';
import styled from 'styled-components';
import {
  logo_1,
  logo_2,
  head_1,
  head_2,
  head_3,
  sub_1,
  sub_2,
  body_1,
  body_2,
  button,
} from '../styles/textStyle';

const Text = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ type }) => {
    switch (type) {
      case 'logo_1':
        return `${logo_1}`;
      case 'logo_2':
        return `${logo_2}`;
      case 'head_1':
        return `${head_1}`;
      case 'head_2':
        return `${head_2}`;
      case 'head_3':
        return `${head_3}`;
      case 'sub_1':
        return `${sub_1}`;
      case 'sub_2':
        return `${sub_2}`;
      case 'body_1':
        return `${body_1}`;
      case 'body_2':
        return `${body_2}`;
      case 'button':
        return `${button}`;
      default:
        return;
    }
  }};
  color: ${(props) => (props.color ? `var(--${props.color})` : `black`)};
  width: ${(props) => props.width};
`;

export default Text;
