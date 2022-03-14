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
    flexWrap,
    mobileColumn,
    foldColumn,
    mobileCenter,
    flex,
    mobileHidden,
    foldHidden,
  } = props;

  const styles = {
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
    height,
    margin,
    padding,
    bg,
    center,
    marginBottom,
    flexWrap,
    mobileColumn,
    foldColumn,
    mobileCenter,
    flex,
    mobileHidden,
    foldHidden,
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
  height: false,
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
  ${(props) => (props.flexWrap ? `flex-wrap:${props.flexWrap};` : '')}
  ${(props) => (props.flex ? `flex:${props.flex};` : '')}
  // space-beteween
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between;`
      : ''}
  // flex-start
  ${(props) =>
    props.is_flex_start
      ? `display: flex; align-items: center; justify-content: flex-start;`
      : ''}
  // center
  ${(props) =>
    props.is_flex_center
      ? `display: flex; align-items: center; justify-content: center;`
      : ''}
  // flex-end
  ${(props) =>
    props.is_flex_end
      ? `display: flex; align-items: center; justify-content: flex-end;`
      : ''}
  // mobile column center
  ${({ theme }) => theme.device.mobile} {
    ${(props) =>
      props.mobileColumn
        ? `display: flex; flex-direction: column;  justify-content: center;`
        : ''};
  }
  // fold column center
  ${({ theme }) => theme.device.fold} {
    ${(props) =>
      props.foldColumn
        ? `display: flex; flex-direction: column;  justify-content: center;`
        : ''};
  }
  // mobile row center
  ${({ theme }) => theme.device.mobile} {
    ${(props) =>
      props.mobileCenter ? `display: flex; justify-content: center;` : ''};
  }
  // mobile hidden
  ${({ theme }) => theme.device.mobile} {
    ${(props) => (props.mobileHidden ? `  visibility: hidden;` : '')};
  }
  // fold hidden
  ${({ theme }) => theme.device.fold} {
    ${(props) => (props.foldHidden ? `  visibility: hidden;` : '')};
  }
`;

export default Grid;
