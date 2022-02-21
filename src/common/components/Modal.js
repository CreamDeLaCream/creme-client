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

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

export default Modal;
