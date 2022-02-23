import React from 'react';
import styled from 'styled-components';

export const RecordPlusbutton = () => {
  return (
    <ImagePlusbutton>
      <span>더보기</span>
    </ImagePlusbutton>
  );
};

const ImagePlusbutton = styled.div`
  width: 100px;
  height: 100px;
  cusor: pointer;
  overflow: hidden;

  background-color: var(--main);
  border-radius: 50%;
  // border: solid 1px var(--main);

  color: #ffffff;
  text-align: center;
  line-height: 310px;

  margin-top: 7px;
  margin-bottom: 7px;

  font-size: 30px;

  span {
    color: #ffffff;
  }
`;
