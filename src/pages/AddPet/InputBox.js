import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import {
  Circle,
  Grid,
  Input,
  Dropzone,
  Preview,
} from '../../common/components';

const InputBox = (props) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');

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
          <Dropzone onDrop setFiles={setFiles}>
            <Circle
              is_flex_center
              size="15"
              border="1rem solid var(--cream)"
              cursor
            >
              <Preview files={files} />
            </Circle>
          </Dropzone>
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

export default InputBox;
