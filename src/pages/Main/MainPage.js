import React, { useState } from 'react';
import styled from 'styled-components';

// components
import {
  Container,
  Header,
  Text,
  Grid,
  Button,
  Input,
  Navbar,
  Image,
} from '../../common/components';
import { useDropzone } from 'react-dropzone';
// import api from '../../common/utils/API';

const MainPage = (props) => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
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

  const images = files.map((file) => (
    <div key={file.name}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={file.preview}
          style={{ width: '250px' }}
          alt="preview"
          center
        />
      </div>
    </div>
  ));

  const { history } = props;
  const _session_key = null;
  const is_login = sessionStorage.getItem(_session_key);
  if (is_login)
    <Container height="100vh">
      <Header />
      <Navbar />

      <Grid margin="2rem auto">
        <Text type="mainTitle" color="main">
          감정상태를 분석할 댕댕이를 골라주세요.
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        <Grid is_flex margin="0 0 3rem 0">
          <Image size="15" />
          <Image size="15" />
          <Image size="15" />
        </Grid>
      </Grid>

      <Grid margin="1rem auto">
        <Grid is_flex width="100%">
          <Button
            width="48%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            mobileWidth
            // 중간 점검 이후 변경 예정
            // _onClick={() => history.push('/login')}
          >
            <Text type="button" color="white">
              사진찍기 / 업로드
            </Text>
          </Button>
          <Button
            width="48%"
            padding="0.5rem"
            bg="var(--main)"
            color="var(--white)"
            radius="5px"
            cursor
            _onClick={() => history.push('/analysis')}
            // _onClick={() => history.push('/result')}
          >
            <Text type="button" color="white">
              분석 시작
            </Text>
          </Button>
        </Grid>
      </Grid>
    </Container>;

  return (
    <Container height="100vh">
      <Header />
      <Navbar />

      <Grid margin="2rem auto">
        <Text type="mainTitle" color="main">
          반려견과 반려인의 첫 걸음,
          <br /> 지금 당신의 반려견 감정 상태를 분석해보세요.
        </Text>
      </Grid>

      <Grid margin="2rem auto">
        {/* <input {...getInputProps()} /> */}
        <div>{images}</div>
      </Grid>

      <Grid margin="2rem auto">
        <Grid is_flex margin="0 0 3rem 0">
          <Input placeholder="댕댕이의 이름을 입력해주세요." />
        </Grid>

        <Grid is_flex margin="0 0 1rem 0">
          <Input placeholder="댕댕이의 나이를 입력해주세요." />
        </Grid>
      </Grid>

      <Grid>
        <div style={{ flexGrow: 1, margin: 'auto' }}>
          <label htmlFor="img-upload">
            <div>
              <div></div>
            </div>
          </label>
        </div>
      </Grid>

      <Grid margin="1rem auto">
        <Grid is_flex width="100%">
          <Wrapper {...getRootProps()}>
            <Button
              width="100%"
              padding="0.5rem"
              bg="var(--main)"
              color="var(--white)"
              radius="5px"
              cursor
              // 중간 점검 이후 변경 예정
              // _onClick={() => history.push('/login')}
            >
              <Text type="button" color="white">
                사진 찍기/ 업로드
              </Text>
            </Button>
          </Wrapper>

          <Wrapper>
            <Button
              width="100%"
              padding="0.5rem"
              bg="var(--main)"
              color="var(--white)"
              radius="5px"
              cursor
              _onClick={() => history.push('/analysis')}
              // _onClick={() => history.push('/result')}
            >
              <Text type="button" color="white">
                분석 시작
              </Text>
            </Button>
          </Wrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 48%;
  justify-content: space-between;
`;

export default MainPage;
