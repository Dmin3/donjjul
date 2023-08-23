'use client';

import React from 'react';

import styled from 'styled-components';

const SignOutModal = () => {
  const onClickSignOut = () => {
    localStorage.removeItem('accessToken');
    location.reload();
  };

  return (
    <SignOutModalBlock onClick={onClickSignOut}>로그아웃</SignOutModalBlock>
  );
};

export default SignOutModal;

const SignOutModalBlock = styled.div`
  width: 6rem;
  height: 3rem;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 15px;
  position: absolute;
  top: 4rem;
  cursor: pointer;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.21px;
  color: #191919;
`;
