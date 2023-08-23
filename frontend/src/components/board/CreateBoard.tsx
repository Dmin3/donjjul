'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styled from 'styled-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { boardImgUpload, createBoard } from '@/apis/board';

import { QUERY_KEY } from '@/constants/queryKey';

const CreateBoard = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imgFile, setImgFile] = useState<any>([]);

  const router = useRouter();
  const queryClient = useQueryClient();

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onChangeImageFile = (e: any) => {
    setImgFile([...imgFile, ...e.target.files]);
  };

  const mutationBoardImgUplpad = useMutation(
    (boardId: number) => boardImgUpload(boardId, imgFile),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.BOARD.GET_BOARD_LIST]);
        router.push('/board');
      },
    },
  );

  const mutationCreateBoard = useMutation(
    () => createBoard({ title, content }),
    {
      onSuccess: (data) => {
        if (imgFile) {
          mutationBoardImgUplpad.mutate(data.id);
        }
      },
    },
  );

  const onClickImgDelete = (index: number) => {
    const tempArr = [...imgFile];
    tempArr.splice(index, 1);
    setImgFile(tempArr);
  };

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

      <UploadSection>
        <FileInput
          type="file"
          id="file"
          multiple
          accept="image/jpg, image/png, image/jpeg, image/webp"
          onChange={onChangeImageFile}
        />

        <UploadButton htmlFor="file">업로드</UploadButton>

        <ImgNameUl>
          {imgFile.map((data: any, i: number) => (
            <ImgLi key={i}>
              <ImgName>{data.name}</ImgName>
              <Image
                src="/svgs/Delete.svg"
                width={15}
                height={15}
                alt="Delete"
                onClick={() => onClickImgDelete(i)}
              />
            </ImgLi>
          ))}
        </ImgNameUl>
      </UploadSection>
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
  height: 38rem;
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

const UploadSection = styled.section`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.label`
  width: 5.375rem;
  height: 4.125rem;
  border: solid 1px #eaeaea;
  background-color: #f5f6f8;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.21px;
  color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 15px;
`;

const ImgNameUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 20rem;
  height: 80%;
  overflow-y: auto;
  border: 1px solid #eaeaea;
`;

const ImgLi = styled.li`
  display: flex;
  align-items: center;

  img {
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    cursor: pointer;
  }
`;

const ImgName = styled.h4`
  font-size: 0.8rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: -0.21px;
  color: #191919;
`;
