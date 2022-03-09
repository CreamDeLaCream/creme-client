import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../../common/redux/modules/petimage';

// components
import {
  Circle,
  Container,
  Header,
  Text,
  Grid,
  Button,
  Input,
  Navbar,
  Modal,
  Dropzone,
  Preview,
} from '../../common/components';
import HowTo from './HowTo';
import SelectPetName from './SelectPetName';

// Icon

import {
  BsCameraFill,
  BsFillCaretRightFill,
  BsFillExclamationCircleFill,
  BsPlusLg,
} from 'react-icons/bs';

const MainPage = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  // const pet_image_list = useSelector((state) => state.petimage.list);

  // 업로드 방식 모달
  const [modalOpen, setModalOpen] = useState(false);

  const addPost = () => {
    if (files.length === 0) {
      window.alert('이미지를 업로드해주세요');
      return;
    }
    if (!name) {
      window.alert('댕댕이의 이름을 입력해주세요');
      return;
    }
    if (!age) {
      window.alert('댕댕이의 나이를 입력해주세요');
      return;
    }
    let petimage = {
      name: name,
      age: age,
      image: files[0],
    };
    dispatch(postActions.addPetImageAX(petimage));
    console.log('petimage main', petimage.slug);
    history.replace(`/analysis`);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeAge = (e) => {
    setAge(e.target.value);
  };

  const is_login = useSelector((state) => state.user.is_login);

  return (
    <>
      <Container>
        <Header />
        <Navbar />
        {!is_login ? null : (
          <>
            <Grid margin="2rem auto">
              <Text type="mainTitle" color="var(--blackcream)">
                감정상태를 분석할 댕댕이를 골라주세요.
              </Text>
            </Grid>
            <SelectPetName />
          </>
        )}

        <Grid margin="2rem auto">
          <Text type="mainTitle" color="var(--blackcream)">
            반려견과 반려인의 첫 걸음,
            <br /> 지금 당신의 반려견 감정 상태를 분석해보세요.
          </Text>
        </Grid>

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
                  <BsPlusLg size="2rem" color="var(--darkcream)" />
                  <Preview files={files} />
                </Circle>
              </Dropzone>
            </Grid>
          </Grid>

          <Grid>
            <Grid is_flex_end>
              <Button
                padding="0.5rem"
                bg="transparent"
                radius="5px"
                cursor
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <Text type="body" color="var(--darkcream)">
                  <BsFillExclamationCircleFill color="var(--darkcream)" />{' '}
                  이미지 업로드 방식
                </Text>
              </Button>
            </Grid>
            <Grid margin="2rem auto">
              <Grid is_flex margin="0 0 3rem 0">
                <Input
                  placeholder="댕댕이의 이름을 입력해주세요."
                  value={name}
                  onChange={changeName}
                  type="text"
                />
              </Grid>

              <Grid is_flex margin="0 0 1rem 0">
                <Input
                  placeholder="댕댕이의 나이를 입력해주세요."
                  value={age}
                  onChange={changeAge}
                  type="number"
                />
              </Grid>
            </Grid>

            <Grid>
              <Grid is_flex_end>
                <ButtonWrapper>
                  <Button
                    width="4rem"
                    height="4rem"
                    // padding="0.5rem"
                    bg="var(--main)"
                    color="var(--white)"
                    radius="50%"
                    cursor
                    margin="0 10px 0 0"
                  >
                    <Dropzone onDrop setFiles={setFiles}>
                      <Text
                        type="button"
                        color="var(--white)"
                        whiteSpace="nowrap"
                      >
                        <BsCameraFill size="2rem" />
                      </Text>
                    </Dropzone>
                  </Button>
                  <Button
                    width="4rem"
                    height="4rem"
                    // padding="0.5rem"
                    bg="var(--main)"
                    color="var(--white)"
                    radius="50%"
                    cursor
                    onClick={addPost}
                  >
                    <Text type="button" color="var(--white)">
                      <BsFillCaretRightFill size="2rem" />
                    </Text>
                  </Button>
                </ButtonWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {modalOpen && (
        <Modal width="30rem" height="40rem" setOpenModal={setModalOpen}>
          <HowTo />
        </Modal>
      )}
    </>
  );
};

const ButtonWrapper = styled.div`
  // background-color: var(--cream);
  // justify-content: space-between;
  ${({ theme }) => theme.device.mobile} {
    width: 48%;
    min-width: 10rem;
  }
  ${({ theme }) => theme.device.fold} {
    min-width: 100%;
    margin-bottom: 1rem;
  }
`;

export default MainPage;
