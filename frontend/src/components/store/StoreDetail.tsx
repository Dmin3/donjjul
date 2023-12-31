'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getDetailStore } from '@/apis/store';

import { QUERY_KEY } from '@/constants/queryKey';

const StoreDetail = () => {
  const router = useRouter();
  const params = useParams();
  const storeId = String(params.storeId);

  const { data: storeDetail } = useQuery(
    [QUERY_KEY.STORE.GET_DETAIL_STORE, params.storeId],
    () => getDetailStore(storeId),
  );

  return (
    <StoreDetailBlock>
      <CenterBox>
        <CreateButton
          onClick={() => router.push(`/board/create?ref=${storeId}`)}
        >
          이 가게 홍보하기
        </CreateButton>

        <StoreInfoBox>
          <Title>가게 정보</Title>

          <Line />

          <StoreInfo>가게명 : {storeDetail?.name}</StoreInfo>
          <StoreInfo>주소 : {storeDetail?.streetAddress}</StoreInfo>
          <StoreInfo>상세 주소 : {storeDetail?.detailAddress}</StoreInfo>
          <StoreInfo>산업군 : {storeDetail?.industryName}</StoreInfo>
          <StoreInfo>영업 시간 : {storeDetail?.openTime}</StoreInfo>
          <StoreInfo>제공 대상 : {storeDetail?.provided_2}</StoreInfo>
        </StoreInfoBox>
      </CenterBox>
    </StoreDetailBlock>
  );
};

export default StoreDetail;

const StoreDetailBlock = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  margin: 0 auto;
  margin-top: 6.5rem;
  background-color: #fafafa;
`;

const CenterBox = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding-top: 2rem;
`;

const CreateButton = styled.div`
  width: 8rem;
  height: 3rem;
  border-radius: 50px;
  border: none;
  background-color: #228be6;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  cursor: pointer;
`;

const StoreInfoBox = styled.div`
  width: 70rem;
  height: 25rem;
  background-color: #fff;
  margin-top: 2rem;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 2rem;
`;

const Title = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #333;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StoreInfo = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #191919;
  margin-top: 1rem;
`;
