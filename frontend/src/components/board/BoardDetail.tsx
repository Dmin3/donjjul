'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';

import Slick from '@/components/common/Slick';

import { getDetailBoard } from '@/apis/board';

import { QUERY_KEY } from '@/constants/queryKey';

const BoardDetail = () => {
  const params = useParams();

  const { data: boardDetail } = useQuery(
    [QUERY_KEY.BOARD.GET_DETAIL_BOARD, params.boardId],
    () => getDetailBoard(String(params.boardId)),
  );

  return (
    <BoardDetailBlock>
      <InfoSection>
        <Slick speed={500}>
          {boardDetail?.imageUrlList.map((data) => (
            <Image
              key={data.id}
              src={data.imageUrl}
              width={800}
              height={480}
              alt="Board-Img"
            />
          ))}
        </Slick>
      </InfoSection>
    </BoardDetailBlock>
  );
};

export default BoardDetail;

const BoardDetailBlock = styled.div`
  max-width: 70rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 6.5rem;
`;

const InfoSection = styled.div`
  width: 50rem;
  height: 30rem;
  margin: 0 auto;
  border: 1px solid #eaeaea;
`;
