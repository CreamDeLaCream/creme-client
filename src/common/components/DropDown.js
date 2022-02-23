import React, { useRef } from 'react';
import useDetectOutsideClick from '../../common/utils/useDetectOutsideClick';
import './DropDown.css';

const DropDown = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <img
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
          alt="User avatar"
        />
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        <ul>
          <li>
            <p>마이페이지</p>
          </li>
          <li>
            <p>업로드</p>
          </li>
          <li>
            <p>로그아웃</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DropDown;
