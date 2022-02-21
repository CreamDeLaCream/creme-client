import React from 'react';
import styled from 'styled-components';
// import './Modal.css';

const Modal = ({ setOpenModal }) => {
  return (
    <ModalBackground>
      <ModalContainer>
        <TitleCloseBtn>
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </Button>
        </TitleCloseBtn>
        {/* <Title>
          <h1>Are You Sure You Want to Continue?</h1>
        </Title>
        <Body>
          <p>The next page looks amazing. Hope you want to go there!</p>
        </Body>
        <Footer>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button> 
        </Footer>*/}
      </ModalContainer>
    </ModalBackground>
  );
};

const ModalBackground = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--lightgray);
  opacity: 0.5;
  align-items: center;
  z-index: 30;
`;

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const Title = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.7rem;
  text-align: center;
`;

const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
