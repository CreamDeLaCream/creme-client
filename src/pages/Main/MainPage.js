import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// redux
import { history } from '../../common/redux/configureStore';
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

// icons
import {
  BsCameraFill,
  BsFillCaretRightFill,
  BsFillExclamationCircleFill,
  BsPlusLg,
} from 'react-icons/bs';

const MainPage = (props) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([]);
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const is_login = useSelector((state) => state.user.is_login);

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

  const inputButtonEvent = (itemName, itemAge) => {
    setAge(itemAge);
    setName(itemName);
  };

  return (
    <>
      <Container>
        <Header />
        <Navbar />

        <Text type="mainTitle" color="var(--main)" padding-top="30px">
          반려견 감정상태
        </Text>
        {!is_login ? null : (
          <>
            <Grid margin="2rem auto">
              <Text type="mainTitle" color="var(--blackcream)">
                감정상태를 분석할 댕댕이를 골라주세요.
              </Text>
            </Grid>
            <SelectPetName inputHandler={inputButtonEvent} />
          </>
        )}

        <Grid margin="2rem auto">
          <Text type="mainTitle" color="var(--blackcream)">
            반려견과 반려인의 첫 걸음, 지금 당신의 반려견 감정 상태를
            분석해보세요.
          </Text>
        </Grid>

        <MainSection>
          <Grid is_flex mobileColumn padding="2rem">
            <Grid>
              <Grid margin="2rem auto" display="flex" justifyContent="center">
                <Dropzone onDrop setFiles={setFiles}>
                  <Circle
                    is_flex_center
                    mobileSizeXL
                    size="15"
                    border="1rem solid var(--cream)"
                    cursor
                  >
                    {files.length === 0 ? (
                      <Grid is_flex_center>
                        <BsPlusLg size="2rem" color="var(--darkcream)" />
                      </Grid>
                    ) : (
                      <Grid is_flex_center></Grid>
                    )}
                    <Preview files={files} />
                  </Circle>
                </Dropzone>
              </Grid>
            </Grid>

            <Grid>
              <Grid is_flex_end>
                <Button
                  padding="1.5rem 2rem 0 0"
                  bg="transparent"
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
              <Grid margin="3rem auto">
                <Grid is_flex margin="1rem 2rem 3rem 0">
                  <Input
                    placeholder="댕댕이의 이름을 입력해주세요."
                    value={name}
                    onChange={changeName}
                    type="text"
                  />
                </Grid>

                <Grid is_flex margin="0 2rem 1rem 0">
                  <Input
                    placeholder="댕댕이의 나이를 입력해주세요."
                    value={age}
                    onChange={changeAge}
                    type="number"
                  />
                </Grid>
              </Grid>

              <Grid>
                <Grid is_flex_end mobileCenter>
                  <ButtonWrapper>
                    <Button
                      width="4rem"
                      height="4rem"
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
        </MainSection>
      </Container>
      {modalOpen && (
        <Modal width="32rem" height="46rem" setOpenModal={setModalOpen}>
          <HowTo />
        </Modal>
      )}
    </>
  );
};

const MainSection = styled.div`
  width: 100%;
  background-color: var(--bggray);
  border-radius: 15px;
  border: solid 1px var(--cream);
`;

const ButtonWrapper = styled.div`
  // background-color: var(--cream);
  // justify-content: space-between;
  /* display: flex;
  justify-content: center; */
  /* margin-right: 2rem;*/
  margin-bottom: 3rem;
  ${({ theme }) => theme.device.mobile} {
    /* width: 48%; */
    display: flex;
    justify-content: center;
  }
  ${({ theme }) => theme.device.fold} {
    min-width: 100%;
    margin-bottom: 1rem;
  }
`;

export default MainPage;
