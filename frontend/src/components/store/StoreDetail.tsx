'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getDetailStore } from '@/apis/store';

import { QUERY_KEY } from '@/constants/queryKey';

const StoreDetail = () => {
  const params = useParams();
  const storeId = String(params.storeId);

  const { data: storeDetail } = useQuery(
    [QUERY_KEY.STORE.GET_DETAIL_STORE, params.storeId],
    () => getDetailStore(storeId),
  );

  return <StoreDetailBlock></StoreDetailBlock>;
};

export default StoreDetail;

const StoreDetailBlock = styled.div``;
