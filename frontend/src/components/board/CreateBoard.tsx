'use client';

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styled from 'styled-components';
import { useMutation } from '@tanstack/react-query';

import { createBoard } from '@/apis/board';

const CreateBoard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const mutationCreateBoard = useMutation(
    () => createBoard({ title, content }),
    {
      onSuccess: () => {
        router.push('/board');
      },
    },
  );

  return (
    <CreateBoardBlock>
      <Header>
        <Image
          src="/svgs/ArrowBack.svg"
          width={23}
          height={23}
          alt="Arrow-Back"
          onClick={() => router.push('/board')}
        />
        가게 홍보하기
        <PostButton onClick={() => mutationCreateBoard.mutate()}>
          등록
        </PostButton>
      </Header>

      <TitleSection>
        <TitleInput
          type="text"
          placeholder="제목을 입력해 주세요."
          value={title}
          onChange={onChangeTitle}
        />
      </TitleSection>

      <ContentSection>
        <ContentArea
          placeholder="내용을 입력해 주세요."
          value={content}
          onChange={onChangeContent}
        />
      </ContentSection>
    </CreateBoardBlock>
  );
};

export default CreateBoard;

const CreateBoardBlock = styled.div`
  max-width: 50rem;
  height: 100%;
  margin: 0 auto;
  border: 1px solid #eaeaea;
  background-color: #fff;
`;

const Header = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding-left: 2.875rem;
  padding-right: 2.875rem;
  text-align: center;
  position: relative;
  font-size: 1.4rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #191919;

  img {
    cursor: pointer;
  }
`;

const PostButton = styled.button`
  width: 5rem;
  height: 2.5rem;
  border-radius: 28px;
  background-color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: center;
  color: navy;
  border: 2px solid navy;
  cursor: pointer;
`;

const TitleSection = styled.section`
  width: 100%;
  height: 6rem;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleInput = styled.input`
  width: 93%;
  height: 4rem;
  border: none;
  font-size: 1.563rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: #a2a2a2;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  height: 30rem;
  border-bottom: 1px solid #eaeaea;
  padding: 1.8rem;
`;

const ContentArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: #191919;
  resize: none;

  &::placeholder {
    font-size: 1.4rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: #a2a2a2;
  }

  &:focus {
    outline: none;
  }
`;
