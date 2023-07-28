'use client';

import styled from 'styled-components';

import React from 'react';

const Header = () => {
  return (
    <HeaderBlock>
      <LogoBox>로고</LogoBox>

      <MenuBox>
        <MenuName>선한 영향력 가게</MenuName>
        <MenuName>홍보 가게</MenuName>
      </MenuBox>

      <LoginSpan>로그인</LoginSpan>
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  position: sticky;
  padding-left: 13rem;
  padding-right: 13rem;
`;

const LogoBox = styled.div`
  width: 9rem;
  height: 4rem;
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuBox = styled.div`
  width: 15rem;
  height: 4rem;
  background-color: skyblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40%;
`;

const MenuName = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.24px;
  color: #191919;
  cursor: pointer;
`;

const LoginSpan = styled.span`
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.24px;
  color: #191919;
  cursor: pointer;
  margin-left: auto;
`;
