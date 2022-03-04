import React from 'react';

const Preview = ({ files }) => {
  const images = files.map((file) => (
    <div>
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
    </div>
  ));
  return <div>{images}</div>;
};

export default Preview;
