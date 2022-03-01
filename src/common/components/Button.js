import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  const {
    _onClick,
    children,
    margin,
    width,
    height,
    padding,
    bg,
    color,
    radius,
    size,
    cursor,
    border,
    circle,
    is_flex_center,
    foldSize,
  } = props;

  const styles = {
    margin: margin,
    width: width,
    height: height,
    padding: padding,
    bg: bg,
    color: color,
    radius: radius,
    size: size,
    cursor: cursor,
    border: border,
    is_flex_center: is_flex_center,
    foldSize: foldSize,
  };

  if (circle) {
    return (
      <CircleButtonForm {...styles} onClick={_onClick}>
        {children}
      </CircleButtonForm>
    );
  }
  return (
    <ButtonForm {...styles} onClick={_onClick}>
      {children}
    </ButtonForm>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  margin: false,
  width: '',
  // height: '',
  size: false,
  padding: false,
  bg: false,
  color: false,
  radius: false,
  cursor: false,
  border: false,
};

const ButtonForm = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.size ? `font-size: ${props.size}` : '')};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) => (props.color ? `color: ${props.color};` : '')};
  box-sizing: border-box;
  border: none;
  ${(props) => (props.radius ? `border-radius: ${props.radius};` : '')};
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  ${(props) => (props.border ? `border: ${props.border}` : '')};
`;

const CircleButtonForm = styled.button`
  --size: ${(props) => props.size}rem;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')};
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')};
  ${(props) => (props.cursor ? `cursor: pointer;` : '')};
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  ${({ theme }) => theme.device.fold} {
    ${(props) => (props.foldSize ? `--size: 3rem;` : '')};
  }
`;

export default Button;
