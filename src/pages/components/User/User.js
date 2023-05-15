import React, { useState } from 'react';
import './User.scss';

const User = ({ data, isOpenLogin, setIsOpenLogin }) => {
  const { title, text, url } = data;

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    id: '',
    password: '',
    check: '',
  });

  const handleInfo = e => {
    if (isOpenLogin) return;
    const { name, value } = e.target;
    setSignupInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = e => {
    if (!isOpenLogin) return;
    e.preventDefault();
    localStorage.setItem('token', '성공');
    setIsOpenLogin(prev => !prev);
  };

  return (
    <form className="user">
      <span className="title">{title}</span>
      <div className="inputBox">
        {!isOpenLogin && (
          <input
            className="userInput"
            name="name"
            placeholder="이름"
            onChange={handleInfo}
          />
        )}
        <input
          className="userInput"
          name="id"
          placeholder="아이디"
          onChange={handleInfo}
        />
        <input
          className="userInput"
          name="password"
          placeholder="비밀번호"
          onChange={handleInfo}
        />
        {!isOpenLogin && (
          <input
            className="userInput"
            name="check"
            placeholder="비밀번호 확인"
            onChange={handleInfo}
          />
        )}
      </div>
      <button className="formButton" onClick={handleLogin}>
        {title}
      </button>
      <span
        className="linkTranslationBtn"
        onClick={() => {
          setIsOpenLogin(prev => !prev);
        }}
      >
        {text}
      </span>
    </form>
  );
};

export default User;
