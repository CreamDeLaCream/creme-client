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
  return <div>{images}</div>;
};

const ImgSection = styled.div`
  img {
    object-fit: cover;
    background-size: contain;
  }
`;

export default Preview;
