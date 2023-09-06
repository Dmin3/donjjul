'use client';

import React from 'react';

import styled from 'styled-components';

const Banner = () => {
  const test = `경기도 에 위치한 다양한
선한 영향력 가게들을 소개합니다.`;

  return (
    <BannerBlock>
      <AbsoluteBox>
        <Title>
          수많은 <span style={{ color: '#285184' }}>'선한 영양력'</span> 가게를
        </Title>
        <SemiTitle>홍보해 보세요!</SemiTitle>

        <Content>{test}</Content>
      </AbsoluteBox>
    </BannerBlock>
  );
};

export default Banner;

const BannerBlock = styled.div`
  width: 100%;
  height: 30rem;
  background-color: #dcecf8;
  margin-top: 6.5rem;
  position: relative;
`;

const AbsoluteBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Title = styled.h4`
  position: absolute;
  top: 5rem;
  left: 18rem;
  font-size: 3rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #191919;
`;

const SemiTitle = styled.h4`
  position: absolute;
  top: 9rem;
  left: 18rem;
  font-size: 3rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: #191919;
`;

const Content = styled.h4`
  position: absolute;
  top: 15rem;
  left: 18rem;
  white-space: pre-wrap;
  color: #555;
  font-size: 1.3rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
