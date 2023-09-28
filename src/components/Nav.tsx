import React from 'react';
import styled from 'styled-components';
import NavList from './NavList';

const NavWrap = styled.nav`
  width: 280px;
  height: 100vh;
  border: 1px solid #c4c4c4;
`;

const NavHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1 ;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const NavBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const NavBtn = styled.button`
  width: 125px;
  height: 30px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  background-color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  cursor: pointer;
`;


const Nav = () => {

  return (
    <NavWrap>
      <NavHeader>
        <NavBtn>URL 추가</NavBtn>
        <NavBtn>이미지 추가</NavBtn>
      </NavHeader>
      <NavBody>
        <NavList />
      </NavBody>
    </NavWrap>
  );
};

export default Nav;

