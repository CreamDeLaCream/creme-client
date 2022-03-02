// import React, { useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { Circle } from '.';

// const Dropzone = ({ onDrop, accept }) => {
//   // Initializing useDropzone hooks with options
//   // const { getRootProps, getInputProps, isDragActive } = useDropzone({
//   //   onDrop,
//   //   accept,
//   // });
//   const [files, setFiles] = useState([]);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: 'image/jpg, image/png, image/jpeg',
//     onDrop: (acceptedFiles) => {
//       setFiles(
//         acceptedFiles.map((file) =>
//           Object.assign(file, {
//             preview: URL.createObjectURL(file),
//           }),
//         ),
//       );
//     },
//     multiple: false,
//   });
//   const images = files.map((file) => (
//     <div>
//       <img
//         src={file.preview}
//         style={{
//           width: '13rem',
//           height: '13rem',
//           borderRadius: '13rem',
//         }}
//         alt="preview"
//         center
//       />
//     </div>
//   ));
//   /*
//     useDropzone hooks exposes two functions called getRootProps and getInputProps
//     and also exposes isDragActive boolean
//   */

//   return (
//     <div {...getRootProps()}>
//       <input className="dropzone-input" {...getInputProps()} />
//       <div className="text-center">
//         {isDragActive ? (
//           <>
//             <Circle size="15" border="1rem solid var(--cream)" cursor>
//               {images === [] ? null : <div>{images}</div>}
//             </Circle>
//           </>
//         ) : (
//           <Circle size="15" border="1rem solid var(--cream)" cursor>
//             <p className="dropzone-content">드래그하거나 찾기하세요</p>
//           </Circle>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dropzone;
import React, { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Circle, Preview } from '.';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function Dropzone({ onDrop, accept, preview, children }) {
  // const [files, setFiles] = useState([]);
  // const { getRootProps, getInputProps, isDragActive } = useDropzone({

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    accept: 'image/jpg, image/png, image/jpeg',
    onDrop,
    multiple: false,
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject],
  );
  if (preview) {
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
  }
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
}

export default Dropzone;
