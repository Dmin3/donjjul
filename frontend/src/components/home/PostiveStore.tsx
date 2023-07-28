'use client';

import React from 'react';

import styled from 'styled-components';

import Slick from '@/components/common/Slick';

const PostiveStore = () => {
  return (
    <PostiveStoreBlock>
      <CarouselSection>
        <Slick slidesToScroll={1} slidesToShow={4} infinite={true}>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
          <PostiveStoreCard>
            <ImgBox>사진</ImgBox>
          </PostiveStoreCard>
        </Slick>
      </CarouselSection>
    </PostiveStoreBlock>
  );
};

export default PostiveStore;

const PostiveStoreBlock = styled.section`
  width: 60rem;
  height: 20rem;
  background-color: royalblue;
  margin: 0 auto;
`;

const CarouselSection = styled.section`
  height: 20rem;
`;

const PostiveStoreCard = styled.div`
  width: 15rem;
  height: 20rem;
  background-color: aqua;
  border-right: 1px solid red;
`;

const ImgBox = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: red;
`;
