'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import styled from 'styled-components';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  createBoardComment,
  deleteBoardComment,
  editBoardComment,
  getBoardComment,
} from '@/apis/board';

import { QUERY_KEY } from '@/constants/queryKey';

const BoardComment = () => {
  const [content, setContent] = useState('');

  const params = useParams();
  const boardId = String(params.boardId);
  const queryClient = useQueryClient();

  const { data: boardComment } = useQuery(
    [QUERY_KEY.BOARD.GET_BOARD_COMMENT, boardId],
    () => getBoardComment(String(params.boardId)),
  );

  const mutationCreateComment = useMutation(
    () => createBoardComment({ boardId, content }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.BOARD.GET_BOARD_COMMENT,
          boardId,
        ]);
      },
    },
  );

  const mutationEditComment = useMutation(
    ({ commentId }: { commentId: number }) =>
      editBoardComment({ commentId, content }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.BOARD.GET_BOARD_COMMENT,
          boardId,
        ]);
      },
    },
  );

  const mutationDeleteComment = useMutation(
    (commentId: number) => deleteBoardComment(commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.BOARD.GET_BOARD_COMMENT,
          boardId,
        ]);
      },
    },
  );

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return <BoardCommentBlock></BoardCommentBlock>;
};

export default BoardComment;

const BoardCommentBlock = styled.div``;
