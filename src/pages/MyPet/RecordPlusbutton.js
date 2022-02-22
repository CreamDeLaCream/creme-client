import React from 'react';
import styled from 'styled-components';

export const RecordPlusbutton = () => {
  return <ImagePlusbutton>+</ImagePlusbutton>;
};

const ImagePlusbutton = styled.div`
  width: 315px;
  height: 315px;
  cusor: pointer;
  overflow: hidden;

  background-color: var(--white);
  border: solid 1px var(--main);

  color: var(--main);
  text-align: center;
  line-height: 310px;

  margin-top: 7px;

  font-size: 30px;
`;
