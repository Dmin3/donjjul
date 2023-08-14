'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getBoardList } from '@/apis/board';

import { QUERY_KEY } from '@/constants/queryKey';

const BoardList = () => {
  const router = useRouter();

  const { data: publicizeStoreData } = useQuery(
    [QUERY_KEY.BOARD.GET_BOARD_LIST],
    getBoardList,
  );

  return (
    <BoardListBlock>
      <TitleSection>
        <Title>홍보 가게</Title>

        <Button onClick={() => router.push('/board/create')}>홍보하기</Button>
      </TitleSection>

      <ContentSection>
        {publicizeStoreData?.map((data) => (
          <PublicizeStoreCard key={data.id}>
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
        ))}
      </ContentSection>
    </BoardListBlock>
  );
};

export default BoardList;

const BoardListBlock = styled.div`
  max-width: 70rem;
  height: calc(100vh - 6.5rem);
  margin: 0 auto;
  margin-top: 6.5rem;
  padding-top: 2rem;
`;

const TitleSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.2rem;
`;

const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.7px;
  color: #191919;
`;

const Button = styled.button`
  width: 4.875rem;
  height: 2.125rem;
  background-color: #fff;
  color: #191919;
  border: 1px solid #191919;
  cursor: pointer;
  border-radius: 15px;
`;

const ContentSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.3rem;
  column-gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: 3rem;
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
