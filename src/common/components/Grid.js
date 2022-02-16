import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    display,
    justifyContent,
    alignItems,
    is_flex,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    height,
  } = props;

  const styles = {
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    is_flex: is_flex,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
  };
  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  width: '100%',
  height: '',
  padding: false,
  margin: false,
  bg: false,
  center: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  box-sizing: border-box;
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''}
`;

export default Grid;