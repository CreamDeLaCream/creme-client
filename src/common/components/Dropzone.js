import React from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ setFiles, children }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpg, image/png, image/jpeg',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
    multiple: false,
  });

  return (
    <div className="container">
      <div {...getRootProps()}>
        <input
          id="img-upload"
          type="file"
          capture="camera"
          hidden
          {...getInputProps()}
        />
        {children}
      </div>
    </div>
  );
};

export default Dropzone;
