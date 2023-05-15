import React, { useState } from 'react';
import Login from '../../pages/components/Login/Login';
import Signup from '../../pages/components/Signup/Signup';
import './Modal.scss';
import User from '../../pages/components/User/User';

const Modal = ({ setIsOpenModal }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(true);

  return (
    <div
      className="modal"
      onClick={() => {
        setIsOpenModal(prev => !prev);
      }}
    >
      <div className="modalBox" onClick={e => e.stopPropagation()}>
        <User
          data={isOpenLogin ? LOGIN_DATA : SIGNUP_DATA}
          isOpenLogin={isOpenLogin}
          setIsOpenLogin={setIsOpenLogin}
        />
      </div>
    </div>
  );
};

export default Modal;

const LOGIN_DATA = {
  title: 'Login',
  text: '아직 회원이 아니신가요?',
  url: '/signup',
};

const SIGNUP_DATA = {
  title: 'Signup',
  text: '이미 가입하셨나요?',
  url: '/login',
};
