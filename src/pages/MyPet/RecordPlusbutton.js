import React from 'react';
import styled from 'styled-components';

export const RecordPlusbutton = () => {
  return <ImagePlusbutton />;
};

const ImagePlusbutton = styled.div`
  width: 310px;
  height: 310px;
  cusor: pointer;
  overflow: hidden;

  background-color: var(--white);
  // border: 2px solid var(--main);
  // border-radius: 20px;

  color: var(--main);
  text-align: center;
  line-height: 310px;

  font-size: 30px;
`;
