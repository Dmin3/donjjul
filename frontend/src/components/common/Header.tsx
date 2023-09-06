'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import SignOutModal from '@/components/modal/SignOutModal';

import { getMyInfo } from '@/apis/auth';

import { KAKAO_LOGIN_URL } from '@/constants/oauth';
import { QUERY_KEY } from '@/constants/queryKey';

const Header = () => {
  const [modalToggle, setModalToggle] = useState(false);

  const router = useRouter();

  const { data: myInfo } = useQuery(
    [QUERY_KEY.MEMBER.GET_MY_INFO],
    getMyInfo,
    {},
  );

  const onClickLogin = () => {
    router.push(`${KAKAO_LOGIN_URL}`);
  };

  return (
    <HeaderBlock>
      <LogoBox onClick={() => router.push('/')}>돈쭐</LogoBox>

      <MenuBox>
        <MenuName onClick={() => router.push('/store')}>
          선한 영향력 가게
        </MenuName>
        <MenuName onClick={() => router.push('/board')}>홍보 가게</MenuName>
      </MenuBox>

      {myInfo ? (
        <UserBox onClick={() => setModalToggle(!modalToggle)}>
          <Image
            src={myInfo.profileImage}
            width={50}
            height={50}
            alt="Profile-Img"
          />
          <UserName>{myInfo.nickname}</UserName>

          {modalToggle && <SignOutModal />}
        </UserBox>
      ) : (
        <LoginSpan onClick={onClickLogin}>로그인</LoginSpan>
      )}
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
  position: fixed;
  top: 0;
  padding-left: 13rem;
  padding-right: 13rem;
  z-index: 15;
`;

const LogoBox = styled.div`
  width: 9rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
`;

const MenuBox = styled.div`
  width: 15rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 40%;
`;

const MenuName = styled.span`
  width: fit-content;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.24px;
  color: #191919;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-bottom: 3px solid #191919;
  }
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

const UserBox = styled.div`
  width: 13rem;
  height: 4rem;
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  img {
    border-radius: 30px;
  }
`;

const UserName = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: -0.24px;
  color: #191919;
  margin-left: 0.5rem;
`;
