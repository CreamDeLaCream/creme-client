import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

// components
import { Circle, Grid, Input } from '../../common/components';
import { useDropzone } from 'react-dropzone';

const InputBox = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

  // 이미지 업로드
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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
  });

  // 프리뷰
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

  // 이름 및 나이 입력
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeAge = (e) => {
    setAge(e.target.value);
  };

  // const addPost = () => {
  //   if (files.length === 0) {
  //     window.alert('이미지를 업로드해주세요');
  //     return;
  //   }
  //   if (!name) {
  //     window.alert('댕댕이의 이름을 입력해주세요');
  //     return;
  //   }
  //   if (!age) {
  //     window.alert('댕댕이의 나이를 입력해주세요');
  //     return;
  //   }
  //   history.push('/analysis');
  // };

  return (
    <Grid is_flex mobileColumn>
      <Grid>
        <Grid margin="2rem auto" display="flex" justifyContent="center">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Circle size="15" border="1rem solid var(--cream)" cursor>
              {isDragActive ? null : <div>{images}</div>}
            </Circle>
          </div>
        </Grid>
      </Grid>

      <Grid>
        <Grid margin="2rem auto">
          <Grid is_flex margin="0 0 3rem 0">
            <Input
              placeholder="댕댕이의 이름을 입력해주세요."
              value={name}
              _onChange={changeName}
            />
          </Grid>

          <Grid is_flex margin="0 0 1rem 0">
            <Input
              placeholder="댕댕이의 나이를 입력해주세요."
              value={age}
              _onChange={changeAge}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export default InputBox;
