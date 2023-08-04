'use client';

import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';

const PublicizeStore = () => {
  const tempArr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <PublicizeStoreBlock>
      <Title>홍보 가게</Title>

      <CarouselSection>
        {tempArr.map((data) => (
          <PostiveStoreCard key={data}>
            <Image
              src="/images/Test.png"
              width={250}
              height={192}
              alt="Test-Img"
            />
            <StoreTitle>제목</StoreTitle>
            <StoreContent>내용</StoreContent>
          </PostiveStoreCard>
        ))}
      </CarouselSection>
    </PublicizeStoreBlock>
  );
};

export default PublicizeStore;

const PublicizeStoreBlock = styled.section`
  max-width: 70rem;
  margin: 0 auto;
`;

const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.7px;
  color: #191919;
  margin-left: 1.2rem;
  margin-top: 2rem;
`;

const CarouselSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.3rem;
  column-gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 2rem;
`;

const PostiveStoreCard = styled.div`
  width: 16.5rem;
  height: 20rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  img {
    border-radius: 10px;
  }
`;

const ImgBox = styled.div`
  height: 12rem;
`;

const StoreTitle = styled.h3`
  width: 12.8rem;
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;
  margin-left: 0.625rem;
  margin-top: 1rem;
`;

const StoreContent = styled.h4`
  width: 12.8rem;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;
  margin-left: 0.625rem;
  margin-top: 0.8rem;
`;
