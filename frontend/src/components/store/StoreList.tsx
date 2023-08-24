'use client';

import React from 'react';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import { getStoreList } from '@/apis/store';

import { QUERY_KEY } from '@/constants/queryKey';

const StoreList = () => {
  const { data: postiveStoreData } = useQuery(
    [QUERY_KEY.STORE.GET_STORE_LIST],
    getStoreList,
  );

  return <StoreListBlock>StoreList</StoreListBlock>;
};

export default StoreList;

const StoreListBlock = styled.div``;
