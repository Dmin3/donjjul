'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterBlock>
      <UserBox>
        <Name>민진기 - (Back-End)</Name>
        <Link href="https://github.com/Dmin3" target="_blank">
          <Image
            src="/svgs/Github.svg"
            width={30}
            height={30}
            alt="Github-Img"
          />
        </Link>
        <Email>ekdrnzld@gmail.com</Email>
      </UserBox>

      <UserBox className="second">
        <Name>박상훈 - (Front-End)</Name>
        <Link href="https://github.com/sangboking" target="_blank">
          <Image
            src="/svgs/Github.svg"
            width={30}
            height={30}
            alt="Github-Img"
          />
        </Link>
        <Email>cowg001@naver.com</Email>
      </UserBox>
    </FooterBlock>
  );
};

export default Footer;

const FooterBlock = styled.footer`
  width: 100%;
  height: 15rem;
  background-color: #2e2e2e;
  margin-top: 3rem;
  padding-top: 3rem;
  padding-left: 15rem;

  .second {
    margin-top: 1rem;
  }
`;

const UserBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    margin-left: 0.8rem;
  }
`;

const Name = styled.span`
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
`;

const Email = styled.h5`
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  margin-left: 1rem;
`;
