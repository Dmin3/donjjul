'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getBoardList } from '@/apis/board';

import { QUERY_KEY } from '@/constants/queryKey';

const PublicizeStore = () => {
  const { data: publicizeStoreData } = useQuery(
    [QUERY_KEY.BOARD.GET_BOARD_LIST],
    getBoardList,
  );

  return (
    <PublicizeStoreBlock>
      <Title>홍보 가게</Title>

      <ContentSection>
        {publicizeStoreData?.slice(0, 8).map((data) => (
          <Link href={`/board/${String(data.id)}`} key={data.id}>
            <PublicizeStoreCard>
              <Image
                src={data.imageUrlList[0].imageUrl}
                width={250}
                height={192}
                alt="Test-Img"
              />
              <StoreTitle>{data.title}</StoreTitle>
              <StoreContent>{data.content}</StoreContent>
              <UserProfileSection>
                <Image
                  src={data.profileImageUrl}
                  width={30}
                  height={30}
                  alt="Test-Img"
                />
                <UserName>{data.nickname}</UserName>
              </UserProfileSection>
            </PublicizeStoreCard>
          </Link>
        ))}
      </ContentSection>
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

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.3rem;
  column-gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 2rem;
`;

const PublicizeStoreCard = styled.div`
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
  margin-top: 0.4rem;
`;

const UserProfileSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 0.3rem;
  margin-left: 0.625rem;

  img {
    border-radius: 15px;
  }
`;

const UserName = styled.h4`
  font-size: 0.8rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;
  margin-left: 0.3rem;
`;
