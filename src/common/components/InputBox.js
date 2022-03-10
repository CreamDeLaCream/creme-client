import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// components
import { Circle, Grid, Input, Dropzone, Preview } from '.';

// Icon
import { BsPlusLg } from 'react-icons/bs';

const InputBox = ({ data, onChangeData, files, onChangeFile }) => {
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
          <Dropzone onDrop setFiles={onChangeFile}>
            <Circle
              is_flex_center
              size="15"
              border="1rem solid var(--cream)"
              cursor
            >
              <BsPlusLg size="2rem" color="var(--darkcream)" />
              <Preview files={files} />
            </Circle>
          </Dropzone>
        </Grid>
      </Grid>

      <Grid>
        <Grid margin="2rem auto">
          <Grid is_flex margin="0 0 3rem 0">
            <Input
              name="name"
              placeholder="이름을 입력해주세요."
              value={data.name}
              onChange={(e) => {
                onChangeData('name', e.target.value);
              }}
            />
          </Grid>

          <Grid is_flex margin="0 0 1rem 0">
            <Input
              name="age"
              placeholder="나이를 입력해주세요."
              value={data.age}
              onChange={(e) => {
                onChangeData('age', e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default InputBox;
