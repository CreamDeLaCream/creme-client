import React from 'react';
import styled from 'styled-components';

const MyPetImages = ({ onClick, imgUrl }) => {
  return (
    <MyPetImage>
      <img
        alt=""
        src={process.env.REACT_APP_SERVER_URL + `${imgUrl}`}
        width="100%"
        height="100%"
        onClick={onClick}
      />
    </MyPetImage>
  );
};

const MyPetImage = styled.div`
  flex: 1;
  max-width: 260px;
  max-height: 260px;
  border-radius: 50%;
  border: 13px solid var(--cream);
  background-color: var(--main);
  overflow: hidden;
  margin-right: 50px;
  cursor: pointer;
  img {
    object-fit: cover;
    background-size: contain;
  }

  ${({ theme }) => theme.device.mobile} {
    position: absolute;
    max-width: 100px;
    max-height: 100px;
    right: 15px;
    top: 50px;
  }
`;

export default MyPetImages;
