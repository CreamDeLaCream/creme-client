import React from 'react';
import styled from 'styled-components';

const Preview = ({ files }) => {
  const images = files.map((file) => (
    <ImgSection>
      <img
        src={file.preview}
        style={{
          width: '13rem',
          height: '13rem',
          borderRadius: '13rem',
        }}
        alt="preview"
        center
      />
    </ImgSection>
  ));
  return <>{images}</>;
};

const ImgSection = styled.div`
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
    background-size: contain;

    /* ${({ theme }) => theme.device.fold} { */
    /* display: flex;
    justify-content: center; */
    /* img {
      object-fit: cover;
      background-size: contain;
    } */
  }
`;

export default Preview;
