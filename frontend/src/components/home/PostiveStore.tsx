'use client';

import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import Slick from '@/components/common/Slick';

import { getStoreList } from '@/apis/store';

import { QUERY_KEY } from '@/constants/queryKey';

const PostiveStore = () => {
  const { data: postiveStoreData } = useQuery(
    [QUERY_KEY.STORE.GET_STORE_LIST],
    getStoreList,
  );

  return (
    <PostiveStoreBlock>
      <Title>선한 영향력 가게</Title>

      <ContentSection>
        <Slick
          slidesToScroll={1}
          slidesToShow={4}
          infinite
          autoplay
          speed={2000}
        >
          {postiveStoreData?.map((data) => (
            <Link href={`/store/${String(data.id)}`} key={data.id}>
              <PostiveStoreCard />
            </Link>
          ))}
        </Slick>
      </ContentSection>
    </PostiveStoreBlock>
  );
};

export default PostiveStore;

const PostiveStoreBlock = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  margin-top: 3rem;
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

const ContentSection = styled.section`
  height: 20rem;
  margin-top: 2rem;
`;

const PostiveStoreCard = styled.div`
  width: 15rem;
  height: 20rem;
  background-color: salmon;
  border-right: 1px solid #eaeaea;
`;
