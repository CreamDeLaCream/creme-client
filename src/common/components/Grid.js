import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    border,
    flexDirection,
    display,
    justifyContent,
    alignItems,
    is_flex,
    is_flex_start,
    is_flex_center,
    is_flex_end,
    width,
    margin,
    padding,
    bg,
    children,
    center,
    height,
    marginBottom,
  } = props;

  const styles = {
    border: border,
    flexDirection: flexDirection,
    display: display,
    justifyContent: justifyContent,
    alignItems: alignItems,
    is_flex: is_flex,
    is_flex_start: is_flex_start,
    is_flex_center: is_flex_center,
    is_flex_end: is_flex_end,
    width: width,
    height: height,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    marginBottom: marginBottom,
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
  ${(props) =>
    props.flexDirection ? `flex-direction: ${props.flexDirection};` : ''}
  ${(props) => (props.border ? `border: ${props.border};` : '')}
  ${(props) => (props.display ? `display: ${props.display};` : '')}
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems};` : '')}
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent};` : ''}
  ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
  ${(props) => (props.height ? `height: ${props.height};` : '')}
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) =>
    props.marginBottom ? `margin-bottom: ${props.marginBottom};` : ''}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''}
  ${(props) =>
    props.is_flex_start
      ? `display: flex; align-items: center; justify-content: flex-start;`
      : ''}
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  ${(props) =>
    props.is_flex_end
      ? `display: flex; align-items: center; justify-content: flex-end;`
      : ''}
`;

export default Grid;
