'use client';

import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getStoreList } from '@/apis/store';

import { QUERY_KEY } from '@/constants/queryKey';

const StoreList = () => {
  const { data: postiveStoreData } = useQuery(
    [QUERY_KEY.STORE.GET_STORE_LIST],
    getStoreList,
  );

  return (
    <StoreListBlock>
      <Title>선한 영향력 가게</Title>

      <ContentSection>
        {postiveStoreData?.map((data) => (
          <Link href={`/store/${data.id}`} key={data.id}>
            <PostiveStoreCard>
              <Badge>{data.city}</Badge>
              <StoreTitle>{data.name}</StoreTitle>
              <StoreIndustry>{data.industryName}</StoreIndustry>
              <ProvideItem>{data.providedItem}</ProvideItem>
              <Provided_1>{data.provided_1}</Provided_1>
            </PostiveStoreCard>
          </Link>
        ))}
      </ContentSection>
    </StoreListBlock>
  );
};

export default StoreList;

const StoreListBlock = styled.div`
  max-width: 70rem;
  height: calc(100vh - 6.5rem);
  margin: 0 auto;
  margin-top: 6.5rem;
  padding-top: 2rem;
`;
const Title = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: -0.7px;
  color: #191919;
  padding-left: 1.2rem;
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

const PostiveStoreCard = styled.div`
  width: 16.5rem;
  height: 20rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  cursor: pointer;
  border: 1px solid #eaeaea;
`;

const Badge = styled.div`
  width: fit-content;
  padding-left: 0.938rem;
  padding-right: 0.938rem;
  height: 1.875rem;
  background-color: #fff;
  border-radius: 15px;
  border: solid 1px #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.21px;
  color: #191919;
  cursor: pointer;
`;

const StoreTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;
  margin-top: 0.5rem;
`;

const StoreIndustry = styled.h4`
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: green;
  margin-top: 0.5rem;
`;

const ProvideItem = styled.h5`
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: royalblue;
  margin-top: 0.5rem;
`;

const Provided_1 = styled.h5`
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: coral;
  margin-top: 0.5rem;
`;
