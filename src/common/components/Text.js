import React from 'react';
import styled from 'styled-components';
import {
  logo,
  menu,
  mainTitle,
  subTitle,
  body,
  desc,
  button,
} from '../styles/textStyle';

const Text = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  ${({ type }) => {
    switch (type) {
      case 'logo':
        return `${logo}`;
      case 'menu':
        return `${menu}`;
      case 'mainTitle':
        return `${mainTitle}`;
      case 'subTitle':
        return `${subTitle}`;
      case 'body':
        return `${body}`;
      case 'desc':
        return `${desc}`;
      case 'button':
        return `${button}`;
      default:
        return;
    }
  }};
  color: ${(props) => (props.color ? `var(--${props.color})` : `black`)};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.fontSize};
`;

export default Text;
